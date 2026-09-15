import { GameState } from '../core/GameState';
import { InputManager } from '../core/InputManager';

export interface MenuUICallbacks {
  onStartRace: (callsign: string) => void;
  onOpenHangar: () => void;
  onResume: () => void;
  onRestartRace: () => void;
  onQuitToTitle: () => void;
  onAudioUnlock: () => void;
}

export class MenuUI {
  private container: HTMLDivElement;
  private titleOverlay: HTMLDivElement;
  private pauseOverlay: HTMLDivElement;
  public pauseBtn: HTMLButtonElement;
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
        <div class="title-badge">INTERSTELLAR GP • COMBAT SIMULATOR</div>
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
          <div class="mobile-hint">&#128241; Mobile: On-Screen Virtual Stick + Gyro Tilt + Multi-Touch Buttons</div>
        </div>
      </div>
    `;

    // 2. Create In-Game Pause Button
    this.pauseBtn = document.createElement('button');
    this.pauseBtn.id = 'hud-pause-btn';
    this.pauseBtn.className = 'pause-hud-trigger';
    this.pauseBtn.innerHTML = `<span>&#10074;&#10074;</span><span>PAUSE</span>`;
    this.pauseBtn.style.display = 'none';

    // 3. Create Pause Menu Overlay
    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.className = 'menu-screen-backdrop';
    this.pauseOverlay.id = 'menu-pause-screen';
    this.pauseOverlay.style.display = 'none';

    this.pauseOverlay.innerHTML = `
      <div class="menu-modal-card pause-card">
        <div class="pause-badge">TACTICAL SYSTEM PAUSED</div>
        <h2 class="pause-heading">MISSION SUSPENDED</h2>
        <p class="subtitle-text">ORBITAL TIME &amp; TELEMETRY TEMPORARILY FROZEN</p>

        <!-- Pitch Axis Setting in Pause Menu -->
        <div class="pause-settings-card" style="margin: 16px 0; padding: 12px 14px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 187, 0, 0.35); border-radius: 14px; text-align: left;">
          <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #fbbf24; text-transform: uppercase; margin-bottom: 8px;">PITCH AXIS DYNAMICS</div>
          <div class="pitch-toggle-group" style="display: flex; gap: 8px; background: rgba(8, 14, 28, 0.85); padding: 4px; border-radius: 10px; border: 1px solid rgba(255, 187, 0, 0.25);">
            <button id="btn-pause-pitch-arcade" style="flex: 1; padding: 9px 8px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">ARCADE</button>
            <button id="btn-pause-pitch-sim" style="flex: 1; padding: 9px 8px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid transparent; white-space: nowrap;">FLIGHT SIM</button>
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
    this.container.appendChild(this.pauseBtn);
    document.body.appendChild(this.container);

    this.callsignInput = this.titleOverlay.querySelector('#callsign-input') as HTMLInputElement;

    this.bindEvents();
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
        background: radial-gradient(circle at center, rgba(8, 16, 36, 0.78) 0%, rgba(2, 4, 10, 0.94) 100%);
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
        background: rgba(10, 18, 38, 0.85);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 18px;
        padding: 32px 40px;
        width: 90%;
        max-width: 540px;
        box-shadow: 0 0 60px rgba(0, 240, 255, 0.25), inset 0 0 20px rgba(0, 240, 255, 0.08);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
      }

      .pause-card {
        border-color: rgba(255, 170, 0, 0.45);
        box-shadow: 0 0 60px rgba(255, 170, 0, 0.25), inset 0 0 20px rgba(255, 170, 0, 0.08);
        max-width: 440px;
      }

      .title-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2.5px;
        color: #00f0ff;
        background: rgba(0, 240, 255, 0.12);
        border: 1px solid rgba(0, 240, 255, 0.4);
        padding: 4px 14px;
        border-radius: 20px;
        margin-bottom: 14px;
        text-transform: uppercase;
      }

      .pause-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2.5px;
        color: #ffbb00;
        background: rgba(255, 187, 0, 0.12);
        border: 1px solid rgba(255, 187, 0, 0.4);
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
        color: #ffffff;
        text-shadow: 0 0 20px rgba(0, 240, 255, 0.7);
        text-transform: uppercase;
      }

      .logo-accent {
        color: #00f0ff;
        text-shadow: 0 0 24px #00f0ff;
      }

      .pause-heading {
        margin: 0 0 6px 0;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: 2.5px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(255, 170, 0, 0.6);
        text-transform: uppercase;
      }

      .subtitle-text {
        margin: 0 0 24px 0;
        font-size: 11.5px;
        letter-spacing: 1.5px;
        color: rgba(255, 255, 255, 0.65);
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
        color: #00f0ff;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 10px;
        padding: 2px 14px;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .input-wrapper:focus-within {
        border-color: #00f0ff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
      }

      .input-prefix {
        color: #00f0ff;
        font-size: 13px;
        margin-right: 10px;
      }

      .callsign-text-field {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: #ffffff;
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
        background: linear-gradient(135deg, #00f0ff 0%, #0088ff 100%);
        color: #030a16;
        border: none;
        border-radius: 10px;
        padding: 14px 20px;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.2s;
        box-shadow: 0 0 24px rgba(0, 240, 255, 0.5);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 32px rgba(0, 240, 255, 0.8);
      }

      .btn-primary:active {
        transform: translateY(1px);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.05);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
      }

      .btn-secondary:hover {
        background: rgba(0, 240, 255, 0.12);
        border-color: #00f0ff;
        transform: translateY(-2px);
      }

      .btn-danger {
        background: rgba(255, 0, 60, 0.1);
        color: #ff3366;
        border: 1px solid rgba(255, 0, 60, 0.4);
        border-radius: 10px;
        padding: 12px 20px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
      }

      .btn-danger:hover {
        background: rgba(255, 0, 60, 0.25);
        border-color: #ff0055;
        transform: translateY(-2px);
      }

      .briefing-card {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 16px;
        text-align: left;
      }

      .briefing-header {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .briefing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.8);
      }

      .key-pill {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 4px;
        padding: 2px 6px;
        font-weight: 700;
        color: #00f0ff;
        font-family: monospace;
        margin-right: 4px;
      }

      .mobile-hint {
        margin-top: 10px;
        font-size: 10.5px;
        color: rgba(255, 255, 255, 0.5);
      }

      /* In-Game Floating Pause Button */
      .pause-hud-trigger {
        position: relative;
        background: rgba(6, 12, 28, 0.75);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 8px;
        padding: 6px 14px;
        color: #ffffff;
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
        box-shadow: 0 0 14px rgba(0, 240, 255, 0.2);
        transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
      }

      .pause-hud-trigger:hover {
        background: rgba(0, 240, 255, 0.2);
        border-color: #00f0ff;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
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

  private updatePausePitchToggle(): void {
    const isInverted = this.inputManager ? this.inputManager.isPitchInverted : false;
    const btnPauseArcade = this.pauseOverlay.querySelector('#btn-pause-pitch-arcade') as HTMLButtonElement;
    const btnPauseSim = this.pauseOverlay.querySelector('#btn-pause-pitch-sim') as HTMLButtonElement;

    if (btnPauseArcade && btnPauseSim) {
      if (!isInverted) {
        // Arcade active: glowing cyan border & background
        btnPauseArcade.style.borderColor = '#00f0ff';
        btnPauseArcade.style.background = 'rgba(0, 240, 255, 0.22)';
        btnPauseArcade.style.color = '#ffffff';
        btnPauseArcade.style.boxShadow = '0 0 14px rgba(0, 240, 255, 0.5)';

        btnPauseSim.style.borderColor = 'transparent';
        btnPauseSim.style.background = 'transparent';
        btnPauseSim.style.color = '#64748b';
        btnPauseSim.style.boxShadow = 'none';
      } else {
        // Flight Sim active: glowing cyan border & background
        btnPauseSim.style.borderColor = '#00f0ff';
        btnPauseSim.style.background = 'rgba(0, 240, 255, 0.22)';
        btnPauseSim.style.color = '#ffffff';
        btnPauseSim.style.boxShadow = '0 0 14px rgba(0, 240, 255, 0.5)';

        btnPauseArcade.style.borderColor = 'transparent';
        btnPauseArcade.style.background = 'transparent';
        btnPauseArcade.style.color = '#64748b';
        btnPauseArcade.style.boxShadow = 'none';
      }
    }
  }

  public syncState(state: string): void {
    if (state === 'TITLE_SCREEN') {
      this.titleOverlay.style.display = 'flex';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
    } else if (state === 'HANGAR') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
    } else if (state === 'COUNTDOWN') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'flex';
    } else if (state === 'RACING') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'flex';
    } else if (state === 'PAUSED') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'flex';
      this.pauseBtn.style.display = 'none';
      this.updatePausePitchToggle();
    } else if (state === 'PODIUM') {
      this.titleOverlay.style.display = 'none';
      this.pauseOverlay.style.display = 'none';
      this.pauseBtn.style.display = 'none';
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
