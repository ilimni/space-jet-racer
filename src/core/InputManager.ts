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

  // Keyboard state
  private keysDown: Set<string> = new Set();

  // Mouse state
  private isPointerDown: boolean = false;
  private isPointerFiring: boolean = false;
  private pointerPos: { x: number; y: number } = { x: 0, y: 0 };

  // Gyroscope / DeviceOrientation state
  public isGyroAvailable: boolean = false;
  public isGyroActive: boolean = false;
  private neutralBeta: number = 45; // Default ~45 deg phone tilt
  private neutralGamma: number = 0;
  private currentBeta: number = 45;
  private currentGamma: number = 0;

  // Virtual Touch UI Elements & Independent Multi-Touch IDs (Safeguard 3)
  private touchContainer: HTMLElement | null = null;
  private stickBase: HTMLElement | null = null;
  private stickThumb: HTMLElement | null = null;
  private boostButton: HTMLElement | null = null;
  private fireButton: HTMLElement | null = null;

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
    this.initKeyboardListeners();
    this.initMouseListeners();
    this.initTouchUI();
    this.checkGyroCapability();
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

    // 1. Virtual Stick Base (Bottom-Left)
    this.stickBase = document.createElement('div');
    Object.assign(this.stickBase.style, {
      position: 'absolute',
      bottom: '36px',
      left: '36px',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(15, 23, 42, 0.75) 0%, rgba(10, 15, 30, 0.9) 100%)',
      border: '2px solid rgba(0, 240, 255, 0.45)',
      boxShadow: '0 0 16px rgba(0, 240, 255, 0.25), inset 0 0 12px rgba(0, 240, 255, 0.15)',
      pointerEvents: 'auto',
      touchAction: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(6px)',
      webkitBackdropFilter: 'blur(6px)',
    });

    this.stickThumb = document.createElement('div');
    Object.assign(this.stickThumb.style, {
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #00f0ff 0%, #0284c7 100%)',
      boxShadow: '0 0 12px rgba(0, 240, 255, 0.8)',
      pointerEvents: 'none',
      transform: 'translate(0px, 0px)',
      transition: 'box-shadow 0.15s ease',
    });
    this.stickBase.appendChild(this.stickThumb);

    // 2. Tactile Red FIRE Button (Bottom-Right, Stacked Above Boost)
    this.fireButton = document.createElement('div');
    this.fireButton.innerHTML = `<span style="font-size: 12px; font-weight: 900; letter-spacing: 1.5px; color: #fff; text-shadow: 0 0 8px #ff0055;">FIRE</span>`;
    Object.assign(this.fireButton.style, {
      position: 'absolute',
      bottom: '142px',
      right: '42px',
      width: '76px',
      height: '76px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 0, 85, 0.9) 0%, rgba(180, 0, 50, 0.95) 100%)',
      border: '2px solid #ff0055',
      boxShadow: '0 0 20px rgba(255, 0, 85, 0.7), inset 0 0 10px rgba(255, 100, 150, 0.4)',
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
    });

    // 3. Tactile Orange BOOST Button (Bottom-Right)
    this.boostButton = document.createElement('div');
    this.boostButton.innerHTML = `<span style="font-size: 13px; font-weight: 800; letter-spacing: 1.5px; color: #fff; text-shadow: 0 0 8px #ff5500;">BOOST</span>`;
    Object.assign(this.boostButton.style, {
      position: 'absolute',
      bottom: '36px',
      right: '36px',
      width: '88px',
      height: '88px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 85, 0, 0.85) 0%, rgba(180, 40, 0, 0.95) 100%)',
      border: '2px solid #ff7722',
      boxShadow: '0 0 20px rgba(255, 85, 0, 0.6), inset 0 0 10px rgba(255, 200, 0, 0.4)',
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
    });

    this.touchContainer.appendChild(this.stickBase);
    this.touchContainer.appendChild(this.fireButton);
    this.touchContainer.appendChild(this.boostButton);
    document.body.appendChild(this.touchContainer);

    // Multi-Touch Handlers with Independent Touch Identifiers (Safeguard 3)
    this.stickBase.addEventListener('touchstart', this.handleStickStart, { passive: false });
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
      this.stickTouchId = touch.identifier;
      this.stickActive = true;

      if (this.stickBase) {
        const rect = this.stickBase.getBoundingClientRect();
        this.stickCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
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
        break;
      }
    }
  };

  private processStickTouch(clientX: number, clientY: number): void {
    const dx = clientX - this.stickCenter.x;
    const dy = clientY - this.stickCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const clampedDist = Math.min(distance, this.STICK_MAX_RADIUS);
    const angle = Math.atan2(dy, dx);

    const clampedX = Math.cos(angle) * clampedDist;
    const clampedY = Math.sin(angle) * clampedDist;

    if (this.stickThumb) {
      this.stickThumb.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    }

    this.stickVector.x = clampedX / this.STICK_MAX_RADIUS;
    this.stickVector.y = clampedY / this.STICK_MAX_RADIUS;
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
  }

  public calibrateNeutral(): void {
    this.neutralBeta = this.currentBeta;
    this.neutralGamma = this.currentGamma;
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
    let pitch = 0;
    let yaw = 0;
    let roll = 0;
    let throttle = 0;
    let boost = false;
    let fire = false;

    // 1. Keyboard Inputs
    if (this.keysDown.has('KeyW') || this.keysDown.has('ArrowUp')) pitch -= 1;
    if (this.keysDown.has('KeyS') || this.keysDown.has('ArrowDown')) pitch += 1;
    if (this.keysDown.has('KeyA') || this.keysDown.has('ArrowLeft')) yaw -= 1;
    if (this.keysDown.has('KeyD') || this.keysDown.has('ArrowRight')) yaw += 1;
    if (this.keysDown.has('KeyQ')) roll -= 1;
    if (this.keysDown.has('KeyE')) roll += 1;
    if (this.keysDown.has('Space')) boost = true;
    if (this.keysDown.has('KeyF')) fire = true;
    if (this.keysDown.has('ShiftLeft') || this.keysDown.has('ShiftRight')) throttle -= 1;

    // 2. Mouse Steering & Firing Inputs
    if (this.isPointerDown) {
      yaw += this.pointerPos.x;
      pitch += this.pointerPos.y;
    }
    if (this.isPointerFiring) {
      fire = true;
    }

    // 3. Touch Stick Inputs
    if (this.stickActive) {
      yaw += this.stickVector.x;
      pitch += this.stickVector.y;
    }

    // 4. Gyro / Tilt Inputs
    if (this.isGyroActive) {
      const deltaBeta = this.currentBeta - this.neutralBeta;
      const deltaGamma = this.currentGamma - this.neutralGamma;

      const pitchFactor = Math.min(Math.max(deltaBeta / 25, -1), 1);
      const rollFactor = Math.min(Math.max(deltaGamma / 25, -1), 1);

      pitch += pitchFactor;
      roll += rollFactor;
      yaw += rollFactor * 0.6;
    }

    // Touch button overrides
    if (this.isTouchBoosting) {
      boost = true;
    }
    if (this.isTouchFiring) {
      fire = true;
    }

    this.state.pitch = Math.min(Math.max(pitch, -1), 1);
    this.state.yaw = Math.min(Math.max(yaw, -1), 1);
    this.state.roll = Math.min(Math.max(roll, -1), 1);
    this.state.throttle = Math.min(Math.max(throttle, -1), 1);
    this.state.boost = boost;
    this.state.fire = fire;

    return this.state;
  }
}
