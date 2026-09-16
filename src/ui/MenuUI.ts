import { GameState } from '../core/GameState';
import { InputManager } from '../core/InputManager';

export interface MenuUICallbacks {
  onStartRace: (callsign: string) => void;
  onOpenHangar: () => void;
  onResume: () => void;
  onRestartRace: () => void;
  onQuitToTitle: () => void;
  onAudioUnlock: () => void;
  onToggleMusic?: () => boolean;
}

export class MenuUI {
  private container: HTMLDivElement;
  private titleOverlay: HTMLDivElement;
  private pauseOverlay: HTMLDivElement;
  public pauseBtn: HTMLButtonElement;
  public musicBtn: HTMLButtonElement;
  private callsignInput: HTMLInputElement;

  private gameState: GameState;
  private callbacks: MenuUICallbacks;
  private inputManager?: InputManager;

  constructor(gameState: GameState, callbacks: MenuUICallbacks, inputManager?: InputManager) {
    this.gameState = gameState;
    this.callbacks = callbacks;
    this.inputManager = inputManager;

    this.container = document.createElement('div');
    this.container.id = 'menu-ui-root';
    this.container.style.position = 'fixed';
    this.container.style.top = '0';
    this.container.style.left = '0';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.pointerEvents = 'none';
    this.container.style.zIndex = '3000';
    this.container.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    this.injectStyles();

    // 1. Create Title Screen Overlay
    this.titleOverlay = document.createElement('div');
    this.titleOverlay.className = 'menu-screen-backdrop';
    this.titleOverlay.id = 'menu-title-screen';

    const savedCallsign = localStorage.getItem('hyperion_pilot_callsign') || 'VIPER-01';

    this.titleOverlay.innerHTML = `
      <div class="menu-modal-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div class="title-badge" style="margin-bottom: 0;">INTERSTELLAR GP • COMBAT SIMULATOR</div>
          <button id="btn-title-music" class="menu-audio-pill" type="button" title="Toggle Synthwave Music">
            <span class="music-icon">🔊</span>
            <span class="music-label">MUSIC</span>
          </button>
        </div>
        <h1 class="game-logo">HYPERION<span class="logo-accent"> VOID RACER</span></h1>
        <p class="subtitle-text">HIGH-VELOCITY 3D SPACE FLIGHT • NEON ASTEROID BELT CIRCUIT</p>

        <div class="input-group">
          <label for="callsign-input" class="input-label">PILOT CALLSIGN</label>
          <div class="input-wrapper">
            <span class="input-prefix">&#9658;</span>
            <input id="callsign-input" class="callsign-text-field" type="text" maxlength="12" value="${savedCallsign}" spellcheck="false" autocomplete="off" />
          </div>
        </div>

        <div class="btn-group">
          <button id="btn-start-race" class="btn-primary">
            <span class="btn-glow"></span>
            <span class="btn-label">&#9658; START RACE</span>
          </button>
          <button id="btn-open-hangar" class="btn-secondary">
            <span class="btn-label">&#9881; CUSTOMIZE SHIP</span>
          </button>
        </div>

        <div class="briefing-card">
          <div class="briefing-header">FLIGHT CONTROLS</div>
          <div class="briefing-grid">
            <div class="briefing-item"><span class="key-pill">W / S</span> Pitch</div>
            <div class="briefing-item"><span class="key-pill">A / D</span> Yaw</div>
            <div class="briefing-item"><span class="key-pill">Q / E</span> Roll</div>
            <div class="briefing-item"><span class="key-pill">SPACE</span> Boost</div>
            <div class="briefing-item"><span class="key-pill">F / CLICK</span> Fire Plasma</div>
            <div class="briefing-item"><span class="key-pill">ESC / P</span> Pause</div>
          </div>
          <div class="mobile-hint">MOBILE: ON-SCREEN VIRTUAL STICK + GYRO TILT + MULTI-TOUCH BUTTONS</div>
          <div style="margin-top: 10px; display: flex; gap: 8px; justify-content: center; align-items: center;">
            <button id="btn-title-tilt" class="menu-tilt-btn" type="button">GYRO STEERING: [ OFF ]</button>
            <button id="btn-title-calibrate" class="menu-calibrate-btn" style="display: none;" type="button">[ CALIBRATE ZERO ]</button>
          </div>
        </div>
      </div>
    `;

    // 2. Create In-Game Pause Button
    this.pauseBtn = document.createElement('button');
    this.pauseBtn.id = 'hud-pause-btn';
    this.pauseBtn.className = 'pause-hud-trigger';
    this.pauseBtn.innerHTML = `<span>&#10074;&#10074;</span><span>PAUSE</span>`;
    this.pauseBtn.style.display = 'none';

    // 2b. Create In-Game Music Toggle Button (🔊 / 🔇)
    this.musicBtn = document.createElement('button');
    this.musicBtn.id = 'hud-music-btn';
    this.musicBtn.className = 'music-hud-trigger';
    const isMuted = localStorage.getItem('hyperion_music_muted') === 'true';
    this.musicBtn.innerHTML = isMuted ? '🔇' : '🔊';
    this.musicBtn.setAttribute('title', isMuted ? 'Unmute Synthwave Music' : 'Mute Synthwave Music');
    this.musicBtn.setAttribute('aria-label', 'Toggle Music');
    this.musicBtn.style.display = 'none';

    // 3. Create Pause Menu Overlay
    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.className = 'menu-screen-backdrop';
    this.pauseOverlay.id = 'menu-pause-screen';
    this.pauseOverlay.style.display = 'none';

    this.pauseOverlay.innerHTML = `
      <div class="menu-modal-card pause-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div class="pause-badge" style="margin-bottom: 0;">TACTICAL SYSTEM PAUSED</div>
          <button id="btn-pause-music" class="menu-audio-pill" type="button" title="Toggle Synthwave Music">
            <span class="music-icon">🔊</span>
            <span class="music-label">MUSIC</span>
          </button>
        </div>
        <h2 class="pause-heading">MISSION SUSPENDED</h2>
        <p class="subtitle-text">ORBITAL TIME &amp; TELEMETRY TEMPORARILY FROZEN</p>

        <!-- Pitch Axis Setting in Pause Menu -->
        <div class="pause-settings-card" style="margin: 12px 0 8px 0; padding: 10px 14px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; text-align: left;">
          <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #38bdf8; text-transform: uppercase; margin-bottom: 6px;">PITCH AXIS DYNAMICS</div>
          <div class="pitch-toggle-group" style="display: flex; gap: 8px; background: rgba(11, 18, 33, 0.85); padding: 4px; border-radius: 10px; border: 1px solid rgba(56, 189, 248, 0.18);">
            <button id="btn-pause-pitch-arcade" style="flex: 1; padding: 8px 6px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">ARCADE</button>
            <button id="btn-pause-pitch-sim" style="flex: 1; padding: 8px 6px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">FLIGHT SIM</button>
          </div>
        </div>

        <!-- Touch & Motion Controls in Pause Menu -->
        <div class="pause-settings-card" style="margin: 8px 0 14px 0; padding: 10px 14px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; text-align: left;">
          <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #38bdf8; text-transform: uppercase; margin-bottom: 6px;">TOUCH JOYSTICK &amp; TILT</div>
          <div class="joystick-toggle-group" style="display: flex; gap: 8px; margin-bottom: 8px; background: rgba(11, 18, 33, 0.85); padding: 4px; border-radius: 10px; border: 1px solid rgba(56, 189, 248, 0.18);">
            <button id="btn-pause-joy-floating" style="flex: 1; padding: 8px 6px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">FLOATING STICK</button>
            <button id="btn-pause-joy-static" style="flex: 1; padding: 8px 6px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">STATIC STICK</button>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button id="btn-pause-tilt" class="menu-tilt-btn" style="flex: 1; box-sizing: border-box;" type="button">GYRO STEERING: [ OFF ]</button>
            <button id="btn-pause-calibrate" class="menu-calibrate-btn" style="display: none;" type="button">[ CALIBRATE ZERO ]</button>
          </div>
        </div>

        <div class="btn-group pause-btn-stack">
          <button id="btn-resume-race" class="btn-primary">
            <span class="btn-label">&#9658; RESUME FLIGHT</span>
          </button>
          <button id="btn-restart-race" class="btn-secondary">
            <span class="btn-label">&#8635; RESTART RACE</span>
          </button>
          <button id="btn-pause-hangar" class="btn-secondary">
            <span class="btn-label">&#9881; CUSTOMIZE JET</span>
          </button>
          <button id="btn-quit-title" class="btn-danger">
            <span class="btn-label">&#10006; QUIT TO MENU</span>
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(this.titleOverlay);
    this.container.appendChild(this.pauseOverlay);
    this.container.appendChild(this.musicBtn);
    this.container.appendChild(this.pauseBtn);
    document.body.appendChild(this.container);

    this.callsignInput = this.titleOverlay.querySelector('#callsign-input') as HTMLInputElement;

    this.bindEvents();
    this.updatePausePitchToggle();
    this.updateJoystickToggleUI();
    this.updateTiltButtonsUI();
    this.syncState(this.gameState.current);

    this.gameState.onStateChange((newState) => {
      this.syncState(newState);
    });
  }

  private injectStyles(): void {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      .menu-screen-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 30%, rgba(3, 7, 18, 0.7) 100%), linear-gradient(160deg, #070c18 0%, #0c1427 100%);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        opacity: 1;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 3100;
      }

      .menu-modal-card {
        background: rgba(15, 23, 42, 0.88);
        border: 1px solid rgba(56, 189, 248, 0.25);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-radius: 16px;
        padding: 24px 32px;
        width: min(520px, 92vw);
        max-height: 88dvh;
        overflow-y: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        text-align: center;
        color: #e2e8f0;
        box-sizing: border-box;
      }

      .pause-card {
        border-color: rgba(56, 189, 248, 0.25);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        max-width: 440px;
      }

      .title-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #38bdf8;
        background: rgba(56, 189, 248, 0.08);
        border: 1px solid rgba(56, 189, 248, 0.25);
        padding: 4px 14px;
        border-radius: 20px;
        margin-bottom: 14px;
        text-transform: uppercase;
      }

      .pause-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #38bdf8;
        background: rgba(56, 189, 248, 0.08);
        border: 1px solid rgba(56, 189, 248, 0.25);
        padding: 4px 14px;
        border-radius: 20px;
        margin-bottom: 14px;
        text-transform: uppercase;
      }

      .game-logo {
        margin: 0 0 6px 0;
        font-size: 34px;
        font-weight: 900;
        letter-spacing: 3px;
        color: #e2e8f0;
        text-shadow: 0 0 12px rgba(56, 189, 248, 0.35);
        text-transform: uppercase;
      }

      .logo-accent {
        color: #38bdf8;
        text-shadow: 0 0 14px rgba(56, 189, 248, 0.45);
      }

      .pause-heading {
        margin: 0 0 6px 0;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: 2.5px;
        color: #e2e8f0;
        text-shadow: 0 0 12px rgba(56, 189, 248, 0.35);
        text-transform: uppercase;
      }

      .subtitle-text {
        margin: 0 0 24px 0;
        font-size: 11.5px;
        letter-spacing: 1.5px;
        color: #94a3b8;
        font-weight: 500;
      }

      .input-group {
        margin-bottom: 22px;
        text-align: left;
      }

      .input-label {
        display: block;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        color: #38bdf8;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 2px 14px;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .input-wrapper:focus-within {
        border-color: #38bdf8;
        box-shadow: 0 0 14px rgba(56, 189, 248, 0.25);
      }

      .input-prefix {
        color: #38bdf8;
        font-size: 13px;
        margin-right: 10px;
      }

      .callsign-text-field {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: #e2e8f0;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2px;
        font-family: monospace, sans-serif;
        text-transform: uppercase;
        padding: 10px 0;
      }

      .btn-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 24px;
      }

      .pause-btn-stack {
        margin-bottom: 0;
      }

      .btn-primary {
        position: relative;
        background: #0284c7;
        color: #ffffff;
        border: 1px solid rgba(56, 189, 248, 0.3);
        border-radius: 10px;
        padding: 14px 20px;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
      }

      .btn-primary:hover {
        background: #0369a1;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(56, 189, 248, 0.45);
      }

      .btn-primary:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(2, 132, 199, 0.3);
      }

      .btn-secondary {
        background: rgba(30, 41, 59, 0.85);
        color: #94a3b8;
        border: 1px solid #475569;
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
      }

      .btn-secondary:hover {
        background: rgba(51, 65, 85, 0.9);
        border-color: #64748b;
        color: #e2e8f0;
        transform: translateY(-2px);
      }

      .btn-secondary:active {
        transform: translateY(1px);
      }

      .btn-danger {
        background: rgba(153, 27, 27, 0.2);
        color: #f87171;
        border: 1px solid rgba(239, 68, 68, 0.35);
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
      }

      .btn-danger:hover {
        background: rgba(153, 27, 27, 0.35);
        border-color: #ef4444;
        transform: translateY(-2px);
      }

      .briefing-card {
        background: rgba(15, 23, 42, 0.65);
        border: 1px solid rgba(56, 189, 248, 0.15);
        border-radius: 12px;
        padding: 16px;
        text-align: left;
      }

      .briefing-header {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 2px;
        color: #64748b;
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .briefing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        font-size: 11px;
        color: #94a3b8;
      }

      .key-pill {
        display: inline-block;
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid #475569;
        border-radius: 4px;
        padding: 2px 6px;
        font-weight: 700;
        color: #38bdf8;
        font-family: monospace;
        margin-right: 4px;
      }

      .mobile-hint {
        margin-top: 10px;
        font-size: 10.5px;
        color: #64748b;
      }

      /* In-Game Floating Pause Button */
      .pause-hud-trigger {
        position: relative;
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(56, 189, 248, 0.25);
        border-radius: 8px;
        padding: 6px 14px;
        color: #e2e8f0;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1.5px;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        cursor: pointer;
        pointer-events: auto;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
      }

      .pause-hud-trigger:hover {
        background: rgba(30, 41, 59, 0.9);
        border-color: #38bdf8;
        box-shadow: 0 0 16px rgba(56, 189, 248, 0.35);
      }

      /* In-Game Floating Music Button */
      .music-hud-trigger {
        position: relative;
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(56, 189, 248, 0.25);
        border-radius: 8px;
        padding: 6px 11px;
        color: #38bdf8;
        font-size: 13px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        cursor: pointer;
        pointer-events: auto;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s ease;
        user-select: none;
      }

      .music-hud-trigger:hover {
        background: rgba(30, 41, 59, 0.95);
        border-color: #38bdf8;
        box-shadow: 0 0 16px rgba(56, 189, 248, 0.4);
        transform: translateY(-1px);
      }

      .music-hud-trigger:active {
        transform: translateY(1px);
      }

      /* Compact Overlay Audio Toggle Pill */
      .menu-audio-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(56, 189, 248, 0.25);
        border-radius: 20px;
        padding: 4px 12px;
        color: #38bdf8;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .menu-audio-pill:hover {
        background: rgba(30, 41, 59, 0.9);
        border-color: #38bdf8;
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
      }

      /* Tilt & Motion Controls Buttons (Clean Sci-Fi aesthetic) */
      .menu-tilt-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        background: rgba(15, 23, 42, 0.75);
        border: 1px solid rgba(56, 189, 248, 0.3);
        border-radius: 8px;
        padding: 8px 16px;
        color: #94a3b8;
        font-family: monospace;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1.5px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: none;
        user-select: none;
      }

      .menu-tilt-btn:hover {
        background: rgba(30, 41, 59, 0.9);
        border-color: #38bdf8;
        color: #e2e8f0;
      }

      .menu-tilt-btn.active {
        background: rgba(10, 25, 45, 0.85);
        border-color: #00f0ff;
        color: #00f0ff;
        box-shadow: 0 0 14px rgba(0, 240, 255, 0.45);
      }

      .menu-calibrate-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background: rgba(15, 23, 42, 0.75);
        border: 1px solid rgba(56, 189, 248, 0.3);
        border-radius: 8px;
        padding: 8px 12px;
        color: #38bdf8;
        font-family: monospace;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1.5px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: none;
        white-space: nowrap;
        user-select: none;
      }

      .menu-calibrate-btn:hover {
        background: rgba(30, 41, 59, 0.9);
        border-color: #00f0ff;
        color: #00f0ff;
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }
    `;
    document.head.appendChild(styleEl);
  }

  private bindEvents(): void {
    // Save callsign on input change
    this.callsignInput.addEventListener('input', () => {
      const val = (this.callsignInput.value.trim() || 'VIPER-01').toUpperCase();
      localStorage.setItem('hyperion_pilot_callsign', val);
    });

    // START RACE Button - Technical Safeguard 2: AudioCtx resume
    const btnStart = this.titleOverlay.querySelector('#btn-start-race');
    btnStart?.addEventListener('click', () => {
      this.callbacks.onAudioUnlock();
      const callsign = (this.callsignInput.value.trim() || 'VIPER-01').toUpperCase();
      this.callbacks.onStartRace(callsign);
    });

    // OPEN HANGAR Button
    const btnHangar = this.titleOverlay.querySelector('#btn-open-hangar');
    btnHangar?.addEventListener('click', () => {
      this.callbacks.onOpenHangar();
    });

    // HUD PAUSE Button
    this.pauseBtn.addEventListener('click', () => {
      if (this.gameState.current === 'RACING' || this.gameState.current === 'COUNTDOWN') {
        this.gameState.setState('PAUSED');
      }
    });

    // Music Toggle Action
    const toggleMusic = () => {
      let isMuted: boolean;
      if (this.callbacks.onToggleMusic) {
        isMuted = this.callbacks.onToggleMusic();
      } else {
        const cur = localStorage.getItem('hyperion_music_muted') === 'true';
        isMuted = !cur;
        localStorage.setItem('hyperion_music_muted', String(isMuted));
      }
      this.updateMusicUI(isMuted);
    };

    this.musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });

    const titleMusicBtn = this.titleOverlay.querySelector('#btn-title-music');
    titleMusicBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });

    const pauseMusicBtn = this.pauseOverlay.querySelector('#btn-pause-music');
    pauseMusicBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });

    // PAUSE MENU - RESUME Button
    const btnResume = this.pauseOverlay.querySelector('#btn-resume-race');
    btnResume?.addEventListener('click', () => {
      this.callbacks.onResume();
    });

    // PAUSE MENU - RESTART RACE Button
    const btnRestart = this.pauseOverlay.querySelector('#btn-restart-race');
    btnRestart?.addEventListener('click', () => {
      this.callbacks.onRestartRace();
    });

    // PAUSE MENU - CUSTOMIZE JET Button
    const btnPauseHangar = this.pauseOverlay.querySelector('#btn-pause-hangar');
    btnPauseHangar?.addEventListener('click', () => {
      this.gameState.setState('HANGAR');
    });

    // PAUSE MENU - QUIT TO TITLE Button
    const btnQuit = this.pauseOverlay.querySelector('#btn-quit-title');
    btnQuit?.addEventListener('click', () => {
      this.callbacks.onQuitToTitle();
    });

    // PAUSE MENU - Pitch Axis Toggle Buttons
    const btnPauseArcade = this.pauseOverlay.querySelector('#btn-pause-pitch-arcade') as HTMLButtonElement;
    const btnPauseSim = this.pauseOverlay.querySelector('#btn-pause-pitch-sim') as HTMLButtonElement;

    btnPauseArcade?.addEventListener('click', () => {
      this.inputManager?.setPitchInverted(false);
      this.updatePausePitchToggle();
    });

    btnPauseSim?.addEventListener('click', () => {
      this.inputManager?.setPitchInverted(true);
      this.updatePausePitchToggle();
    });

    // PAUSE MENU - Joystick Mode Toggle Buttons
    const btnJoyFloat = this.pauseOverlay.querySelector('#btn-pause-joy-floating') as HTMLButtonElement;
    const btnJoyStatic = this.pauseOverlay.querySelector('#btn-pause-joy-static') as HTMLButtonElement;

    btnJoyFloat?.addEventListener('click', () => {
      this.inputManager?.setJoystickMode('floating');
      this.updateJoystickToggleUI();
    });

    btnJoyStatic?.addEventListener('click', () => {
      this.inputManager?.setJoystickMode('static');
      this.updateJoystickToggleUI();
    });

    // Tilt Control Buttons (Title and Pause Menus)
    const handleTiltClick = async (btn: HTMLButtonElement) => {
      if (!this.inputManager) return;
      if (!this.inputManager.isTiltEnabled) {
        const granted = await this.inputManager.enableTilt();
        if (granted) {
          this.updateTiltButtonsUI();
        } else {
          btn.innerText = 'GYRO: [ UNAVAILABLE ]';
          setTimeout(() => {
            this.updateTiltButtonsUI();
          }, 1500);
        }
      } else {
        this.inputManager.disableTilt();
        this.updateTiltButtonsUI();
      }
    };

    const handleCalibrateClick = (btn: HTMLButtonElement) => {
      if (!this.inputManager) return;
      this.inputManager.calibrateNeutral();
      btn.innerText = '[ ZEROED ]';
      setTimeout(() => {
        btn.innerText = '[ CALIBRATE ZERO ]';
      }, 800);
    };

    const titleTiltBtn = this.titleOverlay.querySelector('#btn-title-tilt') as HTMLButtonElement | null;
    titleTiltBtn?.addEventListener('click', () => {
      if (titleTiltBtn) handleTiltClick(titleTiltBtn);
    });

    const pauseTiltBtn = this.pauseOverlay.querySelector('#btn-pause-tilt') as HTMLButtonElement | null;
    pauseTiltBtn?.addEventListener('click', () => {
      if (pauseTiltBtn) handleTiltClick(pauseTiltBtn);
    });

    const titleCalibrateBtn = this.titleOverlay.querySelector('#btn-title-calibrate') as HTMLButtonElement | null;
    titleCalibrateBtn?.addEventListener('click', () => {
      if (titleCalibrateBtn) handleCalibrateClick(titleCalibrateBtn);
    });

    const pauseCalibrateBtn = this.pauseOverlay.querySelector('#btn-pause-calibrate') as HTMLButtonElement | null;
    pauseCalibrateBtn?.addEventListener('click', () => {
      if (pauseCalibrateBtn) handleCalibrateClick(pauseCalibrateBtn);
    });

    if (this.inputManager) {
      this.inputManager.addGyroListener(() => {
        this.updateTiltButtonsUI();
      });
      this.inputManager.addJoystickModeListener(() => {
        this.updateJoystickToggleUI();
      });
    }

    // Keyboard shortcut (Escape or 'P') to toggle pause
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        if (this.gameState.current === 'RACING') {
          this.gameState.setState('PAUSED');
        } else if (this.gameState.current === 'PAUSED') {
          this.callbacks.onResume();
        }
      }
    });
  }

  public updateMusicUI(isMuted: boolean): void {
    if (this.musicBtn) {
      this.musicBtn.innerHTML = isMuted ? '🔇' : '🔊';
      this.musicBtn.setAttribute('title', isMuted ? 'Unmute Synthwave Music' : 'Mute Synthwave Music');
      this.musicBtn.style.borderColor = isMuted ? 'rgba(239, 68, 68, 0.4)' : 'rgba(56, 189, 248, 0.25)';
      this.musicBtn.style.color = isMuted ? '#f87171' : '#38bdf8';
    }
    const titleMusicBtn = this.titleOverlay.querySelector('#btn-title-music');
    if (titleMusicBtn) {
      const icon = titleMusicBtn.querySelector('.music-icon');
      const label = titleMusicBtn.querySelector('.music-label');
      if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
      if (label) label.textContent = isMuted ? 'MUTED' : 'MUSIC';
    }
    const pauseMusicBtn = this.pauseOverlay.querySelector('#btn-pause-music');
    if (pauseMusicBtn) {
      const icon = pauseMusicBtn.querySelector('.music-icon');
      const label = pauseMusicBtn.querySelector('.music-label');
      if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
      if (label) label.textContent = isMuted ? 'MUTED' : 'MUSIC';
    }
  }

  private updatePausePitchToggle(): void {
    const isInverted = this.inputManager ? this.inputManager.isPitchInverted : false;
    const btnPauseArcade = this.pauseOverlay.querySelector('#btn-pause-pitch-arcade') as HTMLButtonElement;
    const btnPauseSim = this.pauseOverlay.querySelector('#btn-pause-pitch-sim') as HTMLButtonElement;

    if (btnPauseArcade && btnPauseSim) {
      if (!isInverted) {
        // Arcade active: soft cyan border & background
        btnPauseArcade.style.borderColor = '#38bdf8';
        btnPauseArcade.style.background = 'rgba(56, 189, 248, 0.2)';
        btnPauseArcade.style.color = '#ffffff';
        btnPauseArcade.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.35)';

        btnPauseSim.style.borderColor = 'transparent';
        btnPauseSim.style.background = 'transparent';
        btnPauseSim.style.color = '#64748b';
        btnPauseSim.style.boxShadow = 'none';
      } else {
        // Flight Sim active: soft cyan border & background
        btnPauseSim.style.borderColor = '#38bdf8';
        btnPauseSim.style.background = 'rgba(56, 189, 248, 0.2)';
        btnPauseSim.style.color = '#ffffff';
        btnPauseSim.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.35)';

        btnPauseArcade.style.borderColor = 'transparent';
        btnPauseArcade.style.background = 'transparent';
        btnPauseArcade.style.color = '#64748b';
        btnPauseArcade.style.boxShadow = 'none';
      }
    }
  }

  private updateJoystickToggleUI(): void {
    const isStatic = this.inputManager?.isStaticJoystick ?? false;
    const btnJoyFloat = this.pauseOverlay.querySelector('#btn-pause-joy-floating') as HTMLButtonElement;
    const btnJoyStatic = this.pauseOverlay.querySelector('#btn-pause-joy-static') as HTMLButtonElement;

    if (btnJoyFloat && btnJoyStatic) {
      if (!isStatic) {
        btnJoyFloat.style.borderColor = '#38bdf8';
        btnJoyFloat.style.background = 'rgba(56, 189, 248, 0.2)';
        btnJoyFloat.style.color = '#ffffff';
        btnJoyFloat.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.35)';

        btnJoyStatic.style.borderColor = 'transparent';
        btnJoyStatic.style.background = 'transparent';
        btnJoyStatic.style.color = '#64748b';
        btnJoyStatic.style.boxShadow = 'none';
      } else {
        btnJoyStatic.style.borderColor = '#38bdf8';
        btnJoyStatic.style.background = 'rgba(56, 189, 248, 0.2)';
        btnJoyStatic.style.color = '#ffffff';
        btnJoyStatic.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.35)';

        btnJoyFloat.style.borderColor = 'transparent';
        btnJoyFloat.style.background = 'transparent';
        btnJoyFloat.style.color = '#64748b';
        btnJoyFloat.style.boxShadow = 'none';
      }
    }
  }

  public updateTiltButtonsUI(): void {
    const isTiltEnabled = this.inputManager?.isTiltEnabled ?? false;
    const titleTiltBtn = this.titleOverlay.querySelector('#btn-title-tilt') as HTMLButtonElement | null;
    const pauseTiltBtn = this.pauseOverlay.querySelector('#btn-pause-tilt') as HTMLButtonElement | null;
    const titleCalibrateBtn = this.titleOverlay.querySelector('#btn-title-calibrate') as HTMLButtonElement | null;
    const pauseCalibrateBtn = this.pauseOverlay.querySelector('#btn-pause-calibrate') as HTMLButtonElement | null;

    const applyState = (tiltBtn: HTMLButtonElement | null, calBtn: HTMLButtonElement | null) => {
      if (tiltBtn) {
        if (isTiltEnabled) {
          tiltBtn.innerText = 'GYRO STEERING: [ ACTIVE ]';
          tiltBtn.classList.add('active');
        } else {
          tiltBtn.innerText = 'GYRO STEERING: [ OFF ]';
          tiltBtn.classList.remove('active');
        }
      }
      if (calBtn) {
        calBtn.style.display = isTiltEnabled ? 'inline-flex' : 'none';
      }
    };

    applyState(titleTiltBtn, titleCalibrateBtn);
    applyState(pauseTiltBtn, pauseCalibrateBtn);
  }

  public syncState(state: string): void {
    if (state === 'TITLE_SCREEN') {
      this.titleOverlay.style.display = 'flex';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
      this.musicBtn.style.display = 'none';
      this.updateTiltButtonsUI();
    } else if (state === 'HANGAR') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
      this.musicBtn.style.display = 'none';
    } else if (state === 'COUNTDOWN') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'flex';
      this.musicBtn.style.display = 'flex';
    } else if (state === 'RACING') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'flex';
      this.musicBtn.style.display = 'flex';
    } else if (state === 'PAUSED') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'flex';
      this.pauseBtn.style.display = 'none';
      this.musicBtn.style.display = 'none';
      this.updatePausePitchToggle();
      this.updateJoystickToggleUI();
      this.updateTiltButtonsUI();
    } else if (state === 'PODIUM') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
      this.musicBtn.style.display = 'none';
    }
  }

  public getPilotCallsign(): string {
    return (this.callsignInput.value.trim() || 'VIPER-01').toUpperCase();
  }

  public destroy(): void {
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}
