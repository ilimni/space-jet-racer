import * as THREE from 'three';

export interface RingData {
  index: number;
  position: THREE.Vector3;
  mesh: THREE.Group;
  torusMesh: THREE.Mesh;
  glyphMesh: THREE.Mesh;
  light: THREE.PointLight;
  isCompleted: boolean;
  flashTimer: number;
  isFinishArch?: boolean;
}

export class TrackManager {
  public scene: THREE.Scene;
  public rings: RingData[] = [];
  public currentRingIndex: number = 0;
  public isCourseFinished: boolean = false;

  public onFinish?: (finalGateIndex: number) => void;

  private audioCtx: AudioContext | null = null;
  private readonly RING_RADIUS = 15.0; // Spherical capture volume
  private readonly FINISH_RADIUS = 28.0; // Enlarged capture volume for grand finish arch
  private readonly testLine = new THREE.Line3();
  private readonly closestPoint = new THREE.Vector3();

  // Checkered banner animation
  private finishBanners: THREE.Mesh[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initAudioContext();
    this.buildCourse();
  }

  // -------------------------------------------------------------
  // Web Audio API Procedural Sci-Fi Chime
  // -------------------------------------------------------------
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

  public resetCourse(): void {
    this.currentRingIndex = 0;
    this.isCourseFinished = false;
    for (const ring of this.rings) {
      ring.isCompleted = false;
      ring.flashTimer = 0;
    }
  }

  private playCheckpointChime(isFinish: boolean = false): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;

    if (isFinish) {
      // Grand victory fanfare arpeggio (C5 -> E5 -> G5 -> C6)
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, idx) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const startTime = now + idx * 0.12;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.4, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.65);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.7);
      });
      return;
    }

    // Standard dual oscillator chime (E5 -> B5 / 659Hz -> 987Hz)
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    osc1.frequency.exponentialRampToValueAtTime(1318.5, now + 0.12);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(987.77, now);
    osc2.frequency.exponentialRampToValueAtTime(1975.5, now + 0.18);

    gainNode.gain.setValueAtTime(0.35, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.6);
    osc2.stop(now + 0.6);
  }

  // -------------------------------------------------------------
  // 3D Curving Course Generation with Oversized Hexagonal Finish Arch
  // -------------------------------------------------------------
  private buildCourse(): void {
    const waypoints: THREE.Vector3[] = [
      new THREE.Vector3(0, 0, -100),       // Gate 1: Launch gate
      new THREE.Vector3(20, 15, -240),     // Gate 2: Gentle climb right
      new THREE.Vector3(65, 30, -400),     // Gate 3: Sweeping right turn
      new THREE.Vector3(90, 10, -580),     // Gate 4: Diving right
      new THREE.Vector3(45, -20, -740),    // Gate 5: Downhill banking left
      new THREE.Vector3(-30, -35, -900),   // Gate 6: Deep canyon dip
      new THREE.Vector3(-90, -10, -1060),  // Gate 7: Climbing out left
      new THREE.Vector3(-120, 30, -1220),  // Gate 8: High ridge climb
      new THREE.Vector3(-70, 60, -1380),   // Gate 9: Apex crest
      new THREE.Vector3(10, 50, -1540),    // Gate 10: High-speed sweep right
      new THREE.Vector3(80, 20, -1700),    // Gate 11: Descending sweep
      new THREE.Vector3(60, -15, -1880),   // Gate 12: Slalom dip
      new THREE.Vector3(-20, -10, -2060),  // Gate 13: S-curve transition
      new THREE.Vector3(-10, 15, -2240),   // Gate 14: Final approach
      new THREE.Vector3(0, 0, -2420),      // Gate 15: Grand Hexagonal Finish Arch!
    ];

    const standardTorusGeo = new THREE.TorusGeometry(12, 0.45, 16, 50);
    const standardGlyphGeo = new THREE.TorusGeometry(13.8, 0.15, 4, 8);

    // Oversized Hexagonal Geometries for Gate 15
    const hexTorusGeo = new THREE.TorusGeometry(18, 0.95, 8, 6);
    const hexOuterGeo = new THREE.TorusGeometry(20.5, 0.35, 6, 6);

    for (let i = 0; i < waypoints.length; i++) {
      const pos = waypoints[i];
      const nextPos = i < waypoints.length - 1 ? waypoints[i + 1] : pos.clone().add(new THREE.Vector3(0, 0, -100));
      const tangent = nextPos.clone().sub(pos).normalize();

      const group = new THREE.Group();
      group.position.copy(pos);

      const forwardZ = new THREE.Vector3(0, 0, 1);
      group.quaternion.setFromUnitVectors(forwardZ, tangent);

      const isFinishGate = i === waypoints.length - 1;

      if (isFinishGate) {
        // -------------------------------------------------------------
        // Oversized Hexagonal Finish Arch
        // -------------------------------------------------------------
        const hexMat = new THREE.MeshStandardMaterial({
          color: 0xffd700,
          emissive: 0xffa500,
          emissiveIntensity: 3.5,
          metalness: 0.2,
          roughness: 0.2,
        });
        const hexMesh = new THREE.Mesh(hexTorusGeo, hexMat);
        group.add(hexMesh);

        const outerHexMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xffeedd,
          emissiveIntensity: 2.8,
          wireframe: true,
        });
        const outerHexMesh = new THREE.Mesh(hexOuterGeo, outerHexMat);
        group.add(outerHexMesh);

        // Animated Checkered Holographic Banners
        const numBanners = 12;
        const bannerGeo = new THREE.PlaneGeometry(3.5, 1.2);
        for (let b = 0; b < numBanners; b++) {
          const angle = (b / numBanners) * Math.PI * 2;
          const isBlack = b % 2 === 0;
          const bannerMat = new THREE.MeshStandardMaterial({
            color: isBlack ? 0x050a14 : 0xffffff,
            emissive: isBlack ? 0x000000 : 0xffffff,
            emissiveIntensity: isBlack ? 0 : 2.5,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.85,
          });
          const banner = new THREE.Mesh(bannerGeo, bannerMat);
          banner.position.set(Math.cos(angle) * 15.5, Math.sin(angle) * 15.5, 0);
          banner.rotation.z = angle + Math.PI / 2;
          group.add(banner);
          this.finishBanners.push(banner);
        }

        const finishLight = new THREE.PointLight(0xffd700, 5.0, 60);
        group.add(finishLight);

        this.scene.add(group);

        this.rings.push({
          index: i,
          position: pos,
          mesh: group,
          torusMesh: hexMesh,
          glyphMesh: outerHexMesh,
          light: finishLight,
          isCompleted: false,
          flashTimer: 0,
          isFinishArch: true,
        });
      } else {
        // Standard Checkpoint Ring
        const torusMat = new THREE.MeshStandardMaterial({
          color: 0x00e5ff,
          emissive: 0x00d0ff,
          emissiveIntensity: i === 0 ? 3.5 : 1.2,
          metalness: 0.1,
          roughness: 0.2,
          transparent: true,
          opacity: i === 0 ? 0.95 : 0.65,
        });
        const torusMesh = new THREE.Mesh(standardTorusGeo, torusMat);
        group.add(torusMesh);

        const glyphMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x00f0ff,
          emissiveIntensity: i === 0 ? 2.8 : 0.8,
          wireframe: true,
        });
        const glyphMesh = new THREE.Mesh(standardGlyphGeo, glyphMat);
        group.add(glyphMesh);

        const light = new THREE.PointLight(0x00f0ff, i === 0 ? 3.0 : 0.5, 35);
        group.add(light);

        this.scene.add(group);

        this.rings.push({
          index: i,
          position: pos,
          mesh: group,
          torusMesh,
          glyphMesh,
          light,
          isCompleted: false,
          flashTimer: 0,
          isFinishArch: false,
        });
      }
    }
  }

  // -------------------------------------------------------------
  // Anti-Tunneling Checkpoint Trigger Evaluation
  // -------------------------------------------------------------
  public checkPassage(
    prevJetPos: THREE.Vector3,
    currentJetPos: THREE.Vector3,
    onGatePassed: (gateIndex: number) => void,
    onFinish?: (finalGateIndex: number) => void
  ): boolean {
    if (this.isCourseFinished || this.currentRingIndex >= this.rings.length) {
      return false;
    }

    const targetRing = this.rings[this.currentRingIndex];
    const thresholdRadius = targetRing.isFinishArch ? this.FINISH_RADIUS : this.RING_RADIUS;

    this.testLine.set(prevJetPos, currentJetPos);
    this.testLine.closestPointToPoint(targetRing.position, true, this.closestPoint);
    const distToRing = this.closestPoint.distanceTo(targetRing.position);

    if (distToRing <= thresholdRadius) {
      targetRing.isCompleted = true;
      targetRing.flashTimer = 0.5;

      const isFinish = targetRing.isFinishArch ?? false;
      this.playCheckpointChime(isFinish);

      const passedIndex = this.currentRingIndex;
      onGatePassed(passedIndex);

      this.currentRingIndex++;

      if (this.currentRingIndex >= this.rings.length || isFinish) {
        this.isCourseFinished = true;
        if (onFinish) {
          onFinish(passedIndex);
        } else if (this.onFinish) {
          this.onFinish(passedIndex);
        }
      }

      return true;
    }

    return false;
  }

  public getActiveGatePosition(): THREE.Vector3 | null {
    if (this.currentRingIndex < this.rings.length) {
      return this.rings[this.currentRingIndex].position;
    }
    return null;
  }

  // -------------------------------------------------------------
  // Real-Time Race Standing Calculator (1st to 4th)
  // -------------------------------------------------------------
  public calculateStandings(playerScore: number, rivalScores: number[]): number {
    let rank = 1;
    for (const rScore of rivalScores) {
      if (rScore > playerScore) {
        rank++;
      }
    }
    return rank;
  }

  // -------------------------------------------------------------
  // Animation Loop (Checkered Banners, Pulsing Active Gate, Rotating Glyphs)
  // -------------------------------------------------------------
  public update(dt: number, elapsedTime: number): void {
    // Animate holographic checkered banners at finish gate
    for (let b = 0; b < this.finishBanners.length; b++) {
      const banner = this.finishBanners[b];
      const mat = banner.material as THREE.MeshStandardMaterial;
      const pulse = 1.5 + Math.sin(elapsedTime * 8.0 + b) * 0.8;
      if (mat.emissiveIntensity > 0) {
        mat.emissiveIntensity = pulse;
      }
    }

    for (let i = 0; i < this.rings.length; i++) {
      const ring = this.rings[i];
      const torusMat = ring.torusMesh.material as THREE.MeshStandardMaterial;
      const glyphMat = ring.glyphMesh.material as THREE.MeshStandardMaterial;

      if (ring.flashTimer > 0) {
        ring.flashTimer = Math.max(0, ring.flashTimer - dt);
        torusMat.emissive.setHex(0x00ff66);
        torusMat.emissiveIntensity = 4.5;
        ring.light.color.setHex(0x00ff66);
        ring.light.intensity = 4.0;
        continue;
      }

      if (ring.isCompleted) {
        torusMat.color.setHex(0x103020);
        torusMat.emissive.setHex(0x00ff88);
        torusMat.emissiveIntensity = 0.4;
        torusMat.opacity = 0.35;
        glyphMat.opacity = 0.2;
        ring.light.intensity = 0.2;
      } else if (i === this.currentRingIndex) {
        const pulse = 2.8 + Math.sin(elapsedTime * 6.0) * 1.2;

        if (ring.isFinishArch) {
          torusMat.emissive.setHex(0xffaa00);
          torusMat.emissiveIntensity = pulse * 1.2;
          ring.light.color.setHex(0xffd700);
          ring.light.intensity = pulse * 1.5;
        } else {
          torusMat.color.setHex(0x00e5ff);
          torusMat.emissive.setHex(0x00e5ff);
          torusMat.emissiveIntensity = pulse;
          torusMat.opacity = 1.0;

          glyphMat.emissive.setHex(0x38bdf8);
          glyphMat.emissiveIntensity = pulse * 0.9;
          glyphMat.opacity = 0.9;

          ring.light.color.setHex(0x00e5ff);
          ring.light.intensity = pulse * 0.8;
        }

        ring.glyphMesh.rotation.z += (ring.isFinishArch ? 1.0 : 1.8) * dt;
      } else {
        if (!ring.isFinishArch) {
          torusMat.color.setHex(0x00e5ff);
          torusMat.emissive.setHex(0x00a8cc);
          torusMat.emissiveIntensity = 0.8;
          torusMat.opacity = 0.4;
          glyphMat.opacity = 0.3;
          ring.glyphMesh.rotation.z += 0.4 * dt;
          ring.light.intensity = 0.4;
        }
      }
    }
  }
}
