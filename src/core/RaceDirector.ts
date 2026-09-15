import * as THREE from 'three';
import { Jet } from '../entities/Jet';
import { AIRival } from '../entities/AIRival';
import { FlightController } from './FlightController';

export interface GridSlot {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
}

export class RaceDirector {
  // Staggered starting grid coordinates
  public readonly playerStartPos = new THREE.Vector3(0, 0, 30);
  public readonly rivalStartPositions: THREE.Vector3[] = [
    new THREE.Vector3(-12, 0, 20), // Phantom-01
    new THREE.Vector3(12, 0, 20),  // Solar-02
    new THREE.Vector3(-6, 0, 10),  // Viper-03
  ];

  private audioCtx: AudioContext | null = null;
  private overlayContainer: HTMLDivElement;
  private countdownEl: HTMLDivElement;
  private countdownTimer: number | null = null;
  private isCountingDown: boolean = false;

  constructor() {
    this.initAudioContext();

    this.overlayContainer = document.createElement('div');
    this.overlayContainer.id = 'countdown-overlay';
    this.overlayContainer.style.position = 'fixed';
    this.overlayContainer.style.top = '0';
    this.overlayContainer.style.left = '0';
    this.overlayContainer.style.width = '100%';
    this.overlayContainer.style.height = '100%';
    this.overlayContainer.style.pointerEvents = 'none';
    this.overlayContainer.style.zIndex = '2500';
    this.overlayContainer.style.display = 'none';
    this.overlayContainer.style.alignItems = 'center';
    this.overlayContainer.style.justifyContent = 'center';

    this.countdownEl = document.createElement('div');
    this.countdownEl.className = 'countdown-num';
    this.overlayContainer.appendChild(this.countdownEl);

    this.injectStyles();
    document.body.appendChild(this.overlayContainer);
  }

  private initAudioContext(): void {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      this.audioCtx = new AudioCtxClass();
    }
  }

  public resumeAudio(): void {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  private playCountdownBeep(isGo: boolean = false): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;

    if (isGo) {
      // 880 Hz High-pitched start chime with harmonic overtone
      const osc1 = this.audioCtx.createOscillator();
      const osc2 = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, now);
      osc1.frequency.exponentialRampToValueAtTime(1760, now + 0.35);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1100, now);
      osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.35);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.5);
      osc2.stop(now + 0.5);
    } else {
      // 440 Hz Attention beep
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    }
  }

  private injectStyles(): void {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes countdownPop {
        0% { transform: scale(1.8); opacity: 0; filter: blur(6px); }
        30% { transform: scale(1.0); opacity: 1; filter: blur(0px); }
        80% { transform: scale(0.95); opacity: 1; filter: blur(0px); }
        100% { transform: scale(0.8); opacity: 0; filter: blur(4px); }
      }

      .countdown-num {
        font-family: 'Impact', system-ui, sans-serif;
        font-size: 140px;
        font-weight: 900;
        letter-spacing: 6px;
        text-align: center;
        text-transform: uppercase;
        animation: countdownPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }
    `;
    document.head.appendChild(styleEl);
  }

  public resetStartingGrid(
    playerJet: Jet,
    flightController: FlightController,
    rivals: AIRival[]
  ): void {
    // 1. Position Player Jet
    playerJet.mesh.position.copy(this.playerStartPos);
    playerJet.mesh.quaternion.identity(); // Facing -Z
    flightController.resetPhysics(0); // Engines warm at 0 km/h before countdown

    // 2. Position AI Rivals
    const defaultQuat = new THREE.Quaternion();
    for (let i = 0; i < rivals.length; i++) {
      const startPos = this.rivalStartPositions[i] || new THREE.Vector3(0, 0, 20);
      rivals[i].resetToPosition(startPos, defaultQuat, 0);
    }
  }

  public startCountdown(onGo: () => void): void {
    this.cancelCountdown();
    this.isCountingDown = true;
    this.overlayContainer.style.display = 'flex';

    let count = 3;

    const renderCount = () => {
      if (!this.isCountingDown) return;

      if (count > 0) {
        this.countdownEl.style.animation = 'none';
        void this.countdownEl.offsetWidth; // Force reflow
        this.countdownEl.style.animation = 'countdownPop 0.95s cubic-bezier(0.2, 0.8, 0.2, 1) forwards';

        this.countdownEl.textContent = count.toString();
        this.countdownEl.style.color = '#ffbb00';
        this.countdownEl.style.textShadow = '0 0 35px #ffaa00, 0 0 70px rgba(255, 170, 0, 0.6)';

        this.playCountdownBeep(false);

        count--;
        this.countdownTimer = window.setTimeout(renderCount, 1000);
      } else if (count === 0) {
        this.countdownEl.style.animation = 'none';
        void this.countdownEl.offsetWidth;
        this.countdownEl.style.animation = 'countdownPop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards';

        this.countdownEl.textContent = 'ENGAGE!';
        this.countdownEl.style.color = '#00f0ff';
        this.countdownEl.style.textShadow = '0 0 40px #00f0ff, 0 0 80px rgba(0, 240, 255, 0.8)';

        this.playCountdownBeep(true);
        onGo();

        this.countdownTimer = window.setTimeout(() => {
          this.overlayContainer.style.display = 'none';
          this.isCountingDown = false;
        }, 1200);
      }
    };

    renderCount();
  }

  public cancelCountdown(): void {
    this.isCountingDown = false;
    if (this.countdownTimer !== null) {
      clearTimeout(this.countdownTimer);
      this.countdownTimer = null;
    }
    this.overlayContainer.style.display = 'none';
  }

  public destroy(): void {
    this.cancelCountdown();
    if (this.overlayContainer.parentElement) {
      this.overlayContainer.parentElement.removeChild(this.overlayContainer);
    }
  }
}
