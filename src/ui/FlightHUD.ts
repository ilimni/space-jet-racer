import * as THREE from 'three';
import { InputManager } from '../core/InputManager';
import { AIRival } from '../entities/AIRival';

export interface RaceStats {
  rank: number;
  totalTime: string;
  shotsFired: number;
  asteroidsDestroyed: number;
}

export interface RivalMarkerDOM {
  container: HTMLDivElement;
  arrowSvg: SVGElement;
  card: HTMLDivElement;
  pipSvg: SVGElement;
  detailsEl: HTMLDivElement;
  nameEl: HTMLSpanElement;
  distEl: HTMLSpanElement;
  heartPips: HTMLSpanElement[];
  isPipMode?: boolean;
}

export class FlightHUD {
  private container: HTMLDivElement;
  private speedValueEl!: HTMLElement;
  private speedBarFillEl!: HTMLElement;
  private boostSegments: HTMLElement[] = [];
  private boostPercentEl!: HTMLElement;
  private inputBadgeEl!: HTMLElement;
  private gyroBtn!: HTMLButtonElement;
  private calibrateBtn!: HTMLButtonElement;
  private inputManager: InputManager;

  // Checkpoint Tracker, Rank Badge & Race Timer
  private gateTrackerEl!: HTMLElement;
  private rankBadgeEl!: HTMLElement;
  private timerEl!: HTMLElement;
  private navChevronEl!: HTMLElement;
  private navDistanceEl!: HTMLElement;
  private navArrowSvg!: SVGElement;
  private damageVignetteEl!: HTMLElement;
  private finishBannerEl!: HTMLElement;

  // 10-Heart Health System Elements
  private heartsRowEl!: HTMLElement;
  private heartsTextEl!: HTMLElement;
  private heartElements: HTMLElement[] = [];
  private emergencyStrobeEl!: HTMLElement;
  private lastHearts: number = 10;
  private readonly MAX_HEARTS: number = 10;

  // Weapon Heat Gauge Elements
  private heatBarFillEl!: HTMLElement;
  private heatStatusEl!: HTMLElement;

  // Audio Context for Sounds
  private audioCtx: AudioContext | null = null;

  private damageFlashAlpha: number = 0;
  private raceElapsedTime: number = 0;
  private isRaceOver: boolean = false;
  private readonly NUM_BOOST_SEGMENTS = 10;

  // Pilot Callsign & Rival HUD Screen-Space Markers
  private pilotCallsign: string = 'VIPER-01';
  private pilotCallsignEl!: HTMLElement;
  private rivalMarkers: RivalMarkerDOM[] = [];
  private readonly tempRivalPos = new THREE.Vector3();
  private readonly rivalOffset = new THREE.Vector3(0, 3.2, 0);
  public onPodiumRestart?: () => void;

  // Unified Top Header & Peripheral Gauges
  private headerContainerEl!: HTMLElement;
  private headerLeftEl!: HTMLElement;
  private headerCenterEl!: HTMLElement;
  private headerRightEl!: HTMLElement;
  private boostGaugeContainer!: HTMLElement;
  private heatGaugeContainer!: HTMLElement;
  private keyHintEl?: HTMLElement;

  // Reusable vectors for projection
  private readonly projCamSpace = new THREE.Vector3();
  private readonly projNDC = new THREE.Vector3();

  constructor(inputManager: InputManager) {
    this.inputManager = inputManager;
    this.container = document.createElement('div');
    this.container.id = 'flight-hud';
    this.initAudio();
    this.initStylesAndDOM();
    document.body.appendChild(this.container);

    this.inputManager.onModeChange = (mode) => {
      this.setInputMode(mode);
    };
  }

  private initAudio(): void {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      this.audioCtx = new AudioCtxClass();
    }
  }

  private playGlitchWarningSound(): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.18);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  private initStylesAndDOM(): void {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes emergencyStrobe {
        0%, 100% {
          box-shadow: inset 0 0 50px rgba(255, 0, 60, 0.8), inset 0 0 120px rgba(255, 0, 60, 0.4);
          border: 3px solid rgba(255, 26, 117, 0.9);
        }
        50% {
          box-shadow: inset 0 0 15px rgba(255, 0, 60, 0.2), inset 0 0 30px rgba(255, 0, 60, 0.1);
          border: 3px solid rgba(255, 26, 117, 0.25);
        }
      }
      @keyframes heartPopShatter {
        0% { transform: scale(1.6); filter: brightness(3); }
        40% { transform: scale(0.6) rotate(-15deg); filter: brightness(1.5); }
        100% { transform: scale(1.0) rotate(0deg); }
      }
      @keyframes overheatBlink {
        0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px #ff0055); }
        50% { opacity: 0.3; }
      }

      /* Unified Top Header Layout & Responsive Rules */
      #hud-top-header {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
        padding-top: max(10px, env(safe-area-inset-top));
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        pointer-events: none;
        z-index: 2000;
        box-sizing: border-box;
      }

      /* Peripheral Corner Gauges */
      #hud-boost-gauge {
        position: absolute;
        bottom: 56px;
        left: max(16px, env(safe-area-inset-left, 16px));
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 6px 12px;
        background: rgba(10, 15, 25, 0.78);
        border: 1px solid rgba(56, 189, 248, 0.3);
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        pointer-events: none;
        z-index: 2010;
        width: 140px;
        box-sizing: border-box;
      }

      #hud-heat-gauge {
        position: absolute;
        bottom: 56px;
        right: max(16px, env(safe-area-inset-right, 16px));
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 6px 12px;
        background: rgba(10, 15, 25, 0.78);
        border: 1px solid rgba(255, 0, 85, 0.3);
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        pointer-events: none;
        z-index: 2010;
        width: 140px;
        box-sizing: border-box;
      }

      /* Touch Screen Position Overrides: Anchor cleanly above mobile controls */
      @media (hover: none) and (pointer: coarse), (max-width: 900px) {
        #hud-boost-gauge {
          bottom: calc(max(16px, env(safe-area-inset-bottom, 16px)) + 104px) !important;
        }
        #hud-heat-gauge {
          bottom: calc(max(16px, env(safe-area-inset-bottom, 16px)) + 130px) !important;
        }
      }

      /* Mobile Landscape Scaling (screen height <= 500px) */
      @media (max-height: 500px) {
        #hud-top-header {
          transform: scale(0.85);
          transform-origin: top center;
          padding-top: max(2px, env(safe-area-inset-top, 2px)) !important;
        }
        #hud-boost-gauge {
          transform: scale(0.85);
          transform-origin: bottom left;
          bottom: calc(max(10px, env(safe-area-inset-bottom, 10px)) + 92px) !important;
        }
        #hud-heat-gauge {
          transform: scale(0.85);
          transform-origin: bottom right;
          bottom: calc(max(10px, env(safe-area-inset-bottom, 10px)) + 118px) !important;
        }
      }

      @media (max-width: 600px) {
        #hud-top-left {
          gap: 4px !important;
        }
        #hud-rank-badge, #hud-gate-tracker {
          padding: 4px 8px !important;
          font-size: 11px !important;
        }
        #hud-callsign-badge {
          display: none !important;
        }
        #hud-timer-container {
          padding: 4px 10px !important;
        }
        #timer-digits {
          font-size: 15px !important;
        }
        #hud-top-right {
          gap: 6px !important;
        }
      }

      @media (max-width: 390px) {
        #hud-rank-badge, #hud-gate-tracker {
          padding: 3px 6px !important;
          font-size: 10px !important;
        }
        #timer-digits {
          font-size: 13px !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    Object.assign(this.container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      userSelect: 'none',
      webkitUserSelect: 'none',
      zIndex: '2000',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#ffffff',
    });

    // -------------------------------------------------------------
    // Critical Health Emergency Strobe Border
    // -------------------------------------------------------------
    this.emergencyStrobeEl = document.createElement('div');
    this.emergencyStrobeEl.id = 'hud-emergency-strobe';
    Object.assign(this.emergencyStrobeEl.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: '0',
      transition: 'opacity 0.25s ease',
      zIndex: '2040',
      animation: 'emergencyStrobe 0.8s infinite ease-in-out',
    });
    this.container.appendChild(this.emergencyStrobeEl);

    // -------------------------------------------------------------
    // Red Damage Vignette Overlay
    // -------------------------------------------------------------
    this.damageVignetteEl = document.createElement('div');
    this.damageVignetteEl.id = 'damage-vignette';
    Object.assign(this.damageVignetteEl.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at center, transparent 35%, rgba(255, 20, 20, 0.75) 100%)',
      opacity: '0',
      transition: 'opacity 0.08s ease-out',
      zIndex: '2050',
    });
    this.container.appendChild(this.damageVignetteEl);

    // -------------------------------------------------------------
    // 1. Unified Non-Overlapping Top Header Container
    // -------------------------------------------------------------
    this.headerContainerEl = document.createElement('div');
    this.headerContainerEl.id = 'hud-top-header';

    // Left Column: Leaderboard badge and Gate tracker vertically stacked (6px gap)
    this.headerLeftEl = document.createElement('div');
    this.headerLeftEl.id = 'hud-top-left';
    Object.assign(this.headerLeftEl.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'flex-start',
      pointerEvents: 'auto',
    });

    // Real-Time Leaderboard Placement Badge (Gold Glowing)
    this.rankBadgeEl = document.createElement('div');
    this.rankBadgeEl.id = 'hud-rank-badge';
    Object.assign(this.rankBadgeEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 14px',
      background: 'rgba(15, 20, 30, 0.82)',
      border: '1.5px solid #ffd700',
      borderRadius: '10px',
      fontSize: '12px',
      fontWeight: '900',
      letterSpacing: '1.2px',
      color: '#ffd700',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(255, 215, 0, 0.25)',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });
    this.rankBadgeEl.innerHTML = `<span style="font-size: 13px;">🏆</span><span>1ST / 4</span>`;
    this.headerLeftEl.appendChild(this.rankBadgeEl);

    // Gate Tracker
    this.gateTrackerEl = document.createElement('div');
    this.gateTrackerEl.id = 'hud-gate-tracker';
    Object.assign(this.gateTrackerEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      background: 'rgba(10, 15, 25, 0.78)',
      border: '1px solid rgba(0, 240, 255, 0.45)',
      borderRadius: '10px',
      fontSize: '12px',
      fontWeight: '800',
      letterSpacing: '1.2px',
      color: '#00f0ff',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.12)',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });
    this.gateTrackerEl.innerHTML = `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#00f0ff;box-shadow:0 0 8px #00f0ff;"></span><span>GATE 01 / 15</span>`;
    this.headerLeftEl.appendChild(this.gateTrackerEl);

    // Pilot Callsign Badge (compact display in left column)
    this.pilotCallsignEl = document.createElement('div');
    this.pilotCallsignEl.id = 'hud-callsign-badge';
    Object.assign(this.pilotCallsignEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '3px 8px',
      background: 'rgba(10, 15, 25, 0.65)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '6px',
      fontSize: '10px',
      fontWeight: '800',
      letterSpacing: '1px',
      color: '#ffffff',
      backdropFilter: 'blur(6px)',
      webkitBackdropFilter: 'blur(6px)',
      whiteSpace: 'nowrap',
    });
    this.pilotCallsignEl.innerHTML = `<span style="color:#00f0ff;">ID</span> <span>${this.pilotCallsign}</span>`;
    this.headerLeftEl.appendChild(this.pilotCallsignEl);

    this.headerContainerEl.appendChild(this.headerLeftEl);

    // Center Column: Race Stopwatch + Digital Speedometer + 10-Heart Life Row
    this.headerCenterEl = document.createElement('div');
    this.headerCenterEl.id = 'hud-top-center';
    Object.assign(this.headerCenterEl.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto',
      gap: '2px',
      maxHeight: '62px',
    });

    // 1. Race Stopwatch
    this.timerEl = document.createElement('div');
    this.timerEl.id = 'hud-timer-container';
    Object.assign(this.timerEl.style, {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      padding: '2px 10px',
      background: 'rgba(10, 15, 25, 0.82)',
      border: '1px solid rgba(56, 189, 248, 0.35)',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });
    this.timerEl.innerHTML = `
      <span style="font-size: 8px; font-weight: 700; letter-spacing: 1.5px; color: #94a3b8; text-transform: uppercase;">TIME</span>
      <span id="timer-digits" style="font-size: 14px; font-weight: 900; font-family: ui-monospace, SFMono-Regular, monospace; color: #ffffff; letter-spacing: 0.8px; text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);">00:00:00</span>
    `;
    this.headerCenterEl.appendChild(this.timerEl);

    // 2. Digital Speedometer: Sleek monospace readout (#38bdf8, 15px)
    const speedRow = document.createElement('div');
    speedRow.id = 'hud-speed-row';
    Object.assign(speedRow.style, {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1px',
    });

    this.speedValueEl = document.createElement('div');
    Object.assign(this.speedValueEl.style, {
      fontSize: '15px',
      fontWeight: '900',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      color: '#38bdf8',
      letterSpacing: '0.8px',
      textShadow: '0 0 8px rgba(56, 189, 248, 0.5)',
      lineHeight: '1.1',
      whiteSpace: 'nowrap',
    });
    this.speedValueEl.innerText = '0 KM/H';
    speedRow.appendChild(this.speedValueEl);

    this.speedBarFillEl = document.createElement('div');
    this.speedBarFillEl.style.display = 'none';
    speedRow.appendChild(this.speedBarFillEl);

    this.headerCenterEl.appendChild(speedRow);

    // 3. 10-Heart Life Row: Compact horizontal pip row (9px hearts, 3px spacing)
    this.heartsRowEl = document.createElement('div');
    this.heartsRowEl.id = 'hud-hearts-row';
    Object.assign(this.heartsRowEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      marginTop: '1px',
      lineHeight: '9px',
    });

    this.heartElements = [];
    for (let i = 0; i < this.MAX_HEARTS; i++) {
      const heart = document.createElement('span');
      heart.innerText = '♥';
      Object.assign(heart.style, {
        fontSize: '9px',
        lineHeight: '9px',
        color: '#ff1a75',
        textShadow: '0 0 6px #ff1a75',
        display: 'inline-block',
        transition: 'all 0.2s ease',
      });
      this.heartElements.push(heart);
      this.heartsRowEl.appendChild(heart);
    }
    this.headerCenterEl.appendChild(this.heartsRowEl);

    this.heartsTextEl = document.createElement('span');
    this.heartsTextEl.style.display = 'none';
    this.headerCenterEl.appendChild(this.heartsTextEl);

    this.headerContainerEl.appendChild(this.headerCenterEl);

    // Right Row: FPS monitor and PAUSE button side-by-side with 10px gap
    this.headerRightEl = document.createElement('div');
    this.headerRightEl.id = 'hud-top-right';
    Object.assign(this.headerRightEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      pointerEvents: 'auto',
      justifyContent: 'flex-end',
    });

    // Mount input badge in right row
    this.inputBadgeEl = document.createElement('div');
    this.inputBadgeEl.id = 'hud-input-badge';
    Object.assign(this.inputBadgeEl.style, {
      display: 'none',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px',
      background: 'rgba(10, 15, 25, 0.75)',
      border: '1px solid rgba(0, 240, 255, 0.4)',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '1px',
      color: '#00f0ff',
      backdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });
    this.inputBadgeEl.innerHTML = `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#00f0ff;"></span><span id="hud-mode-text">KEYBOARD</span>`;
    this.headerRightEl.appendChild(this.inputBadgeEl);

    // Mobile Gyroscope Button (Clean Sci-Fi aesthetic)
    this.gyroBtn = document.createElement('button');
    this.gyroBtn.id = 'hud-gyro-btn';
    this.gyroBtn.innerText = 'GYRO STEERING: [ OFF ]';
    Object.assign(this.gyroBtn.style, {
      padding: '5px 12px',
      background: 'rgba(15, 23, 42, 0.75)',
      border: '1px solid rgba(56, 189, 248, 0.3)',
      borderRadius: '8px',
      fontSize: '11px',
      fontFamily: 'monospace',
      fontWeight: '700',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      boxShadow: 'none',
      userSelect: 'none',
    });

    // Secondary compact [ CALIBRATE ZERO ] button
    this.calibrateBtn = document.createElement('button');
    this.calibrateBtn.id = 'hud-calibrate-btn';
    this.calibrateBtn.innerText = '[ CALIBRATE ZERO ]';
    Object.assign(this.calibrateBtn.style, {
      padding: '5px 10px',
      background: 'rgba(15, 23, 42, 0.75)',
      border: '1px solid rgba(56, 189, 248, 0.3)',
      borderRadius: '8px',
      fontSize: '11px',
      fontFamily: 'monospace',
      fontWeight: '700',
      letterSpacing: '1.5px',
      color: '#38bdf8',
      cursor: 'pointer',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      boxShadow: 'none',
      userSelect: 'none',
    });

    const updateGyroBtnUI = () => {
      if (this.inputManager.isTiltEnabled) {
        this.gyroBtn.innerText = 'GYRO STEERING: [ ACTIVE ]';
        this.gyroBtn.style.borderColor = '#00f0ff';
        this.gyroBtn.style.color = '#00f0ff';
        this.gyroBtn.style.background = 'rgba(10, 25, 45, 0.85)';
        this.gyroBtn.style.boxShadow = '0 0 14px rgba(0, 240, 255, 0.45)';
        this.calibrateBtn.style.display = 'inline-flex';
      } else {
        this.gyroBtn.innerText = 'GYRO STEERING: [ OFF ]';
        this.gyroBtn.style.borderColor = 'rgba(56, 189, 248, 0.3)';
        this.gyroBtn.style.color = '#94a3b8';
        this.gyroBtn.style.background = 'rgba(15, 23, 42, 0.75)';
        this.gyroBtn.style.boxShadow = 'none';
        this.calibrateBtn.style.display = 'none';
      }
    };

    this.gyroBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!this.inputManager.isTiltEnabled) {
        const granted = await this.inputManager.enableTilt();
        if (granted) {
          updateGyroBtnUI();
        } else {
          this.gyroBtn.innerText = 'GYRO: [ UNAVAILABLE ]';
          setTimeout(() => updateGyroBtnUI(), 1500);
        }
      } else {
        this.inputManager.disableTilt();
        updateGyroBtnUI();
      }
    });

    this.calibrateBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.inputManager.calibrateNeutral();
      this.calibrateBtn.innerText = '[ ZEROED ]';
      setTimeout(() => {
        this.calibrateBtn.innerText = '[ CALIBRATE ZERO ]';
      }, 800);
    });

    this.inputManager.addGyroListener(() => {
      updateGyroBtnUI();
    });

    this.headerRightEl.appendChild(this.gyroBtn);
    this.headerRightEl.appendChild(this.calibrateBtn);

    this.headerContainerEl.appendChild(this.headerRightEl);
    this.container.appendChild(this.headerContainerEl);

    // -------------------------------------------------------------
    // 2. 3D Screen-Space Waypoint Navigation Indicator
    // -------------------------------------------------------------
    this.navChevronEl = document.createElement('div');
    this.navChevronEl.id = 'nav-waypoint-indicator';
    Object.assign(this.navChevronEl.style, {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease',
      zIndex: '2020',
    });

    const svgWrapper = document.createElement('div');
    svgWrapper.innerHTML = `
      <svg id="nav-arrow-svg" width="34" height="34" viewBox="0 0 34 34" style="filter: drop-shadow(0 0 8px #00f0ff); transform-origin: center;">
        <polygon points="17,3 31,29 17,21 3,29" fill="#00f0ff" stroke="#ffffff" stroke-width="1.5" />
      </svg>
    `;
    this.navArrowSvg = svgWrapper.querySelector('#nav-arrow-svg') as SVGElement;
    this.navChevronEl.appendChild(svgWrapper);

    this.navDistanceEl = document.createElement('div');
    Object.assign(this.navDistanceEl.style, {
      padding: '2px 8px',
      background: 'rgba(10, 15, 25, 0.85)',
      border: '1px solid rgba(0, 240, 255, 0.5)',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#00f0ff',
      letterSpacing: '0.5px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
      whiteSpace: 'nowrap',
    });
    this.navDistanceEl.innerText = '140m';
    this.navChevronEl.appendChild(this.navDistanceEl);

    this.container.appendChild(this.navChevronEl);

    // -------------------------------------------------------------
    // Peripheral Corner Gauges (Unobstructed Viewport Center)
    // -------------------------------------------------------------
    // 1. Boost Gauge: Slim horizontal segmented cyan bar (Bottom-Left)
    this.boostGaugeContainer = document.createElement('div');
    this.boostGaugeContainer.id = 'hud-boost-gauge';
    this.boostSegments = [];

    const boostHeaderRow = document.createElement('div');
    Object.assign(boostHeaderRow.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    });

    const boostTitle = document.createElement('div');
    Object.assign(boostTitle.style, {
      fontSize: '9px',
      fontWeight: '800',
      letterSpacing: '1.5px',
      color: '#38bdf8',
      textTransform: 'uppercase',
    });
    boostTitle.innerText = 'BOOST';
    boostHeaderRow.appendChild(boostTitle);

    this.boostPercentEl = document.createElement('div');
    Object.assign(this.boostPercentEl.style, {
      fontSize: '10px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#38bdf8',
    });
    this.boostPercentEl.innerText = '100%';
    boostHeaderRow.appendChild(this.boostPercentEl);
    this.boostGaugeContainer.appendChild(boostHeaderRow);

    const segmentsRow = document.createElement('div');
    Object.assign(segmentsRow.style, {
      display: 'flex',
      gap: '3px',
      marginTop: '3px',
    });

    for (let i = 0; i < this.NUM_BOOST_SEGMENTS; i++) {
      const seg = document.createElement('div');
      Object.assign(seg.style, {
        flex: '1',
        height: '8px',
        borderRadius: '1px',
        background: '#00f0ff',
        boxShadow: '0 0 5px rgba(0, 240, 255, 0.6)',
        transition: 'background 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease',
      });
      this.boostSegments.push(seg);
      segmentsRow.appendChild(seg);
    }
    this.boostGaugeContainer.appendChild(segmentsRow);
    this.container.appendChild(this.boostGaugeContainer);

    // 2. Cannon Heat Gauge: Compact status indicator & bar (Bottom-Right)
    this.heatGaugeContainer = document.createElement('div');
    this.heatGaugeContainer.id = 'hud-heat-gauge';

    const heatHeaderRow = document.createElement('div');
    Object.assign(heatHeaderRow.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    });

    const heatTitle = document.createElement('div');
    Object.assign(heatTitle.style, {
      fontSize: '9px',
      fontWeight: '800',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      textTransform: 'uppercase',
    });
    heatTitle.innerText = 'CANNON';
    heatHeaderRow.appendChild(heatTitle);

    this.heatStatusEl = document.createElement('div');
    Object.assign(this.heatStatusEl.style, {
      fontSize: '9.5px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#00f0ff',
    });
    this.heatStatusEl.innerText = 'READY';
    heatHeaderRow.appendChild(this.heatStatusEl);
    this.heatGaugeContainer.appendChild(heatHeaderRow);

    const heatTrack = document.createElement('div');
    Object.assign(heatTrack.style, {
      width: '100%',
      height: '6px',
      background: 'rgba(255, 255, 255, 0.12)',
      borderRadius: '3px',
      overflow: 'hidden',
      marginTop: '3px',
    });

    this.heatBarFillEl = document.createElement('div');
    Object.assign(this.heatBarFillEl.style, {
      width: '0%',
      height: '100%',
      background: 'linear-gradient(90deg, #ff0055, #ff5500)',
      boxShadow: '0 0 6px #ff0055',
      transition: 'width 0.08s ease',
    });
    heatTrack.appendChild(this.heatBarFillEl);
    this.heatGaugeContainer.appendChild(heatTrack);
    this.container.appendChild(this.heatGaugeContainer);

    // Desktop Keybinding Hint
    this.keyHintEl = document.createElement('div');
    Object.assign(this.keyHintEl.style, {
      position: 'absolute',
      bottom: '16px',
      left: '20px',
      padding: '6px 12px',
      background: 'rgba(10, 15, 25, 0.65)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      fontSize: '11px',
      color: '#94a3b8',
      letterSpacing: '0.5px',
      backdropFilter: 'blur(4px)',
      display: window.innerWidth > 900 ? 'block' : 'none',
    });
    this.keyHintEl.innerHTML = `<span style="color:#00f0ff;">[W/S]</span> Pitch • <span style="color:#00f0ff;">[A/D]</span> Yaw • <span style="color:#00f0ff;">[Q/E]</span> Roll • <span style="color:#ff0055;">[F / Click]</span> Fire • <span style="color:#ff7722;">[SPACE]</span> Boost • <span style="color:#94a3b8;">[SHIFT]</span> Brake`;
    this.container.appendChild(this.keyHintEl);

    // -------------------------------------------------------------
    // Victory Podium Modal (Fullscreen)
    // -------------------------------------------------------------
    this.finishBannerEl = document.createElement('div');
    this.finishBannerEl.id = 'victory-podium-overlay';
    Object.assign(this.finishBannerEl.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(5, 10, 20, 0.88)',
      backdropFilter: 'blur(12px)',
      webkitBackdropFilter: 'blur(12px)',
      zIndex: '99999',
      pointerEvents: 'auto',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      boxSizing: 'border-box',
      padding: '20px',
    });

    this.finishBannerEl.innerHTML = `
      <div class="podium-modal-card" style="position: relative; max-width: 460px; width: 92%; padding: 36px 40px; background: rgba(10, 16, 32, 0.96); border: 2px solid #ffd700; border-radius: 24px; text-align: center; box-shadow: 0 0 60px rgba(255, 215, 0, 0.5), inset 0 0 24px rgba(255, 215, 0, 0.2); box-sizing: border-box;">
        <div style="font-size: 13px; font-weight: 900; letter-spacing: 4px; color: #ffd700; text-transform: uppercase;">RACE FINISH</div>
        <div id="podium-rank-text" style="font-size: 34px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin: 8px 0; text-shadow: 0 0 20px rgba(255, 215, 0, 0.85);">1ST PLACE</div>
        <div id="podium-time-text" style="font-size: 18px; font-weight: 800; color: #00f0ff; font-family: ui-monospace, monospace; margin-bottom: 20px;">FINAL TIME: 00:00:00</div>
        <div style="display: flex; justify-content: space-around; gap: 16px; margin-bottom: 28px; padding: 14px; background: rgba(255, 255, 255, 0.05); border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div>
            <div style="font-size: 10px; color: #94a3b8; font-weight: 700; letter-spacing: 1px;">SHOTS FIRED</div>
            <div id="podium-shots-text" style="font-size: 20px; font-weight: 900; color: #ff0055; font-family: ui-monospace, monospace; margin-top: 4px;">0</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.15);"></div>
          <div>
            <div style="font-size: 10px; color: #94a3b8; font-weight: 700; letter-spacing: 1px;">ASTEROIDS DESTROYED</div>
            <div id="podium-kills-text" style="font-size: 20px; font-weight: 900; color: #00ff88; font-family: ui-monospace, monospace; margin-top: 4px;">0</div>
          </div>
        </div>
        <button id="podium-restart-btn" style="width: 100%; padding: 14px 28px; background: linear-gradient(90deg, #ffd700, #ff8800); border: none; border-radius: 14px; font-size: 14px; font-weight: 900; letter-spacing: 2px; color: #050a14; cursor: pointer; box-shadow: 0 0 24px rgba(255, 215, 0, 0.7); transition: transform 0.15s ease, box-shadow 0.2s ease;">
          PLAY AGAIN
        </button>
      </div>
    `;
    this.container.appendChild(this.finishBannerEl);

    const restartBtn = this.finishBannerEl.querySelector('#podium-restart-btn') as HTMLButtonElement;
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        if (this.onPodiumRestart) {
          this.onPodiumRestart();
        } else {
          window.location.reload();
        }
      });
    }
  }

  public setInputMode(mode: string): void {
    if (this.inputBadgeEl) {
      const textEl = this.inputBadgeEl.querySelector('#hud-mode-text') as HTMLElement;
      if (textEl) {
        textEl.innerText = mode.toUpperCase();
      }
    }
  }

  public setStandings(rank: number): void {
    const suffixes = ['TH', 'ST', 'ND', 'RD'];
    const v = rank % 100;
    const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
    this.rankBadgeEl.innerHTML = `<span style="font-size: 14px;">🏆</span><span>${rank}${suffix} / 4</span>`;
  }

  public triggerDamageFlash(): void {
    this.damageFlashAlpha = 1.0;
  }

  public addPenaltyTime(seconds: number): void {
    this.raceElapsedTime += seconds;
  }

  public updateWeaponHeat(heatRatio: number, isOverheated: boolean): void {
    this.heatBarFillEl.style.width = `${(heatRatio * 100).toFixed(0)}%`;

    if (isOverheated) {
      this.heatStatusEl.innerText = 'OVERHEATED!';
      this.heatStatusEl.style.color = '#ff0055';
      this.heatStatusEl.style.animation = 'overheatBlink 0.4s infinite';
      this.heatBarFillEl.style.background = '#ff0055';
      this.heatBarFillEl.style.boxShadow = '0 0 12px #ff0055';
    } else {
      this.heatStatusEl.innerText = heatRatio > 0.7 ? 'HOT' : 'READY';
      this.heatStatusEl.style.color = heatRatio > 0.7 ? '#ffaa00' : '#00f0ff';
      this.heatStatusEl.style.animation = 'none';
      this.heatBarFillEl.style.background = 'linear-gradient(90deg, #ff0055, #ffaa00)';
      this.heatBarFillEl.style.boxShadow = '0 0 8px #ff0055';
    }
  }

  public updateHearts(currentHearts: number, maxHearts: number = 10): void {
    const clampedHearts = Math.max(0, Math.min(maxHearts, currentHearts));

    if (clampedHearts < this.lastHearts) {
      this.playGlitchWarningSound();

      for (let i = clampedHearts; i < this.lastHearts; i++) {
        const h = this.heartElements[i];
        if (h) {
          h.style.animation = 'none';
          void h.offsetWidth;
          h.style.animation = 'heartPopShatter 0.4s ease-out';
        }
      }
    }

    this.lastHearts = clampedHearts;

    for (let i = 0; i < this.MAX_HEARTS; i++) {
      const heart = this.heartElements[i];
      if (i < clampedHearts) {
        heart.innerText = '♥';
        heart.style.color = '#ff1a75';
        heart.style.textShadow = '0 0 8px #ff1a75, 0 0 16px rgba(255, 26, 117, 0.6)';
        heart.style.opacity = '1.0';
      } else {
        heart.innerText = '♡';
        heart.style.color = '#334155';
        heart.style.textShadow = 'none';
        heart.style.opacity = '0.5';
      }
    }

    this.heartsTextEl.innerText = `(${clampedHearts} / ${maxHearts} HEARTS)`;

    if (clampedHearts <= 2 && clampedHearts > 0) {
      this.emergencyStrobeEl.style.opacity = '1.0';
      this.heartsTextEl.style.color = '#ff003c';
    } else {
      this.emergencyStrobeEl.style.opacity = '0';
      this.heartsTextEl.style.color = '#ff1a75';
    }
  }

  public updateGate(currentGate: number, totalGates: number): void {
    const formattedCurrent = (currentGate + 1).toString().padStart(2, '0');
    const formattedTotal = totalGates.toString().padStart(2, '0');
    this.gateTrackerEl.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#00f0ff;box-shadow:0 0 8px #00f0ff;"></span><span>GATE ${formattedCurrent} / ${formattedTotal}</span>`;
  }

  public showVictoryPodium(stats: RaceStats): void {
    this.isRaceOver = true;

    const rankEl = this.finishBannerEl.querySelector('#podium-rank-text');
    const timeEl = this.finishBannerEl.querySelector('#podium-time-text');
    const shotsEl = this.finishBannerEl.querySelector('#podium-shots-text');
    const killsEl = this.finishBannerEl.querySelector('#podium-kills-text');
    const cardEl = this.finishBannerEl.querySelector('.podium-modal-card') as HTMLElement;
    const restartBtn = this.finishBannerEl.querySelector('#podium-restart-btn') as HTMLElement;
    const titleEl = this.finishBannerEl.querySelector('.podium-modal-card > div:first-child') as HTMLElement;

    const rankThemes = [
      {
        title: 'VICTORY - GOLD CUP',
        rankText: '1ST PLACE',
        primaryColor: '#ffd700',
        glowColor: 'rgba(255, 215, 0, 0.65)',
        btnGradient: 'linear-gradient(90deg, #ffd700, #ff8800)',
      },
      {
        title: 'PODIUM - SILVER CUP',
        rankText: '2ND PLACE',
        primaryColor: '#e2e8f0',
        glowColor: 'rgba(226, 232, 240, 0.6)',
        btnGradient: 'linear-gradient(90deg, #cbd5e1, #64748b)',
      },
      {
        title: 'PODIUM - BRONZE CUP',
        rankText: '3RD PLACE',
        primaryColor: '#cd7f32',
        glowColor: 'rgba(205, 127, 50, 0.6)',
        btnGradient: 'linear-gradient(90deg, #cd7f32, #b45309)',
      },
      {
        title: 'RACE COMPLETE',
        rankText: '4TH PLACE',
        primaryColor: '#94a3b8',
        glowColor: 'rgba(148, 163, 184, 0.4)',
        btnGradient: 'linear-gradient(90deg, #475569, #1e293b)',
      },
    ];

    const currentTheme = rankThemes[stats.rank - 1] || rankThemes[3];

    if (rankEl) {
      rankEl.textContent = currentTheme.rankText;
      (rankEl as HTMLElement).style.textShadow = `0 0 24px ${currentTheme.glowColor}`;
    }
    if (titleEl) {
      titleEl.textContent = currentTheme.title;
      titleEl.style.color = currentTheme.primaryColor;
    }
    if (cardEl) {
      cardEl.style.borderColor = currentTheme.primaryColor;
      cardEl.style.boxShadow = `0 0 60px ${currentTheme.glowColor}, inset 0 0 24px rgba(0, 0, 0, 0.4)`;
    }
    if (restartBtn) {
      restartBtn.style.background = currentTheme.btnGradient;
      restartBtn.style.boxShadow = `0 0 24px ${currentTheme.glowColor}`;
      restartBtn.style.color = stats.rank <= 2 ? '#050a14' : '#ffffff';
    }

    if (timeEl) timeEl.textContent = `FINAL TIME: ${stats.totalTime}`;
    if (shotsEl) shotsEl.textContent = stats.shotsFired.toString();
    if (killsEl) killsEl.textContent = stats.asteroidsDestroyed.toString();

    // Show Fullscreen Victory Podium
    this.finishBannerEl.style.display = 'flex';
    void this.finishBannerEl.offsetWidth; // Force reflow
    this.finishBannerEl.style.opacity = '1.0';

    // Hide in-game cockpit gauges while podium is open
    if (this.headerContainerEl) this.headerContainerEl.style.display = 'none';
    if (this.boostGaugeContainer) this.boostGaugeContainer.style.display = 'none';
    if (this.heatGaugeContainer) this.heatGaugeContainer.style.display = 'none';
    if (this.navChevronEl) this.navChevronEl.style.display = 'none';
    if (this.keyHintEl) this.keyHintEl.style.display = 'none';
    if (this.emergencyStrobeEl) this.emergencyStrobeEl.style.opacity = '0';

    // Hide rival markers
    for (const marker of this.rivalMarkers) {
      marker.container.style.opacity = '0';
    }
  }

  public showPodium(stats: RaceStats): void {
    this.showVictoryPodium(stats);
  }

  // -------------------------------------------------------------
  // 3D-to-2D Screen Navigation Chevron
  // -------------------------------------------------------------
  public updateNavigationChevron(
    targetPos: THREE.Vector3 | null,
    jetPos: THREE.Vector3,
    camera: THREE.PerspectiveCamera
  ): void {
    if (!targetPos || this.isRaceOver) {
      this.navChevronEl.style.opacity = '0';
      return;
    }

    this.navChevronEl.style.opacity = '1';

    const distMeters = Math.round(jetPos.distanceTo(targetPos));
    this.navDistanceEl.innerText = `${distMeters}m`;

    this.projCamSpace.copy(targetPos).applyMatrix4(camera.matrixWorldInverse);
    const isBehind = this.projCamSpace.z > 0;

    this.projNDC.copy(targetPos).project(camera);

    let ndcX = this.projNDC.x;
    let ndcY = this.projNDC.y;

    if (isBehind) {
      ndcX = -ndcX;
      ndcY = -ndcY;

      if (Math.abs(ndcX) < 0.001 && Math.abs(ndcY) < 0.001) {
        ndcY = -1;
      }
    }

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    const margin = 55;

    const isOnScreen = !isBehind && Math.abs(ndcX) <= 0.82 && Math.abs(ndcY) <= 0.82;

    if (isOnScreen) {
      const screenX = (ndcX * 0.5 + 0.5) * window.innerWidth;
      const screenY = (-ndcY * 0.5 + 0.5) * window.innerHeight;

      this.navChevronEl.style.left = `${screenX}px`;
      this.navChevronEl.style.top = `${screenY}px`;
      this.navArrowSvg.style.transform = 'rotate(180deg) scale(0.85)';
    } else {
      const len = Math.sqrt(ndcX * ndcX + ndcY * ndcY) || 1;
      const dirX = ndcX / len;
      const dirY = ndcY / len;

      const maxX = halfW - margin;
      const maxY = halfH - margin;

      const scaleX = Math.abs(maxX / (dirX || 0.0001));
      const scaleY = Math.abs(maxY / (dirY || 0.0001));
      const scale = Math.min(scaleX, scaleY);

      const screenX = halfW + dirX * scale;
      const screenY = halfH - dirY * scale;

      this.navChevronEl.style.left = `${screenX}px`;
      this.navChevronEl.style.top = `${screenY}px`;

      const angleRad = Math.atan2(-dirY, dirX);
      const angleDeg = (angleRad * 180) / Math.PI + 90;
      this.navArrowSvg.style.transform = `rotate(${angleDeg}deg) scale(1.1)`;
    }
  }

  // Technical Safeguard 2: AudioCtx resume
  public resumeAudio(): void {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public setVisible(visible: boolean): void {
    this.container.style.display = visible ? 'block' : 'none';
  }

  public setPilotCallsign(name: string): void {
    this.pilotCallsign = name;
    if (this.pilotCallsignEl) {
      this.pilotCallsignEl.innerHTML = `<span style="color:#00f0ff;">CALLSIGN</span> <span>${name}</span>`;
    }
  }

  public resetRace(): void {
    this.raceElapsedTime = 0;
    this.isRaceOver = false;
    this.lastHearts = 10;
    this.updateHearts(10);
    const digitsEl = this.timerEl.querySelector('#timer-digits');
    if (digitsEl) {
      digitsEl.textContent = '00:00:00';
    }
    // Hide podium
    this.finishBannerEl.style.opacity = '0';
    this.finishBannerEl.style.display = 'none';

    // Restore in-game cockpit gauges
    if (this.headerContainerEl) this.headerContainerEl.style.display = 'flex';
    if (this.boostGaugeContainer) this.boostGaugeContainer.style.display = 'flex';
    if (this.heatGaugeContainer) this.heatGaugeContainer.style.display = 'flex';
    if (this.navChevronEl) this.navChevronEl.style.display = 'block';
    if (this.keyHintEl) this.keyHintEl.style.display = window.innerWidth > 900 ? 'block' : 'none';
    this.emergencyStrobeEl.style.opacity = '0';
  }

  public attachFpsOverlay(fpsEl: HTMLElement): void {
    if (this.headerRightEl && fpsEl) {
      this.headerRightEl.prepend(fpsEl);
    }
  }

  public attachMusicButton(btn: HTMLElement): void {
    if (this.headerRightEl && btn) {
      const pauseBtn = this.headerRightEl.querySelector('.pause-hud-trigger, #hud-pause-btn');
      if (pauseBtn) {
        this.headerRightEl.insertBefore(btn, pauseBtn);
      } else {
        this.headerRightEl.appendChild(btn);
      }
    }
  }

  public attachPauseButton(btn: HTMLElement): void {
    if (this.headerRightEl && btn) {
      this.headerRightEl.appendChild(btn);
    }
  }

  // -------------------------------------------------------------
  // 3D Rival Screen-Space Floating Nameplates & Off-Screen Chevrons
  // -------------------------------------------------------------
  public initRivalMarkers(rivals: AIRival[]): void {
    // Clear existing
    for (const marker of this.rivalMarkers) {
      if (marker.container.parentElement) {
        marker.container.parentElement.removeChild(marker.container);
      }
    }
    this.rivalMarkers = [];

    for (let i = 0; i < rivals.length; i++) {
      const rival = rivals[i];
      const accentHex = '#' + rival.config.accentColor.toString(16).padStart(6, '0');
      const glowHex = '#' + rival.config.glowColor.toString(16).padStart(6, '0');

      const markerContainer = document.createElement('div');
      markerContainer.className = `rival-marker-root rival-marker-${i}`;
      Object.assign(markerContainer.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        opacity: '0',
        zIndex: '2045',
        transition: 'opacity 0.15s ease',
      });

      // Directional off-screen chevron
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement;
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      Object.assign(svg.style, {
        position: 'absolute',
        top: '-12px',
        left: '-12px',
        filter: `drop-shadow(0 0 6px ${glowHex})`,
        display: 'none',
      });
      svg.innerHTML = `<polygon points="12,2 22,20 12,15 2,20" fill="${accentHex}"/>`;
      markerContainer.appendChild(svg);

      // Info Badge (Transparent Glassmorphic container: no dark background, no solid borders)
      const card = document.createElement('div');
      Object.assign(card.style, {
        background: 'rgba(10, 20, 35, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '6px',
        padding: '3px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        boxShadow: 'none',
        backdropFilter: 'blur(2px)',
        webkitBackdropFilter: 'blur(2px)',
        transform: 'translate(-50%, -100%)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        transition: 'opacity 0.15s ease',
      });

      // Minimalist Pip: 10x10px hollow diamond (◇) matching rival's team color
      const pipSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement;
      pipSvg.setAttribute('width', '10');
      pipSvg.setAttribute('height', '10');
      pipSvg.setAttribute('viewBox', '0 0 10 10');
      Object.assign(pipSvg.style, {
        display: 'none',
        filter: `drop-shadow(0 0 4px ${glowHex})`,
        pointerEvents: 'none',
        overflow: 'visible',
      });
      pipSvg.innerHTML = `<polygon points="5,1 9,5 5,9 1,5" fill="none" stroke="${accentHex}" stroke-width="1.5" stroke-opacity="0.85"/>`;
      card.appendChild(pipSvg);

      // Expanded Details (Callsign, Distance, Health)
      const detailsEl = document.createElement('div');
      Object.assign(detailsEl.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        pointerEvents: 'none',
      });

      // Top row: Name & Distance
      const headerRow = document.createElement('div');
      Object.assign(headerRow.style, {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      });

      const nameSpan = document.createElement('span');
      nameSpan.textContent = rival.name;
      Object.assign(nameSpan.style, {
        fontSize: '11px',
        fontWeight: '800',
        letterSpacing: '0.8px',
        color: accentHex,
        textShadow: `0 0 6px ${glowHex}`,
      });

      const sepSpan = document.createElement('span');
      sepSpan.textContent = '•';
      sepSpan.style.color = 'rgba(255,255,255,0.4)';

      const distSpan = document.createElement('span');
      distSpan.textContent = '0m';
      Object.assign(distSpan.style, {
        fontSize: '10px',
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'monospace',
      });

      headerRow.appendChild(nameSpan);
      headerRow.appendChild(sepSpan);
      headerRow.appendChild(distSpan);
      detailsEl.appendChild(headerRow);

      // Bottom row: 10-heart mini bar
      const heartsRow = document.createElement('div');
      Object.assign(heartsRow.style, {
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
      });

      const heartPips: HTMLSpanElement[] = [];
      for (let h = 0; h < 10; h++) {
        const pip = document.createElement('span');
        Object.assign(pip.style, {
          display: 'inline-block',
          width: '4px',
          height: '4px',
          borderRadius: '1px',
          background: '#00ff88',
          boxShadow: 'none',
        });
        heartsRow.appendChild(pip);
        heartPips.push(pip);
      }
      detailsEl.appendChild(heartsRow);
      card.appendChild(detailsEl);
      markerContainer.appendChild(card);
      this.container.appendChild(markerContainer);

      this.rivalMarkers.push({
        container: markerContainer,
        arrowSvg: svg,
        card,
        pipSvg,
        detailsEl,
        nameEl: nameSpan,
        distEl: distSpan,
        heartPips,
        isPipMode: false,
      });
    }
  }

  public updateRivalMarkers(
    rivals: AIRival[],
    playerPos: THREE.Vector3,
    camera: THREE.PerspectiveCamera,
    isRacing: boolean
  ): void {
    if (!isRacing || this.isRaceOver) {
      for (const marker of this.rivalMarkers) {
        marker.container.style.opacity = '0';
      }
      return;
    }

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    const margin = 60;

    for (let i = 0; i < rivals.length; i++) {
      const rival = rivals[i];
      const marker = this.rivalMarkers[i];
      if (!rival || !marker) continue;

      const targetPos = this.tempRivalPos.copy(rival.mesh.position).add(this.rivalOffset);
      this.projCamSpace.copy(targetPos).applyMatrix4(camera.matrixWorldInverse);
      const isBehind = this.projCamSpace.z > 0;

      this.projNDC.copy(targetPos).project(camera);

      let ndcX = this.projNDC.x;
      let ndcY = this.projNDC.y;

      if (isBehind) {
        ndcX = -ndcX;
        ndcY = -ndcY;

        if (Math.abs(ndcX) < 0.001 && Math.abs(ndcY) < 0.001) {
          ndcY = -1;
        }
      }

      const distMeters = Math.round(playerPos.distanceTo(rival.mesh.position));
      marker.distEl.textContent = `${distMeters}m`;

      // Update 10 heart mini pips
      const hearts = rival.currentHearts;
      for (let h = 0; h < 10; h++) {
        if (h < hearts) {
          marker.heartPips[h].style.background =
            hearts <= 3 ? '#ff1a75' : hearts <= 6 ? '#ffbb00' : '#00ff88';
          marker.heartPips[h].style.opacity = '1';
        } else {
          marker.heartPips[h].style.background = '#475569';
          marker.heartPips[h].style.opacity = '0.35';
        }
      }

      // Minimalist Pip vs Full Badge based on distance
      // When rival distance > 180m: hide callsign text and distance counter; render only sleek 10x10px hollow diamond (◇)
      // When rival distance <= 180m: expand smoothly into compact callsign tag (font-size: 11px, no heavy borders)
      const isDistant = distMeters > 180;
      if (marker.isPipMode !== isDistant) {
        marker.isPipMode = isDistant;
        if (isDistant) {
          marker.pipSvg.style.display = 'block';
          marker.detailsEl.style.display = 'none';
          marker.card.style.background = 'transparent';
          marker.card.style.border = 'none';
          marker.card.style.padding = '0';
          marker.card.style.backdropFilter = 'none';
          marker.card.style.webkitBackdropFilter = 'none';
        } else {
          marker.pipSvg.style.display = 'none';
          marker.detailsEl.style.display = 'flex';
          marker.card.style.background = 'rgba(10, 20, 35, 0.35)';
          marker.card.style.border = '1px solid rgba(255, 255, 255, 0.18)';
          marker.card.style.padding = '3px 8px';
          marker.card.style.backdropFilter = 'blur(2px)';
          marker.card.style.webkitBackdropFilter = 'blur(2px)';
        }
      }

      const isOnScreen = !isBehind && Math.abs(ndcX) <= 0.85 && Math.abs(ndcY) <= 0.85;

      if (isOnScreen) {
        const screenX = (ndcX * 0.5 + 0.5) * window.innerWidth;
        // Clamp rival nameplates to remain at least 80px above bottom viewport edge
        const screenY = Math.min((-ndcY * 0.5 + 0.5) * window.innerHeight, window.innerHeight - 80);

        // Distance-Based LOD & Center-Screen Deadzone:
        // Calculate normalized distance from screen center for each rival badge:
        // dx = (screenX - window.innerWidth / 2) / (window.innerWidth / 2);
        // dy = (screenY - window.innerHeight / 2) / (window.innerHeight / 2);
        // centerDist = Math.hypot(dx, dy); // 0.0 at screen center, ~1.4 at screen corners
        const dx = (screenX - halfW) / halfW;
        const dy = (screenY - halfH) / halfH;
        const centerDist = Math.hypot(dx, dy);

        // Dynamic Opacity / Center Fade:
        // - If centerDist < 0.35 (in the central targeting/aiming cone where gates appear):
        //   fade the badge opacity down smoothly to 0.2.
        // - As centerDist increases toward the periphery: scale opacity back up to 0.75.
        let badgeOpacity: number;
        if (centerDist < 0.35) {
          const factor = Math.max(0, centerDist / 0.35);
          badgeOpacity = 0.2 + 0.2 * factor; // 0.2 at center, 0.4 at edge of cone
        } else {
          const factor = Math.min(1.0, (centerDist - 0.35) / 0.65);
          badgeOpacity = 0.4 + 0.35 * factor; // 0.4 at cone edge, scaling to 0.75 toward periphery
        }

        marker.container.style.opacity = badgeOpacity.toFixed(3);
        marker.container.style.left = `${screenX}px`;
        marker.container.style.top = `${screenY}px`;
        marker.arrowSvg.style.display = 'none';
        marker.card.style.display = 'flex';
        marker.card.style.transform = isDistant ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)';
      } else {
        const len = Math.sqrt(ndcX * ndcX + ndcY * ndcY) || 1;
        const dirX = ndcX / len;
        const dirY = ndcY / len;

        const maxX = halfW - margin;
        const maxY = halfH - margin;

        const scaleX = Math.abs(maxX / (dirX || 0.0001));
        const scaleY = Math.abs(maxY / (dirY || 0.0001));
        const scale = Math.min(scaleX, scaleY);

        const screenX = halfW + dirX * scale;
        // Clamp off-screen indicator to remain at least 80px above bottom viewport edge
        const screenY = Math.min(halfH - dirY * scale, window.innerHeight - 80);

        marker.container.style.opacity = '0.75';
        marker.container.style.left = `${screenX}px`;
        marker.container.style.top = `${screenY}px`;
        marker.arrowSvg.style.display = 'block';
        marker.card.style.display = 'none';

        const angleRad = Math.atan2(-dirY, dirX);
        const angleDeg = (angleRad * 180) / Math.PI + 90;
        marker.arrowSvg.style.transform = `rotate(${angleDeg}deg) scale(0.9)`;
      }
    }
  }

  public updateRivalBadges(
    rivals: AIRival[],
    playerPos: THREE.Vector3,
    camera: THREE.PerspectiveCamera,
    isRacing: boolean
  ): void {
    this.updateRivalMarkers(rivals, playerPos, camera, isRacing);
  }

  // -------------------------------------------------------------
  // HUD Update Tick
  // -------------------------------------------------------------
  public update(
    speedKmH: number,
    boostPercent: number,
    isBoosting: boolean,
    dt: number,
    isRacing: boolean = true
  ): void {
    // Technical Safeguard 1: Stopwatch pauses while not in RACING state
    if (isRacing && !this.isRaceOver) {
      this.raceElapsedTime += dt;
      const totalSec = Math.floor(this.raceElapsedTime);
      const mins = Math.floor(totalSec / 60).toString().padStart(2, '0');
      const secs = (totalSec % 60).toString().padStart(2, '0');
      const ms = Math.floor((this.raceElapsedTime % 1) * 100).toString().padStart(2, '0');
      const digitsEl = this.timerEl.querySelector('#timer-digits');
      if (digitsEl) {
        digitsEl.textContent = `${mins}:${secs}:${ms}`;
      }
    }

    if (this.damageFlashAlpha > 0) {
      this.damageFlashAlpha = Math.max(0, this.damageFlashAlpha - dt * 2.5);
      this.damageVignetteEl.style.opacity = this.damageFlashAlpha.toString();
    }

    this.speedValueEl.innerText = `${Math.round(speedKmH).toLocaleString()} KM/H`;
    const maxSpeed = 2200;
    const speedRatio = Math.min(Math.max(speedKmH / maxSpeed, 0), 1);
    this.speedBarFillEl.style.width = `${(speedRatio * 100).toFixed(0)}%`;

    if (isBoosting) {
      this.speedValueEl.style.color = '#ff9933';
      this.speedValueEl.style.textShadow = '0 0 12px rgba(255, 120, 0, 0.8)';
    } else {
      this.speedValueEl.style.color = '#38bdf8';
      this.speedValueEl.style.textShadow = '0 0 8px rgba(56, 189, 248, 0.5)';
    }

    const clampedBoost = Math.min(Math.max(boostPercent, 0), 100);
    this.boostPercentEl.innerText = `${Math.round(clampedBoost)}%`;

    const activeSegments = Math.round((clampedBoost / 100) * this.NUM_BOOST_SEGMENTS);

    for (let i = 0; i < this.NUM_BOOST_SEGMENTS; i++) {
      const seg = this.boostSegments[i];
      if (i < activeSegments) {
        seg.style.opacity = '1.0';
        if (isBoosting) {
          seg.style.background = '#ff5500';
          seg.style.boxShadow = '0 0 10px rgba(255, 85, 0, 0.9)';
        } else {
          seg.style.background = '#00f0ff';
          seg.style.boxShadow = '0 0 6px rgba(0, 240, 255, 0.6)';
        }
      } else {
        seg.style.opacity = '0.15';
        seg.style.background = 'rgba(255, 255, 255, 0.2)';
        seg.style.boxShadow = 'none';
      }
    }
  }

  public getFormattedTime(): string {
    const totalSec = Math.floor(this.raceElapsedTime);
    const mins = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const secs = (totalSec % 60).toString().padStart(2, '0');
    const ms = Math.floor((this.raceElapsedTime % 1) * 100).toString().padStart(2, '0');
    return `${mins}:${secs}:${ms}`;
  }

  public destroy(): void {
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}
