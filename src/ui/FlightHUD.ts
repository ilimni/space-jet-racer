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
  nameEl: HTMLSpanElement;
  distEl: HTMLSpanElement;
  heartPips: HTMLSpanElement[];
}

export class FlightHUD {
  private container: HTMLDivElement;
  private speedValueEl!: HTMLElement;
  private speedBarFillEl!: HTMLElement;
  private boostSegments: HTMLElement[] = [];
  private boostPercentEl!: HTMLElement;
  private inputBadgeEl!: HTMLElement;
  private gyroBtn!: HTMLButtonElement;
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

  // Unified Top Header & In-Game Gauges
  private headerContainerEl!: HTMLElement;
  private headerLeftEl!: HTMLElement;
  private headerCenterEl!: HTMLElement;
  private headerRightEl!: HTMLElement;
  private bottomPanelEl!: HTMLElement;
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
        top: 14px;
        left: 16px;
        right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        z-index: 2000;
        box-sizing: border-box;
      }

      @media (max-width: 600px) {
        #hud-top-header {
          top: 8px !important;
          left: 10px !important;
          right: 10px !important;
        }
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

    // Center Column: Race Stopwatch (MM:SS:ms)
    this.headerCenterEl = document.createElement('div');
    this.headerCenterEl.id = 'hud-top-center';
    Object.assign(this.headerCenterEl.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto',
    });

    this.timerEl = document.createElement('div');
    this.timerEl.id = 'hud-timer-container';
    Object.assign(this.timerEl.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5px 16px',
      background: 'rgba(10, 15, 25, 0.82)',
      border: '1px solid rgba(0, 240, 255, 0.35)',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 0 8px rgba(0, 240, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });
    this.timerEl.innerHTML = `
      <span style="font-size: 8.5px; font-weight: 700; letter-spacing: 2px; color: #94a3b8; text-transform: uppercase;">COURSE TIME</span>
      <span id="timer-digits" style="font-size: 19px; font-weight: 900; font-family: ui-monospace, SFMono-Regular, monospace; color: #ffffff; letter-spacing: 1px; text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);">00:00:00</span>
    `;
    this.headerCenterEl.appendChild(this.timerEl);
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

    // Mobile Gyroscope Button
    this.gyroBtn = document.createElement('button');
    this.gyroBtn.id = 'hud-gyro-btn';
    this.gyroBtn.innerText = 'TILT';
    Object.assign(this.gyroBtn.style, {
      padding: '5px 10px',
      background: 'rgba(10, 15, 25, 0.75)',
      border: '1px solid rgba(255, 85, 0, 0.5)',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '1px',
      color: '#ff7722',
      cursor: 'pointer',
      display: 'none',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
    });

    this.gyroBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!this.inputManager.isGyroActive) {
        const granted = await this.inputManager.requestGyroPermission();
        if (granted) {
          this.gyroBtn.innerText = 'RE-CENTER';
          this.gyroBtn.style.borderColor = 'rgba(0, 240, 255, 0.6)';
          this.gyroBtn.style.color = '#00f0ff';
        } else {
          this.gyroBtn.innerText = 'TILT N/A';
        }
      } else {
        this.inputManager.calibrateNeutral();
      }
    });
    this.headerRightEl.appendChild(this.gyroBtn);

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
    // 2. Cockpit Bottom Dashboard Container (Speedometer, Hearts, Boost, Heat)
    // -------------------------------------------------------------
    this.bottomPanelEl = document.createElement('div');
    this.bottomPanelEl.id = 'hud-bottom-dashboard';
    Object.assign(this.bottomPanelEl.style, {
      position: 'absolute',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '22px',
      padding: '14px 28px',
      background: 'rgba(10, 15, 25, 0.82)',
      border: '1px solid rgba(0, 240, 255, 0.4)',
      borderRadius: '18px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.65), inset 0 0 16px rgba(0, 240, 255, 0.08)',
      backdropFilter: 'blur(12px)',
      webkitBackdropFilter: 'blur(12px)',
      pointerEvents: 'auto',
      maxWidth: '96vw',
      flexWrap: 'wrap',
      justifyContent: 'center',
    });

    // Speedometer & 10-Heart Cluster
    const speedBlock = document.createElement('div');
    Object.assign(speedBlock.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      minWidth: '220px',
    });

    const speedHeader = document.createElement('div');
    Object.assign(speedHeader.style, {
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      textTransform: 'uppercase',
    });
    speedHeader.innerText = 'VELOCITY';
    speedBlock.appendChild(speedHeader);

    const speedDisplayRow = document.createElement('div');
    Object.assign(speedDisplayRow.style, {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
    });

    this.speedValueEl = document.createElement('div');
    Object.assign(this.speedValueEl.style, {
      fontSize: '28px',
      fontWeight: '900',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      color: '#ffffff',
      letterSpacing: '-0.5px',
      textShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
    });
    this.speedValueEl.innerText = '1200';
    speedDisplayRow.appendChild(this.speedValueEl);

    const speedUnit = document.createElement('span');
    Object.assign(speedUnit.style, {
      fontSize: '11px',
      fontWeight: '700',
      color: '#00f0ff',
      letterSpacing: '1px',
    });
    speedUnit.innerText = 'KM/H';
    speedDisplayRow.appendChild(speedUnit);
    speedBlock.appendChild(speedDisplayRow);

    const speedBarTrack = document.createElement('div');
    Object.assign(speedBarTrack.style, {
      width: '100%',
      height: '4px',
      background: 'rgba(255, 255, 255, 0.12)',
      borderRadius: '2px',
      overflow: 'hidden',
      marginTop: '2px',
    });

    this.speedBarFillEl = document.createElement('div');
    Object.assign(this.speedBarFillEl.style, {
      width: '55%',
      height: '100%',
      background: 'linear-gradient(90deg, #00f0ff, #38bdf8)',
      boxShadow: '0 0 8px #00f0ff',
      transition: 'width 0.1s ease',
    });
    speedBarTrack.appendChild(this.speedBarFillEl);
    speedBlock.appendChild(speedBarTrack);

    // 10-Heart Health Row
    const healthContainer = document.createElement('div');
    Object.assign(healthContainer.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '4px',
    });

    this.heartsRowEl = document.createElement('div');
    Object.assign(this.heartsRowEl.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    });

    for (let i = 0; i < this.MAX_HEARTS; i++) {
      const heart = document.createElement('span');
      heart.innerText = '♥';
      Object.assign(heart.style, {
        fontSize: '15px',
        color: '#ff1a75',
        textShadow: '0 0 8px #ff1a75, 0 0 16px rgba(255, 26, 117, 0.6)',
        display: 'inline-block',
        transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      });
      this.heartElements.push(heart);
      this.heartsRowEl.appendChild(heart);
    }
    healthContainer.appendChild(this.heartsRowEl);

    this.heartsTextEl = document.createElement('span');
    Object.assign(this.heartsTextEl.style, {
      fontSize: '11px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#ff1a75',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
    });
    this.heartsTextEl.innerText = '(10 / 10 HEARTS)';
    healthContainer.appendChild(this.heartsTextEl);

    speedBlock.appendChild(healthContainer);
    this.bottomPanelEl.appendChild(speedBlock);

    // Separator 1
    const sep1 = document.createElement('div');
    Object.assign(sep1.style, {
      width: '1px',
      height: '56px',
      background: 'rgba(255, 255, 255, 0.15)',
    });
    this.bottomPanelEl.appendChild(sep1);

    // Weapon Heat Gauge Block
    const heatBlock = document.createElement('div');
    Object.assign(heatBlock.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      minWidth: '130px',
    });

    const heatHeaderRow = document.createElement('div');
    Object.assign(heatHeaderRow.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    });

    const heatTitle = document.createElement('div');
    Object.assign(heatTitle.style, {
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      textTransform: 'uppercase',
    });
    heatTitle.innerText = 'CANNON HEAT';
    heatHeaderRow.appendChild(heatTitle);

    this.heatStatusEl = document.createElement('div');
    Object.assign(this.heatStatusEl.style, {
      fontSize: '10px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#ff0055',
    });
    this.heatStatusEl.innerText = 'READY';
    heatHeaderRow.appendChild(this.heatStatusEl);
    heatBlock.appendChild(heatHeaderRow);

    const heatTrack = document.createElement('div');
    Object.assign(heatTrack.style, {
      width: '100%',
      height: '8px',
      background: 'rgba(255, 255, 255, 0.12)',
      borderRadius: '4px',
      overflow: 'hidden',
    });

    this.heatBarFillEl = document.createElement('div');
    Object.assign(this.heatBarFillEl.style, {
      width: '0%',
      height: '100%',
      background: 'linear-gradient(90deg, #ff0055, #ff5500)',
      boxShadow: '0 0 8px #ff0055',
      transition: 'width 0.08s ease',
    });
    heatTrack.appendChild(this.heatBarFillEl);
    heatBlock.appendChild(heatTrack);
    this.bottomPanelEl.appendChild(heatBlock);

    // Separator 2
    const sep2 = document.createElement('div');
    Object.assign(sep2.style, {
      width: '1px',
      height: '56px',
      background: 'rgba(255, 255, 255, 0.15)',
    });
    this.bottomPanelEl.appendChild(sep2);

    // Boost Meter Block
    const boostBlock = document.createElement('div');
    Object.assign(boostBlock.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      minWidth: '140px',
    });

    const boostHeaderRow = document.createElement('div');
    Object.assign(boostHeaderRow.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    });

    const boostTitle = document.createElement('div');
    Object.assign(boostTitle.style, {
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      textTransform: 'uppercase',
    });
    boostTitle.innerText = 'BOOST DRIVE';
    boostHeaderRow.appendChild(boostTitle);

    this.boostPercentEl = document.createElement('div');
    Object.assign(this.boostPercentEl.style, {
      fontSize: '11px',
      fontWeight: '800',
      fontFamily: 'ui-monospace, monospace',
      color: '#00f0ff',
    });
    this.boostPercentEl.innerText = '100%';
    boostHeaderRow.appendChild(this.boostPercentEl);
    boostBlock.appendChild(boostHeaderRow);

    const segmentsRow = document.createElement('div');
    Object.assign(segmentsRow.style, {
      display: 'flex',
      gap: '4px',
      marginTop: '6px',
    });

    for (let i = 0; i < this.NUM_BOOST_SEGMENTS; i++) {
      const seg = document.createElement('div');
      Object.assign(seg.style, {
        flex: '1',
        height: '14px',
        borderRadius: '2px',
        background: '#00f0ff',
        boxShadow: '0 0 6px rgba(0, 240, 255, 0.6)',
        transition: 'background 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease',
      });
      this.boostSegments.push(seg);
      segmentsRow.appendChild(seg);
    }
    boostBlock.appendChild(segmentsRow);
    this.bottomPanelEl.appendChild(boostBlock);

    this.container.appendChild(this.bottomPanelEl);

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

    const rankNames = ['1ST PLACE - GOLD CUP', '2ND PLACE - SILVER', '3RD PLACE - BRONZE', '4TH PLACE'];
    if (rankEl) rankEl.textContent = rankNames[stats.rank - 1] || `${stats.rank}TH PLACE`;
    if (timeEl) timeEl.textContent = `FINAL TIME: ${stats.totalTime}`;
    if (shotsEl) shotsEl.textContent = stats.shotsFired.toString();
    if (killsEl) killsEl.textContent = stats.asteroidsDestroyed.toString();

    // Show Fullscreen Victory Podium
    this.finishBannerEl.style.display = 'flex';
    void this.finishBannerEl.offsetWidth; // Force reflow
    this.finishBannerEl.style.opacity = '1.0';

    // Hide in-game cockpit gauges while podium is open
    if (this.bottomPanelEl) this.bottomPanelEl.style.display = 'none';
    if (this.headerContainerEl) this.headerContainerEl.style.display = 'none';
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
    if (this.bottomPanelEl) this.bottomPanelEl.style.display = 'flex';
    if (this.headerContainerEl) this.headerContainerEl.style.display = 'flex';
    if (this.navChevronEl) this.navChevronEl.style.display = 'block';
    if (this.keyHintEl) this.keyHintEl.style.display = window.innerWidth > 900 ? 'block' : 'none';
    this.emergencyStrobeEl.style.opacity = '0';
  }

  public attachFpsOverlay(fpsEl: HTMLElement): void {
    if (this.headerRightEl && fpsEl) {
      this.headerRightEl.prepend(fpsEl);
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

      // Info Badge
      const card = document.createElement('div');
      Object.assign(card.style, {
        background: 'rgba(6, 12, 24, 0.85)',
        border: `1.5px solid ${accentHex}`,
        borderRadius: '8px',
        padding: '4px 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        boxShadow: `0 0 12px rgba(0,0,0,0.8), 0 0 8px ${glowHex}55`,
        backdropFilter: 'blur(6px)',
        transform: 'translate(-50%, -100%)',
        whiteSpace: 'nowrap',
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
        fontWeight: '900',
        letterSpacing: '1px',
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
      card.appendChild(headerRow);

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
          height: '5px',
          borderRadius: '1px',
          background: '#00ff88',
          boxShadow: '0 0 3px rgba(0, 255, 136, 0.6)',
        });
        heartsRow.appendChild(pip);
        heartPips.push(pip);
      }
      card.appendChild(heartsRow);
      markerContainer.appendChild(card);
      this.container.appendChild(markerContainer);

      this.rivalMarkers.push({
        container: markerContainer,
        arrowSvg: svg,
        card,
        nameEl: nameSpan,
        distEl: distSpan,
        heartPips,
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

      const isOnScreen = !isBehind && Math.abs(ndcX) <= 0.85 && Math.abs(ndcY) <= 0.85;

      if (isOnScreen) {
        const screenX = (ndcX * 0.5 + 0.5) * window.innerWidth;
        const screenY = (-ndcY * 0.5 + 0.5) * window.innerHeight;

        marker.container.style.opacity = '1';
        marker.container.style.left = `${screenX}px`;
        marker.container.style.top = `${screenY}px`;
        marker.arrowSvg.style.display = 'none';
        marker.card.style.transform = 'translate(-50%, -100%)';
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

        marker.container.style.opacity = '1';
        marker.container.style.left = `${screenX}px`;
        marker.container.style.top = `${screenY}px`;
        marker.arrowSvg.style.display = 'block';

        const angleRad = Math.atan2(-dirY, dirX);
        const angleDeg = (angleRad * 180) / Math.PI + 90;
        marker.arrowSvg.style.transform = `rotate(${angleDeg}deg) scale(0.9)`;
        marker.card.style.transform = 'translate(-50%, -50%)';
      }
    }
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

    this.speedValueEl.innerText = speedKmH.toString();
    const maxSpeed = 2200;
    const speedRatio = Math.min(Math.max(speedKmH / maxSpeed, 0), 1);
    this.speedBarFillEl.style.width = `${(speedRatio * 100).toFixed(0)}%`;

    if (isBoosting) {
      this.speedValueEl.style.color = '#ff9933';
      this.speedValueEl.style.textShadow = '0 0 16px rgba(255, 120, 0, 0.8)';
      this.speedBarFillEl.style.background = 'linear-gradient(90deg, #ff5500, #ffbb00)';
      this.speedBarFillEl.style.boxShadow = '0 0 12px #ff5500';
    } else {
      this.speedValueEl.style.color = '#ffffff';
      this.speedValueEl.style.textShadow = '0 0 12px rgba(255, 255, 255, 0.4)';
      this.speedBarFillEl.style.background = 'linear-gradient(90deg, #00f0ff, #38bdf8)';
      this.speedBarFillEl.style.boxShadow = '0 0 8px #00f0ff';
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
