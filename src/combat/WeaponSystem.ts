import * as THREE from 'three';

export interface PlasmaBolt {
  mesh: THREE.Mesh;
  prevPos: THREE.Vector3;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  isEnemy: boolean;
  lifetime: number;
  maxLifetime: number;
}

export class WeaponSystem {
  private scene: THREE.Scene;
  public bolts: PlasmaBolt[] = [];

  // Player Weapon Stats
  public readonly FIRE_RATE = 5.0; // 5 shots / sec
  public readonly SHOT_COOLDOWN = 1.0 / 5.0; // 0.2s
  private shotTimer: number = 0;
  private hardpointToggle: boolean = false; // Alternating left/right

  // Overheat Mechanics
  public readonly MAX_HEAT = 15.0; // 15 continuous shots to overheat
  public heat: number = 0.0;
  public isOverheated: boolean = false;
  public readonly OVERHEAT_PENALTY_TIME = 2.0; // 2.0s lockout
  private overheatTimer: number = 0;

  // Audio Context for Laser Blasts
  private audioCtx: AudioContext | null = null;

  // Geometry & Materials
  private boltGeometry: THREE.CylinderGeometry;
  private playerBoltMaterial: THREE.MeshStandardMaterial;
  private enemyBoltMaterial: THREE.MeshStandardMaterial;

  // Temporary structures for swept line-segment collision (Safeguard 1)
  private readonly sweptSegment = new THREE.Line3();
  private readonly closestPt = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initAudio();

    // High-contrast emissive laser capsule geometry
    this.boltGeometry = new THREE.CylinderGeometry(0.18, 0.18, 2.6, 8);
    this.boltGeometry.rotateX(-Math.PI / 2); // Align forward along -Z

    this.playerBoltMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0055,
      emissive: 0xff0055,
      emissiveIntensity: 4.5,
      roughness: 0.1,
    });

    this.enemyBoltMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: 0xff3300,
      emissiveIntensity: 4.0,
      roughness: 0.1,
    });
  }

  private initAudio(): void {
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

  private playLaserSound(isEnemy: boolean = false): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = isEnemy ? 'sawtooth' : 'sine';
    const startFreq = isEnemy ? 900 : 1250;
    const endFreq = isEnemy ? 120 : 180;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.14);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  // -------------------------------------------------------------
  // Player Firing with Alternating Hardpoints & Overheat
  // -------------------------------------------------------------
  public firePlayer(jetPos: THREE.Vector3, jetQuat: THREE.Quaternion): boolean {
    if (this.isOverheated || this.shotTimer > 0) {
      return false;
    }

    this.shotTimer = this.SHOT_COOLDOWN;
    this.heat += 1.0;

    // Check overheat threshold (15 continuous shots)
    if (this.heat >= this.MAX_HEAT) {
      this.isOverheated = true;
      this.overheatTimer = this.OVERHEAT_PENALTY_TIME;
    }

    // Alternating Hardpoint Offset (±1.8m on wings)
    const xOffset = this.hardpointToggle ? 1.8 : -1.8;
    this.hardpointToggle = !this.hardpointToggle;

    const spawnOffset = new THREE.Vector3(xOffset, -0.05, -1.0).applyQuaternion(jetQuat);
    const spawnPos = jetPos.clone().add(spawnOffset);

    // High velocity forward along jet orientation
    const forwardDir = new THREE.Vector3(0, 0, -1).applyQuaternion(jetQuat).normalize();
    const speed = 340.0;
    const velocity = forwardDir.multiplyScalar(speed);

    this.spawnBolt(spawnPos, velocity, jetQuat, false);
    this.playLaserSound(false);

    return true;
  }

  // -------------------------------------------------------------
  // AI Rival Retaliation Bolt Spawner
  // -------------------------------------------------------------
  public fireEnemy(spawnPos: THREE.Vector3, forwardDir: THREE.Vector3, rivalQuat: THREE.Quaternion): void {
    const speed = 250.0;
    const velocity = forwardDir.clone().normalize().multiplyScalar(speed);
    this.spawnBolt(spawnPos, velocity, rivalQuat, true);
    this.playLaserSound(true);
  }

  private spawnBolt(pos: THREE.Vector3, vel: THREE.Vector3, quat: THREE.Quaternion, isEnemy: boolean): void {
    const mat = isEnemy ? this.enemyBoltMaterial : this.playerBoltMaterial;
    const mesh = new THREE.Mesh(this.boltGeometry, mat);
    mesh.position.copy(pos);
    mesh.quaternion.copy(quat);

    this.scene.add(mesh);

    this.bolts.push({
      mesh,
      prevPos: pos.clone(),
      position: pos.clone(),
      velocity: vel.clone(),
      isEnemy,
      lifetime: 0,
      maxLifetime: 2.2, // 2.2s flight range (~750m)
    });
  }

  public getHeatRatio(): number {
    return Math.min(1.0, this.heat / this.MAX_HEAT);
  }

  // -------------------------------------------------------------
  // Swept Line-Segment Collision Check (Safeguard 1)
  // -------------------------------------------------------------
  public checkHitAgainstSphere(bolt: PlasmaBolt, center: THREE.Vector3, radius: number): boolean {
    this.sweptSegment.set(bolt.prevPos, bolt.position);
    this.sweptSegment.closestPointToPoint(center, true, this.closestPt);
    return this.closestPt.distanceTo(center) <= radius;
  }

  public removeBolt(index: number): void {
    const bolt = this.bolts[index];
    this.scene.remove(bolt.mesh);
    this.bolts.splice(index, 1);
  }

  // -------------------------------------------------------------
  // Update Loop (Flight, Swept Movement, Overheat Recovery)
  // -------------------------------------------------------------
  public update(dt: number): void {
    // 1. Overheat & Cooldown Logic
    if (this.isOverheated) {
      this.overheatTimer -= dt;
      if (this.overheatTimer <= 0) {
        this.isOverheated = false;
        this.heat = 0;
      }
    } else {
      // Natural heat dissipation when not firing (4 shots/sec cooling rate)
      this.heat = Math.max(0, this.heat - dt * 4.5);
    }

    if (this.shotTimer > 0) {
      this.shotTimer = Math.max(0, this.shotTimer - dt);
    }

    // 2. Step Active Plasma Bolts
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const bolt = this.bolts[i];
      bolt.lifetime += dt;

      if (bolt.lifetime >= bolt.maxLifetime) {
        this.removeBolt(i);
        continue;
      }

      // Record previous position for continuous swept segment collision
      bolt.prevPos.copy(bolt.position);
      bolt.position.addScaledVector(bolt.velocity, dt);
      bolt.mesh.position.copy(bolt.position);
    }
  }
}
