import { GameStateType } from '../core/GameState';

export type MusicTrackMode = 'MENU' | 'RACING' | 'PAUSED' | 'PODIUM';

export class MusicDirector {
  public audioCtx: AudioContext;
  private masterGain: GainNode;
  private masterFilter: BiquadFilterNode;
  private trackGain: GainNode;

  // Sequencer state
  private currentMode: MusicTrackMode = 'MENU';
  private previousActiveMode: MusicTrackMode = 'MENU';
  private currentBpm: number = 90;
  private isRunning: boolean = false;
  private currentStep: number = 0;
  private currentBar: number = 0;
  private nextStepTime: number = 0;
  private timerId: number | null = null;

  // Volume & Mute state
  private baseVolume: number = 0.35;
  private isMutedState: boolean = false;
  public onMuteChange?: (muted: boolean) => void;

  // White noise buffer for snares and hi-hats
  private noiseBuffer: AudioBuffer | null = null;

  // Note frequency map helper
  private static readonly NOTES: Record<string, number> = {
    // Octave 1
    C1: 32.7, D1: 36.71, E1: 41.2, F1: 43.65, G1: 49.0, A1: 55.0, Bb1: 58.27, B1: 61.74,
    // Octave 2
    C2: 65.41, D2: 73.42, Eb2: 77.78, E2: 82.41, F2: 87.31, G2: 98.0, A2: 110.0, Bb2: 116.54, B2: 123.47,
    // Octave 3
    C3: 130.81, Db3: 138.59, D3: 146.83, Eb3: 155.56, E3: 164.81, F3: 174.61, Fs3: 185.0, G3: 196.0, Ab3: 207.65, A3: 220.0, Bb3: 233.08, B3: 246.94,
    // Octave 4
    C4: 261.63, Cs4: 277.18, D4: 293.66, Eb4: 311.13, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.0, Ab4: 415.3, A4: 440.0, Bb4: 466.16, B4: 493.88,
    // Octave 5
    C5: 523.25, Cs5: 554.37, D5: 587.33, Eb5: 622.25, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0, Bb5: 932.33, B5: 987.77,
    // Octave 6
    C6: 1046.5, D6: 1174.66, E6: 1318.51, F6: 1396.91, G6: 1567.98, A6: 1760.0,
  };

  constructor() {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.audioCtx = new AudioCtxClass();

    // 1. Build Audio Bus: TrackGain -> MasterGain -> Dynamic BiquadFilter (Lowpass) -> Destination
    this.trackGain = this.audioCtx.createGain();
    this.trackGain.gain.setValueAtTime(1.0, this.audioCtx.currentTime);

    this.masterGain = this.audioCtx.createGain();

    // Check saved mute setting
    const savedMute = localStorage.getItem('hyperion_music_muted');
    this.isMutedState = savedMute === 'true';
    this.masterGain.gain.setValueAtTime(
      this.isMutedState ? 0.0001 : this.baseVolume,
      this.audioCtx.currentTime
    );

    this.masterFilter = this.audioCtx.createBiquadFilter();
    this.masterFilter.type = 'lowpass';
    this.masterFilter.frequency.setValueAtTime(18000, this.audioCtx.currentTime);
    this.masterFilter.Q.setValueAtTime(1.0, this.audioCtx.currentTime);

    // Connect bus: TrackGain -> MasterGain -> Dynamic Lowpass BiquadFilter -> Destination
    this.trackGain.connect(this.masterGain);
    this.masterGain.connect(this.masterFilter);
    this.masterFilter.connect(this.audioCtx.destination);

    // Initialize noise buffer
    this.initNoiseBuffer();

    // Setup browser gesture unlock listeners
    this.setupGestureUnlock();

    // Start sequencer clock loop
    this.startSequencer();
  }

  // -------------------------------------------------------------
  // Browser Autoplay Policy & AudioContext Unlocking
  // -------------------------------------------------------------
  private setupGestureUnlock(): void {
    const unlock = () => {
      this.resumeAudio();
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
  }

  public resumeAudio(): void {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // -------------------------------------------------------------
  // White Noise Buffer Generator (Snare / Hi-Hat / Ambience)
  // -------------------------------------------------------------
  private initNoiseBuffer(): void {
    const bufferSize = this.audioCtx.sampleRate * 1.0; // 1 second of noise
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    this.noiseBuffer = buffer;
  }

  // -------------------------------------------------------------
  // Sequencer Engine (Lookahead Web Audio Clock Scheduler)
  // -------------------------------------------------------------
  private startSequencer(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.currentStep = 0;
    this.currentBar = 0;
    this.nextStepTime = this.audioCtx.currentTime + 0.05;

    const lookaheadMs = 25;
    const scheduleAheadSec = 0.12;

    this.timerId = window.setInterval(() => {
      if (this.audioCtx.state === 'suspended') return;

      const currentTime = this.audioCtx.currentTime;
      while (this.nextStepTime < currentTime + scheduleAheadSec) {
        this.scheduleStep(this.currentStep, this.currentBar, this.nextStepTime);
        this.advanceStep();
      }
    }, lookaheadMs);
  }

  private advanceStep(): void {
    const secondsPerStep = (60.0 / this.currentBpm) / 4.0; // 16th note duration
    this.nextStepTime += secondsPerStep;
    this.currentStep = (this.currentStep + 1) % 16;
    if (this.currentStep === 0) {
      this.currentBar = (this.currentBar + 1) % 4;
    }
  }

  // -------------------------------------------------------------
  // Step Scheduler by Track Mode
  // -------------------------------------------------------------
  private scheduleStep(step: number, bar: number, time: number): void {
    // If paused, keep track active under muffled filter
    const activeMode = this.currentMode === 'PAUSED' ? this.previousActiveMode : this.currentMode;

    switch (activeMode) {
      case 'MENU':
        this.playMenuStep(step, bar, time);
        break;
      case 'RACING':
        this.playRacingStep(step, bar, time);
        break;
      case 'PODIUM':
        this.playPodiumStep(step, bar, time);
        break;
    }
  }

  // -------------------------------------------------------------
  // TRACK 1: MENU / HANGAR (90 BPM) - Moody Ambient Space Arps
  // -------------------------------------------------------------
  private playMenuStep(step: number, bar: number, time: number): void {
    // Chord progression (Dm9 -> Bbmaj7 -> Gm9 -> Asus4/A)
    const chords: number[][] = [
      [MusicDirector.NOTES.D3, MusicDirector.NOTES.F3, MusicDirector.NOTES.A3, MusicDirector.NOTES.C4, MusicDirector.NOTES.E4],
      [MusicDirector.NOTES.Bb2, MusicDirector.NOTES.D3, MusicDirector.NOTES.F3, MusicDirector.NOTES.A3, MusicDirector.NOTES.C4],
      [MusicDirector.NOTES.G2, MusicDirector.NOTES.Bb2, MusicDirector.NOTES.D3, MusicDirector.NOTES.F3, MusicDirector.NOTES.A3],
      [MusicDirector.NOTES.A2, MusicDirector.NOTES.D3, MusicDirector.NOTES.E3, MusicDirector.NOTES.G3, MusicDirector.NOTES.Cs4],
    ];

    const currentChord = chords[bar % chords.length];

    // Deep Sub Bass on Beat 1 (Step 0) & Beat 3 (Step 8)
    if (step === 0 || step === 8) {
      const bassNote = currentChord[0] * 0.5; // One octave down
      this.synthesizeSoftBass(bassNote, time, 0.5);
    }

    // Soft Triangle Space Arpeggios (alternate steps)
    if (step % 2 === 0) {
      const arpIdx = (step / 2) % currentChord.length;
      const noteFreq = currentChord[arpIdx];
      this.synthesizeAmbientArp(noteFreq, time, 0.35);
    }

    // Gentle stereo shimmer pad on bar start (Step 0)
    if (step === 0) {
      this.synthesizePadChord(currentChord.slice(1, 4), time, (60.0 / 90) * 4);
    }
  }

  // -------------------------------------------------------------
  // TRACK 2: RACING (132 BPM) - High-Energy Darksynth
  // -------------------------------------------------------------
  private playRacingStep(step: number, bar: number, time: number): void {
    // 1. Driving Four-On-The-Floor Kick Pulse (Steps 0, 4, 8, 12)
    if (step % 4 === 0) {
      this.synthesizeDarksynthKick(time);
    }

    // 2. Snappy Snare / Cyber-Clap on Beats 2 & 4 (Steps 4, 12)
    if (step === 4 || step === 12) {
      this.synthesizeSnare(time);
    }

    // 3. Rolling 16th-Note Hi-Hats (Crisp Off-Beat Accents)
    this.synthesizeHiHat(time, step % 4 === 2 ? 0.22 : 0.08);

    // 4. Rolling 16th Sawtooth Bassline with Punchy Lowpass Envelope
    // Harmonic roots: Bar 0: D, Bar 1: F, Bar 2: C, Bar 3: G/A
    const bassRoots = [
      MusicDirector.NOTES.D2,
      MusicDirector.NOTES.F2,
      MusicDirector.NOTES.C2,
      MusicDirector.NOTES.A2,
    ];
    const root = bassRoots[bar % bassRoots.length];
    // Octave bounce or syncopated groove
    const noteFreq = (step % 4 === 2 || step % 4 === 3) ? root * 2 : root;
    this.synthesizeRollingSawBass(noteFreq, time);

    // 5. Melodic Cyber-Arpeggio Lead (Square Wave through 1200Hz filter)
    const melodyPatterns = [
      // Bar 0 (D minor run)
      [MusicDirector.NOTES.D4, MusicDirector.NOTES.F4, MusicDirector.NOTES.A4, MusicDirector.NOTES.C5,
       MusicDirector.NOTES.D5, MusicDirector.NOTES.A4, MusicDirector.NOTES.F4, MusicDirector.NOTES.G4,
       MusicDirector.NOTES.A4, MusicDirector.NOTES.C5, MusicDirector.NOTES.D5, MusicDirector.NOTES.F5,
       MusicDirector.NOTES.E5, MusicDirector.NOTES.D5, MusicDirector.NOTES.C5, MusicDirector.NOTES.A4],
      // Bar 1 (F major / Dm lift)
      [MusicDirector.NOTES.F4, MusicDirector.NOTES.A4, MusicDirector.NOTES.C5, MusicDirector.NOTES.E5,
       MusicDirector.NOTES.F5, MusicDirector.NOTES.C5, MusicDirector.NOTES.A4, MusicDirector.NOTES.G4,
       MusicDirector.NOTES.A4, MusicDirector.NOTES.D5, MusicDirector.NOTES.E5, MusicDirector.NOTES.F5,
       MusicDirector.NOTES.E5, MusicDirector.NOTES.C5, MusicDirector.NOTES.A4, MusicDirector.NOTES.F4],
      // Bar 2 (C major / energetic sweep)
      [MusicDirector.NOTES.C4, MusicDirector.NOTES.E4, MusicDirector.NOTES.G4, MusicDirector.NOTES.B4,
       MusicDirector.NOTES.C5, MusicDirector.NOTES.G4, MusicDirector.NOTES.E4, MusicDirector.NOTES.F4,
       MusicDirector.NOTES.G4, MusicDirector.NOTES.C5, MusicDirector.NOTES.D5, MusicDirector.NOTES.E5,
       MusicDirector.NOTES.D5, MusicDirector.NOTES.B4, MusicDirector.NOTES.G4, MusicDirector.NOTES.E4],
      // Bar 3 (A minor / suspense turnaround)
      [MusicDirector.NOTES.A4, MusicDirector.NOTES.C5, MusicDirector.NOTES.E5, MusicDirector.NOTES.G5,
       MusicDirector.NOTES.A5, MusicDirector.NOTES.E5, MusicDirector.NOTES.C5, MusicDirector.NOTES.D5,
       MusicDirector.NOTES.E5, MusicDirector.NOTES.G5, MusicDirector.NOTES.A5, MusicDirector.NOTES.B5,
       MusicDirector.NOTES.A5, MusicDirector.NOTES.G5, MusicDirector.NOTES.E5, MusicDirector.NOTES.Cs5],
    ];

    const currentMelody = melodyPatterns[bar % melodyPatterns.length];
    const leadNote = currentMelody[step];
    this.synthesizeCyberLead(leadNote, time);
  }

  // -------------------------------------------------------------
  // TRACK 3: PODIUM (110 BPM) - Victorious Euphoric Synth Progression
  // -------------------------------------------------------------
  private playPodiumStep(step: number, bar: number, time: number): void {
    // Victorious Major Chord Progression (Fmaj7 -> Cmaj -> Dm7 -> Bbmaj7)
    const chords = [
      [MusicDirector.NOTES.F3, MusicDirector.NOTES.A3, MusicDirector.NOTES.C4, MusicDirector.NOTES.E4],
      [MusicDirector.NOTES.C3, MusicDirector.NOTES.E3, MusicDirector.NOTES.G3, MusicDirector.NOTES.C4],
      [MusicDirector.NOTES.D3, MusicDirector.NOTES.F3, MusicDirector.NOTES.A3, MusicDirector.NOTES.C4],
      [MusicDirector.NOTES.Bb2, MusicDirector.NOTES.D3, MusicDirector.NOTES.F3, MusicDirector.NOTES.A3],
    ];

    const currentChord = chords[bar % chords.length];

    // Steady half-time kick on 0 and 8
    if (step === 0 || step === 8) {
      this.synthesizeDarksynthKick(time);
    }

    // Snare on beat 4 (Step 8)
    if (step === 8) {
      this.synthesizeSnare(time);
    }

    // Sparkling High-Register Arps (cascading chime runs)
    if (step % 2 === 0) {
      const arpNotes = [
        MusicDirector.NOTES.C5, MusicDirector.NOTES.E5, MusicDirector.NOTES.G5, MusicDirector.NOTES.C6,
        MusicDirector.NOTES.A5, MusicDirector.NOTES.F5, MusicDirector.NOTES.D6, MusicDirector.NOTES.G5,
      ];
      const note = arpNotes[(step / 2 + bar * 2) % arpNotes.length];
      this.synthesizeSparkleArp(note, time);
    }

    // Uplifting Synth Brass / Pad chords on 0 and 8
    if (step === 0 || step === 8) {
      this.synthesizePadChord(currentChord, time, (60.0 / 110) * 2);
    }
  }

  // =============================================================
  // SYNTHESIS VOICES & DSP INSTRUMENTS
  // =============================================================

  // 1. Driving Kick Pulse (Rapid pitch drop 140Hz -> 30Hz)
  private synthesizeDarksynthKick(time: number): void {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(30, time + 0.08);

    gain.gain.setValueAtTime(0.75, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

    osc.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + 0.15);

    // Punch transient click
    const clickOsc = this.audioCtx.createOscillator();
    const clickGain = this.audioCtx.createGain();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(450, time);
    clickOsc.frequency.exponentialRampToValueAtTime(40, time + 0.015);
    clickGain.gain.setValueAtTime(0.4, time);
    clickGain.gain.exponentialRampToValueAtTime(0.001, time + 0.018);

    clickOsc.connect(clickGain);
    clickGain.connect(this.trackGain);
    clickOsc.start(time);
    clickOsc.stop(time + 0.02);
  }

  // 2. Rolling 16th-Note Sawtooth Bassline with Punchy Lowpass Envelope
  private synthesizeRollingSawBass(freq: number, time: number): void {
    const osc = this.audioCtx.createOscillator();
    const filter = this.audioCtx.createBiquadFilter();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.Q.setValueAtTime(3.5, time);
    // Punchy filter envelope sweep 2800Hz -> 380Hz
    filter.frequency.setValueAtTime(2800, time);
    filter.frequency.exponentialRampToValueAtTime(380, time + 0.07);

    gain.gain.setValueAtTime(0.24, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.085);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + 0.09);
  }

  // 3. Melodic Cyber-Arpeggio Lead (Square wave through 1200Hz filter)
  private synthesizeCyberLead(freq: number, time: number): void {
    const osc = this.audioCtx.createOscillator();
    const filter = this.audioCtx.createBiquadFilter();
    const gain = this.audioCtx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, time);
    filter.Q.setValueAtTime(4.0, time); // Resonant cyber bite

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.10);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + 0.11);
  }

  // 4. Snare Drum / Cyber-Clap
  private synthesizeSnare(time: number): void {
    if (!this.noiseBuffer) return;

    // Noise component
    const noiseSource = this.audioCtx.createBufferSource();
    noiseSource.buffer = this.noiseBuffer;

    const noiseFilter = this.audioCtx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(900, time);

    const noiseGain = this.audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.35, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.trackGain);

    noiseSource.start(time);
    noiseSource.stop(time + 0.18);

    // Tonal body
    const bodyOsc = this.audioCtx.createOscillator();
    const bodyGain = this.audioCtx.createGain();
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(180, time);
    bodyOsc.frequency.exponentialRampToValueAtTime(80, time + 0.08);
    bodyGain.gain.setValueAtTime(0.3, time);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.trackGain);
    bodyOsc.start(time);
    bodyOsc.stop(time + 0.1);
  }

  // 5. Hi-Hat (Filtered Noise)
  private synthesizeHiHat(time: number, volume: number): void {
    if (!this.noiseBuffer) return;

    const source = this.audioCtx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6500, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.045);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.trackGain);

    source.start(time);
    source.stop(time + 0.05);
  }

  // 6. Ambient Space Arp (Soft Triangle Wave Chords with LFO modulation)
  private synthesizeAmbientArp(freq: number, time: number, duration: number): void {
    const osc = this.audioCtx.createOscillator();
    const filter = this.audioCtx.createBiquadFilter();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // Filter with gentle warm character
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.Q.setValueAtTime(2.0, time);

    // Slow sine LFO modulation
    const lfo = this.audioCtx.createOscillator();
    const lfoGain = this.audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(1.2, time); // 1.2 Hz slow sine
    lfoGain.gain.setValueAtTime(380, time); // Modulate filter cutoff +-380Hz
    lfo.connect(filter.frequency);
    lfo.start(time);
    lfo.stop(time + duration + 0.05);

    // Soft envelope
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.18, time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  // 7. Soft Sub-Bass
  private synthesizeSoftBass(freq: number, time: number, duration: number): void {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.35, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  // 8. Pad Chord Sustains
  private synthesizePadChord(chord: number[], time: number, duration: number): void {
    for (const freq of chord) {
      const osc = this.audioCtx.createOscillator();
      const filter = this.audioCtx.createBiquadFilter();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, time);
      filter.Q.setValueAtTime(1.2, time);

      // Slow sine LFO modulation for warm space atmosphere
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.6, time); // 0.6 Hz slow sine
      lfoGain.gain.setValueAtTime(220, time);
      lfo.connect(filter.frequency);
      lfo.start(time);
      lfo.stop(time + duration + 0.05);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.06, time + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.trackGain);

      osc.start(time);
      osc.stop(time + duration + 0.05);
    }
  }

  // 9. Sparkling High-Register Arps (Podium)
  private synthesizeSparkleArp(freq: number, time: number): void {
    const osc = this.audioCtx.createOscillator();
    const filter = this.audioCtx.createBiquadFilter();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, time);
    filter.Q.setValueAtTime(3.0, time);

    gain.gain.setValueAtTime(0.14, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.trackGain);

    osc.start(time);
    osc.stop(time + 0.24);
  }

  // =============================================================
  // MASTER VOLUME, MUTE & COCKPIT MUFFLE (PAUSE FILTER)
  // =============================================================

  public setVolume(val: number): void {
    this.baseVolume = Math.max(0, Math.min(1, val));
    if (!this.isMutedState) {
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), now);
      this.masterGain.gain.linearRampToValueAtTime(this.baseVolume, now + 0.05);
    }
  }

  public mute(): void {
    this.isMutedState = true;
    localStorage.setItem('hyperion_music_muted', 'true');
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.05);
    if (this.onMuteChange) {
      this.onMuteChange(true);
    }
  }

  public unmute(): void {
    this.resumeAudio();
    this.isMutedState = false;
    localStorage.setItem('hyperion_music_muted', 'false');
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(Math.max(0.0001, this.masterGain.gain.value), now);
    this.masterGain.gain.linearRampToValueAtTime(this.baseVolume, now + 0.05);
    if (this.onMuteChange) {
      this.onMuteChange(false);
    }
  }

  public toggleMute(): boolean {
    if (this.isMutedState) {
      this.unmute();
    } else {
      this.mute();
    }
    return this.isMutedState;
  }

  public isMuted(): boolean {
    return this.isMutedState;
  }

  // -------------------------------------------------------------
  // Dynamic State Transitions & Filter Sweeps
  // -------------------------------------------------------------
  public transitionTo(targetState: GameStateType | MusicTrackMode | 'START'): void {
    // Map GameStateType / custom state string to MusicTrackMode
    let targetMode: MusicTrackMode;
    if (
      targetState === 'TITLE_SCREEN' ||
      targetState === 'HANGAR' ||
      targetState === 'MENU' ||
      targetState === 'START'
    ) {
      targetMode = 'MENU';
    } else if (targetState === 'COUNTDOWN' || targetState === 'RACING') {
      targetMode = 'RACING';
    } else if (targetState === 'PAUSED') {
      targetMode = 'PAUSED';
    } else if (targetState === 'PODIUM') {
      targetMode = 'PODIUM';
    } else {
      targetMode = 'MENU';
    }

    if (targetMode === this.currentMode) return;

    const now = this.audioCtx.currentTime;

    // Handle entering PAUSED state: sweep master BiquadFilter 18,000Hz -> 380Hz over 0.25s
    if (targetMode === 'PAUSED') {
      this.previousActiveMode = this.currentMode;
      this.currentMode = 'PAUSED';

      this.masterFilter.frequency.cancelScheduledValues(now);
      const curFreq = Math.max(20, this.masterFilter.frequency.value);
      this.masterFilter.frequency.setValueAtTime(curFreq, now);
      this.masterFilter.frequency.exponentialRampToValueAtTime(380, now + 0.25);
      return;
    }

    // Handle exiting PAUSED state: sweep master BiquadFilter 380Hz -> 18,000Hz over 0.25s
    if (this.currentMode === 'PAUSED') {
      this.masterFilter.frequency.cancelScheduledValues(now);
      const curFreq = Math.max(20, this.masterFilter.frequency.value);
      this.masterFilter.frequency.setValueAtTime(curFreq, now);
      this.masterFilter.frequency.exponentialRampToValueAtTime(18000, now + 0.25);

      // If returning to the same active mode, resume seamlessly without resetting sequencer
      if (targetMode === this.previousActiveMode) {
        this.currentMode = targetMode;
        return;
      }
    }

    // Cross-fade between different musical patterns
    this.currentMode = targetMode;
    this.previousActiveMode = targetMode;

    // Set BPM
    const bpmMap: Record<MusicTrackMode, number> = {
      MENU: 90,
      RACING: 132,
      PAUSED: 132,
      PODIUM: 110,
    };
    const targetBpm = bpmMap[targetMode];

    // Smooth crossfade dip & rise
    this.trackGain.gain.cancelScheduledValues(now);
    const curTrackGain = Math.max(0.001, this.trackGain.gain.value);
    this.trackGain.gain.setValueAtTime(curTrackGain, now);
    this.trackGain.gain.linearRampToValueAtTime(0.1, now + 0.15);
    this.trackGain.gain.linearRampToValueAtTime(1.0, now + 0.35);

    this.currentBpm = targetBpm;
    this.currentStep = 0;
    this.currentBar = 0;
    this.nextStepTime = now + 0.05;
  }

  public destroy(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isRunning = false;
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      this.audioCtx.close();
    }
  }
}
