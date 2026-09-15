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
        <div class="pause-settings-card" style="margin: 16px 0; padding: 12px 14px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; text-align: left;">
          <div style="font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #38bdf8; text-transform: uppercase; margin-bottom: 8px;">PITCH AXIS DYNAMICS</div>
          <div class="pitch-toggle-group" style="display: flex; gap: 8px; background: rgba(11, 18, 33, 0.85); padding: 4px; border-radius: 10px; border: 1px solid rgba(56, 189, 248, 0.18);">
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
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(56, 189, 248, 0.2);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-radius: 16px;
        padding: 32px 40px;
        width: 90%;
        max-width: 540px;
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
