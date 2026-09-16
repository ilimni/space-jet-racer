export type InputMode = 'Keyboard & Mouse' | 'Touch Controls' | 'Tilt / Gyro';

export interface InputState {
  pitch: number;    // -1 (nose down/dive) to +1 (nose up/climb)
  yaw: number;      // -1 (steer left) to +1 (steer right)
  roll: number;     // -1 (roll left) to +1 (roll right)
  throttle: number; // -1 (brake) to +1 (accelerate)
  boost: boolean;
  fire: boolean;
}

export class InputManager {
  public state: InputState = {
    pitch: 0,
    yaw: 0,
    roll: 0,
    throttle: 0,
    boost: false,
    fire: false,
  };

  public activeMode: InputMode = 'Keyboard & Mouse';
  public onModeChange?: (mode: InputMode) => void;

  // Pitch Axis Dynamics (Standard Arcade vs. Flight Sim)
  public isPitchInverted: boolean = false;
  public onPitchInversionChange?: (inverted: boolean) => void;

  // Keyboard state
  private keysDown: Set<string> = new Set();

  // Mouse state
  private isPointerDown: boolean = false;
  private isPointerFiring: boolean = false;
  private pointerPos: { x: number; y: number } = { x: 0, y: 0 };

  // Gyroscope / DeviceOrientation state
  public isGyroAvailable: boolean = false;
  public isGyroActive: boolean = false;
  public baselineBeta: number = 45; // Baseline neutral phone tilt
  public baselineGamma: number = 0;
  public currentBeta: number = 45;
  public currentGamma: number = 0;
  public onGyroChange?: (active: boolean) => void;
  private gyroListeners: Array<(active: boolean) => void> = [];

  // Virtual Touch UI Elements & Independent Multi-Touch IDs (Safeguard 3)
  private touchContainer: HTMLElement | null = null;
  private touchZoneLeft: HTMLElement | null = null;
  private stickBase: HTMLElement | null = null;
  private stickThumb: HTMLElement | null = null;
  private boostButton: HTMLElement | null = null;
  private fireButton: HTMLElement | null = null;

  public isStaticJoystick: boolean = false;
  public onJoystickModeChange?: (isStatic: boolean) => void;
  private joystickModeListeners: Array<(isStatic: boolean) => void> = [];

  private stickActive: boolean = false;
  private stickTouchId: number | null = null;
  private boostTouchId: number | null = null;
  private fireTouchId: number | null = null;

  private isTouchBoosting: boolean = false;
  private isTouchFiring: boolean = false;

  private stickCenter: { x: number; y: number } = { x: 0, y: 0 };
  private stickVector: { x: number; y: number } = { x: 0, y: 0 };
  private readonly STICK_MAX_RADIUS = 50;

  constructor() {
    // Load persisted pitch dynamics preference (defaults to false / Standard Arcade)
    try {
      const savedInversion = localStorage.getItem('hyperion_pitch_inverted');
      if (savedInversion !== null) {
        this.isPitchInverted = savedInversion === 'true';
      }
    } catch {
      this.isPitchInverted = false;
    }

    // Load persisted joystick mode preference (defaults to false / Floating Dynamic)
    try {
      const savedJoy = localStorage.getItem('hyperion_joystick_mode');
      this.isStaticJoystick = savedJoy === 'static';
    } catch {
      this.isStaticJoystick = false;
    }

    this.initKeyboardListeners();
    this.initMouseListeners();
    this.initTouchUI();
    this.checkGyroCapability();
  }

  public setJoystickMode(mode: 'floating' | 'static'): void {
    this.isStaticJoystick = mode === 'static';
    try {
      localStorage.setItem('hyperion_joystick_mode', mode);
    } catch {}

    if (this.stickBase) {
      if (this.isStaticJoystick) {
        Object.assign(this.stickBase.style, {
          width: '130px',
          height: '130px',
          bottom: '32px',
          left: '28px',
          top: 'auto',
          opacity: '0.85',
          transform: 'scale(1)',
        });
      } else {
        Object.assign(this.stickBase.style, {
          width: '120px',
          height: '120px',
          opacity: '0',
          transform: 'scale(1)',
        });
      }
    }

    this.onJoystickModeChange?.(this.isStaticJoystick);
    this.joystickModeListeners.forEach((cb) => cb(this.isStaticJoystick));
  }

  public addJoystickModeListener(cb: (isStatic: boolean) => void): () => void {
    this.joystickModeListeners.push(cb);
    return () => {
      const idx = this.joystickModeListeners.indexOf(cb);
      if (idx !== -1) this.joystickModeListeners.splice(idx, 1);
    };
  }

  public setPitchInverted(inverted: boolean): void {
    this.isPitchInverted = inverted;
    try {
      localStorage.setItem('hyperion_pitch_inverted', inverted.toString());
    } catch (e) {
      console.warn('Could not save pitch inverted setting to localStorage', e);
    }
    this.onPitchInversionChange?.(inverted);
  }

  // -------------------------------------------------------------
  // Keyboard Listeners
  // -------------------------------------------------------------
  private initKeyboardListeners(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      this.keysDown.add(e.code);
      this.setMode('Keyboard & Mouse');
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      this.keysDown.delete(e.code);
    });

    window.addEventListener('blur', () => {
      this.keysDown.clear();
      this.isPointerDown = false;
      this.isPointerFiring = false;
    });
  }

  // -------------------------------------------------------------
  // Mouse Steering & Shooting Listeners
  // -------------------------------------------------------------
  private initMouseListeners(): void {
    window.addEventListener('mousedown', (e: MouseEvent) => {
      if (e.button === 0) {
        this.isPointerFiring = true;
        this.setMode('Keyboard & Mouse');
      }
    });

    window.addEventListener('mouseup', (e: MouseEvent) => {
      if (e.button === 0) {
        this.isPointerFiring = false;
      }
    });

    window.addEventListener('pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        this.isPointerDown = true;
        this.updateMouseOffset(e.clientX, e.clientY);
        this.setMode('Keyboard & Mouse');
      }
    });

    window.addEventListener('pointermove', (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && this.isPointerDown) {
        this.updateMouseOffset(e.clientX, e.clientY);
      }
    });

    window.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        this.isPointerDown = false;
        this.pointerPos.x = 0;
        this.pointerPos.y = 0;
      }
    });
  }

  private updateMouseOffset(clientX: number, clientY: number): void {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (clientX - cx) / cx;
    const dy = (clientY - cy) / cy;

    const deadzone = 0.08;
    this.pointerPos.x = Math.abs(dx) < deadzone ? 0 : (dx - Math.sign(dx) * deadzone) / (1 - deadzone);
    this.pointerPos.y = Math.abs(dy) < deadzone ? 0 : (dy - Math.sign(dy) * deadzone) / (1 - deadzone);
  }

  // -------------------------------------------------------------
  // Mobile Virtual Touch UI with Independent Multi-Touch (Safeguard 3)
  // -------------------------------------------------------------
  private initTouchUI(): void {
    this.touchContainer = document.createElement('div');
    this.touchContainer.id = 'touch-controls-container';
    Object.assign(this.touchContainer.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: '1000',
      userSelect: 'none',
      webkitUserSelect: 'none',
    });

    // 0. Left Touch Zone (0 to 50vw, 0 to 100vh) for Floating Dynamic Joystick
    this.touchZoneLeft = document.createElement('div');
    this.touchZoneLeft.id = 'touch-zone-left';
    Object.assign(this.touchZoneLeft.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '50vw',
      height: '100vh',
      pointerEvents: 'auto',
      touchAction: 'none',
      userSelect: 'none',
      webkitUserSelect: 'none',
      zIndex: '1',
    });

    // 1. Virtual Stick Base (Dynamic Floating Circle with 120px Diameter, or Static 130px)
    this.stickBase = document.createElement('div');
    this.stickBase.id = 'virtual-stick-base';
    Object.assign(this.stickBase.style, {
      position: 'absolute',
      width: this.isStaticJoystick ? '130px' : '120px',
      height: this.isStaticJoystick ? '130px' : '120px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(15, 23, 42, 0.5) 0%, rgba(10, 15, 30, 0.85) 100%)',
      border: '2px solid rgba(0, 240, 255, 0.55)',
      boxShadow: '0 0 20px rgba(0, 240, 255, 0.35), inset 0 0 16px rgba(0, 240, 255, 0.2)',
      pointerEvents: 'none',
      touchAction: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      opacity: this.isStaticJoystick ? '0.85' : '0',
      transition: 'opacity 0.2s ease, transform 0.2s ease',
      transform: 'scale(1)',
      zIndex: '2',
    });

    if (this.isStaticJoystick) {
      this.stickBase.style.bottom = '32px';
      this.stickBase.style.left = '28px';
    }

    this.stickThumb = document.createElement('div');
    this.stickThumb.id = 'virtual-stick-thumb';
    Object.assign(this.stickThumb.style, {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #00f0ff 0%, #0284c7 80%, #0369a1 100%)',
      boxShadow: '0 0 16px rgba(0, 240, 255, 0.9), inset 0 1px 2px rgba(255, 255, 255, 0.6)',
      border: '1.5px solid rgba(255, 255, 255, 0.5)',
      pointerEvents: 'none',
      transform: 'translate(0px, 0px)',
      transition: 'box-shadow 0.15s ease',
    });
    this.stickBase.appendChild(this.stickThumb);

    // 2. Tactile Red FIRE Button (Bottom-Right, Stacked Above Boost)
    this.fireButton = document.createElement('div');
    this.fireButton.innerHTML = `<span style="font-size: 11px; font-weight: 900; letter-spacing: 1px; color: #fff; text-shadow: 0 0 8px #ff0055;">FIRE</span>`;
    Object.assign(this.fireButton.style, {
      position: 'absolute',
      bottom: 'calc(max(16px, env(safe-area-inset-bottom, 16px)) + 64px)',
      right: 'max(16px, env(safe-area-inset-right, 16px))',
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 0, 85, 0.9) 0%, rgba(180, 0, 50, 0.95) 100%)',
      border: '2px solid #ff0055',
      boxShadow: '0 0 16px rgba(255, 0, 85, 0.6), inset 0 0 8px rgba(255, 100, 150, 0.4)',
      pointerEvents: 'auto',
      touchAction: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      webkitUserSelect: 'none',
      cursor: 'pointer',
      transform: 'scale(1)',
      transition: 'transform 0.1s ease, box-shadow 0.1s ease',
      zIndex: '10',
    });

    // 3. Tactile Orange BOOST Button (Bottom-Right)
    this.boostButton = document.createElement('div');
    this.boostButton.innerHTML = `<span style="font-size: 11px; font-weight: 800; letter-spacing: 1px; color: #fff; text-shadow: 0 0 8px #ff5500;">BOOST</span>`;
    Object.assign(this.boostButton.style, {
      position: 'absolute',
      bottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
      right: 'max(16px, env(safe-area-inset-right, 16px))',
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 85, 0, 0.85) 0%, rgba(180, 40, 0, 0.95) 100%)',
      border: '2px solid #ff7722',
      boxShadow: '0 0 16px rgba(255, 85, 0, 0.6), inset 0 0 8px rgba(255, 200, 0, 0.4)',
      pointerEvents: 'auto',
      touchAction: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      webkitUserSelect: 'none',
      cursor: 'pointer',
      transform: 'scale(1)',
      transition: 'transform 0.1s ease, box-shadow 0.1s ease',
      zIndex: '10',
    });

    this.touchContainer.appendChild(this.touchZoneLeft);
    this.touchContainer.appendChild(this.stickBase);
    this.touchContainer.appendChild(this.fireButton);
    this.touchContainer.appendChild(this.boostButton);
    document.body.appendChild(this.touchContainer);

    // Multi-Touch Handlers with Independent Touch Identifiers (Safeguard 3)
    this.touchZoneLeft.addEventListener('touchstart', this.handleStickStart, { passive: false });
    window.addEventListener('touchmove', this.handleStickMove, { passive: false });
    window.addEventListener('touchend', this.handleStickEnd, { passive: false });
    window.addEventListener('touchcancel', this.handleStickEnd, { passive: false });

    this.boostButton.addEventListener('touchstart', this.handleBoostStart, { passive: false });
    window.addEventListener('touchend', this.handleBoostEnd, { passive: false });
    window.addEventListener('touchcancel', this.handleBoostEnd, { passive: false });

    this.fireButton.addEventListener('touchstart', this.handleFireStart, { passive: false });
    window.addEventListener('touchend', this.handleFireEnd, { passive: false });
    window.addEventListener('touchcancel', this.handleFireEnd, { passive: false });

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice && window.innerWidth > 900) {
      this.touchContainer.style.opacity = '0.35';
    }
  }

  private handleStickStart = (e: TouchEvent): void => {
    e.preventDefault();
    if (this.stickActive) return;

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.clientX > window.innerWidth * 0.5) continue;

      this.stickTouchId = touch.identifier;
      this.stickActive = true;

      if (!this.isStaticJoystick) {
        // Floating Dynamic Joystick:
        // Spawn joystick base circle (outer ring diameter 120px) centered directly under player's touch coordinates
        this.stickCenter = {
          x: touch.clientX,
          y: touch.clientY,
        };
        if (this.stickBase) {
          const radius = 60; // 120px diameter / 2
          this.stickBase.style.left = `${touch.clientX - radius}px`;
          this.stickBase.style.top = `${touch.clientY - radius}px`;
          this.stickBase.style.bottom = 'auto';
          this.stickBase.style.width = '120px';
          this.stickBase.style.height = '120px';
          this.stickBase.style.opacity = '1';
          this.stickBase.style.transform = 'scale(1)';
        }
      } else {
        // Static Mode: 130px diameter at bottom: 32px; left: 28px
        if (this.stickBase) {
          const rect = this.stickBase.getBoundingClientRect();
          this.stickCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };
          this.stickBase.style.opacity = '1';
        }
      }

      this.processStickTouch(touch.clientX, touch.clientY);
      this.setMode('Touch Controls');
      if (this.touchContainer) this.touchContainer.style.opacity = '1.0';
      break;
    }
  };

  private handleStickMove = (e: TouchEvent): void => {
    if (!this.stickActive) return;

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.stickTouchId) {
        e.preventDefault();
        this.processStickTouch(touch.clientX, touch.clientY);
        break;
      }
    }
  };

  private handleStickEnd = (e: TouchEvent): void => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.stickTouchId) {
        e.preventDefault();
        this.stickActive = false;
        this.stickTouchId = null;
        this.stickVector.x = 0;
        this.stickVector.y = 0;
        if (this.stickThumb) {
          this.stickThumb.style.transform = 'translate(0px, 0px)';
        }
        if (!this.isStaticJoystick && this.stickBase) {
          // Smoothly snap back and fade out graphic ring
          this.stickBase.style.opacity = '0';
          this.stickBase.style.transform = 'scale(0.85)';
        } else if (this.isStaticJoystick && this.stickBase) {
          this.stickBase.style.opacity = '0.85';
        }
        break;
      }
    }
  };

  private processStickTouch(clientX: number, clientY: number): void {
    const dx = clientX - this.stickCenter.x;
    const dy = clientY - this.stickCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = this.isStaticJoystick ? 55 : 50; // Max radius 50px for dynamic floating
    const clampedDist = Math.min(distance, maxRadius);
    const angle = Math.atan2(dy, dx);

    const clampedX = Math.cos(angle) * clampedDist;
    const clampedY = Math.sin(angle) * clampedDist;

    if (this.stickThumb) {
      this.stickThumb.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    }

    this.stickVector.x = clampedX / maxRadius;
    this.stickVector.y = clampedY / maxRadius;
  }

  private handleBoostStart = (e: TouchEvent): void => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      this.boostTouchId = touch.identifier;
      this.isTouchBoosting = true;
      if (this.boostButton) {
        this.boostButton.style.transform = 'scale(0.92)';
        this.boostButton.style.boxShadow = '0 0 30px rgba(255, 120, 0, 0.9), inset 0 0 16px rgba(255, 220, 0, 0.8)';
      }
      this.setMode('Touch Controls');
      if (this.touchContainer) this.touchContainer.style.opacity = '1.0';
      break;
    }
  };

  private handleBoostEnd = (e: TouchEvent): void => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.boostTouchId) {
        e.preventDefault();
        this.isTouchBoosting = false;
        this.boostTouchId = null;
        if (this.boostButton) {
          this.boostButton.style.transform = 'scale(1.0)';
          this.boostButton.style.boxShadow = '0 0 20px rgba(255, 85, 0, 0.6), inset 0 0 10px rgba(255, 200, 0, 0.4)';
        }
        break;
      }
    }
  };

  private handleFireStart = (e: TouchEvent): void => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      this.fireTouchId = touch.identifier;
      this.isTouchFiring = true;
      if (this.fireButton) {
        this.fireButton.style.transform = 'scale(0.92)';
        this.fireButton.style.boxShadow = '0 0 30px rgba(255, 0, 85, 0.9), inset 0 0 16px rgba(255, 150, 180, 0.8)';
      }
      this.setMode('Touch Controls');
      if (this.touchContainer) this.touchContainer.style.opacity = '1.0';
      break;
    }
  };

  private handleFireEnd = (e: TouchEvent): void => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.fireTouchId) {
        e.preventDefault();
        this.isTouchFiring = false;
        this.fireTouchId = null;
        if (this.fireButton) {
          this.fireButton.style.transform = 'scale(1.0)';
          this.fireButton.style.boxShadow = '0 0 20px rgba(255, 0, 85, 0.7), inset 0 0 10px rgba(255, 100, 150, 0.4)';
        }
        break;
      }
    }
  };

  // -------------------------------------------------------------
  // Mobile Gyroscope / DeviceOrientation API
  // -------------------------------------------------------------
  private checkGyroCapability(): void {
    if (window.DeviceOrientationEvent) {
      this.isGyroAvailable = true;
    }
  }

  public async requestGyroPermission(): Promise<boolean> {
    try {
      const DeviceOrientationEventAny = window.DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<'granted' | 'denied'>;
      };

      if (typeof DeviceOrientationEventAny?.requestPermission === 'function') {
        const permission = await DeviceOrientationEventAny.requestPermission();
        if (permission !== 'granted') {
          return false;
        }
      }

      this.enableGyro();
      return true;
    } catch {
      return false;
    }
  }

  public enableGyro(): void {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
    this.isGyroActive = true;
    this.calibrateNeutral();
    this.setMode('Tilt / Gyro');
    this.onGyroChange?.(true);
    this.gyroListeners.forEach((cb) => cb(true));
  }

  public disableGyro(): void {
    window.removeEventListener('deviceorientation', this.handleOrientation, true);
    this.isGyroActive = false;
    this.setMode('Touch Controls');
    this.onGyroChange?.(false);
    this.gyroListeners.forEach((cb) => cb(false));
  }

  public addGyroListener(cb: (active: boolean) => void): () => void {
    this.gyroListeners.push(cb);
    return () => {
      const idx = this.gyroListeners.indexOf(cb);
      if (idx !== -1) this.gyroListeners.splice(idx, 1);
    };
  }

  public calibrateNeutral(): void {
    this.baselineBeta = this.currentBeta;
    this.baselineGamma = this.currentGamma;
  }

  private handleOrientation = (e: DeviceOrientationEvent): void => {
    if (e.beta !== null) this.currentBeta = e.beta;
    if (e.gamma !== null) this.currentGamma = e.gamma;
  };

  // -------------------------------------------------------------
  // Update Loop / Input Aggregation
  // -------------------------------------------------------------
  private setMode(mode: InputMode): void {
    if (this.activeMode !== mode) {
      this.activeMode = mode;
      this.onModeChange?.(mode);
    }
  }

  public update(): InputState {
    let arcadePitch = 0;
    let yaw = 0;
    let roll = 0;
    let throttle = 0;
    let boost = false;
    let fire = false;

    // 1. Keyboard Inputs (Standard Arcade: W / Up = Pitch Up (+1), S / Down = Pitch Down (-1))
    if (this.keysDown.has('KeyW') || this.keysDown.has('ArrowUp')) arcadePitch += 1;
    if (this.keysDown.has('KeyS') || this.keysDown.has('ArrowDown')) arcadePitch -= 1;
    if (this.keysDown.has('KeyA') || this.keysDown.has('ArrowLeft')) yaw -= 1;
    if (this.keysDown.has('KeyD') || this.keysDown.has('ArrowRight')) yaw += 1;
    if (this.keysDown.has('KeyQ')) roll -= 1;
    if (this.keysDown.has('KeyE')) roll += 1;
    if (this.keysDown.has('Space')) boost = true;
    if (this.keysDown.has('KeyF')) fire = true;
    if (this.keysDown.has('ShiftLeft') || this.keysDown.has('ShiftRight')) throttle -= 1;

    // 2. Mouse Steering & Firing Inputs (Dragging mouse UP has pointerPos.y < 0 -> Pitch Up (+1))
    if (this.isPointerDown) {
      yaw += this.pointerPos.x;
      arcadePitch -= this.pointerPos.y;
    }
    if (this.isPointerFiring) {
      fire = true;
    }

    // 3. Touch Stick Inputs (Pushing stick UP has stickVector.y < 0 -> Pitch Up (+1))
    if (this.stickActive) {
      yaw += this.stickVector.x;
      arcadePitch -= this.stickVector.y;
    }

    // 4. Gyroscope Tilt Flight Steering
    if (this.isGyroActive) {
      const deltaPitch = Math.min(Math.max((this.currentBeta - this.baselineBeta) / 25.0, -1), 1);
      const deltaRoll = Math.min(Math.max((this.currentGamma - this.baselineGamma) / 30.0, -1), 1);

      // Blend with flight controls: Gyro controls pitch and banking turn when active
      arcadePitch -= deltaPitch;
      roll += deltaRoll;
      yaw += deltaRoll * 0.75;
    }

    // Touch button overrides
    if (this.isTouchBoosting) {
      boost = true;
    }
    if (this.isTouchFiring) {
      fire = true;
    }

    // Apply inversion dynamically:
    // When isPitchInverted === false (Standard Arcade): Up = Pitch Up (+1), Down = Pitch Down (-1)
    // When isPitchInverted === true (Flight Sim): Up = Pitch Down (-1), Down = Pitch Up (+1)
    const finalPitch = this.isPitchInverted ? -arcadePitch : arcadePitch;

    this.state.pitch = Math.min(Math.max(finalPitch, -1), 1);
    this.state.yaw = Math.min(Math.max(yaw, -1), 1);
    this.state.roll = Math.min(Math.max(roll, -1), 1);
    this.state.throttle = Math.min(Math.max(throttle, -1), 1);
    this.state.boost = boost;
    this.state.fire = fire;

    return this.state;
  }
}
