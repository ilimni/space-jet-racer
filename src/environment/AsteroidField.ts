import * as THREE from 'three';
import { ExplosionFX } from '../effects/ExplosionFX';

export interface Asteroid {
  mesh: THREE.Mesh;
  position: THREE.Vector3;
  radius: number;
  rotationSpeed: THREE.Vector3;
  hp: number;
  flashTimer: number;
}

export type LootType = 'HEART' | 'BOOST';

export interface LootItem {
  type: LootType;
  mesh: THREE.Group;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  lifetime: number;
}

export class AsteroidField {
  public scene: THREE.Scene;
  public asteroids: Asteroid[] = [];
  public lootItems: LootItem[] = [];

  private hitCooldown: number = 0;
  private audioCtx: AudioContext | null = null;
  private explosionFX?: ExplosionFX;

  // Base material for asteroids
  private defaultAsteroidMaterial: THREE.MeshStandardMaterial;

  constructor(scene: THREE.Scene, trackWaypoints: THREE.Vector3[], explosionFX?: ExplosionFX) {
    this.scene = scene;
    this.explosionFX = explosionFX;
    this.initAudio();

    this.defaultAsteroidMaterial = new THREE.MeshStandardMaterial({
      color: 0x484238,
      roughness: 0.88,
      metalness: 0.12,
      flatShading: true,
    });

    this.generateAsteroids(trackWaypoints);
  }

  private initAudio(): void {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      this.audioCtx = new AudioCtxClass();
    }
  }

  private playImpactSound(): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  private playShatterSound(): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.55);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.7);
  }

  private playLootPickupSound(isHeart: boolean): void {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    const startFreq = isHeart ? 523.25 : 659.25; // C5 or E5
    const endFreq = isHeart ? 1046.5 : 1318.5; // C6 or E6

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.2);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.38);
  }

  // -------------------------------------------------------------
  // Procedural Asteroid Field Generation (40 Asteroids)
  // -------------------------------------------------------------
  private generateAsteroids(trackWaypoints: THREE.Vector3[]): void {
    const count = 40;

    for (let i = 0; i < count; i++) {
      const targetWaypoint = trackWaypoints[Math.floor(Math.random() * (trackWaypoints.length - 1))];
      const offsetRadius = 22 + Math.random() * 65;
      const angle = Math.random() * Math.PI * 2;
      const zOffset = (Math.random() - 0.5) * 120;

      const pos = new THREE.Vector3(
        targetWaypoint.x + Math.cos(angle) * offsetRadius,
        targetWaypoint.y + Math.sin(angle) * offsetRadius,
        targetWaypoint.z + zOffset
      );

      const radius = 3.0 + Math.random() * 18.0;

      const geo = new THREE.IcosahedronGeometry(radius, 1);
      const posAttr = geo.attributes.position;
      for (let v = 0; v < posAttr.count; v++) {
        const vx = posAttr.getX(v);
        const vy = posAttr.getY(v);
        const vz = posAttr.getZ(v);
        const noise = 0.8 + Math.random() * 0.4;
        posAttr.setXYZ(v, vx * noise, vy * noise, vz * noise);
      }
      geo.computeVertexNormals();

      // Individual material clone so hit flash doesn't affect all asteroids
      const mat = this.defaultAsteroidMaterial.clone();
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      this.scene.add(mesh);

      this.asteroids.push({
        mesh,
        position: pos,
        radius,
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.6
        ),
        hp: 3, // 3 Hit points
        flashTimer: 0,
      });
    }
  }

  // -------------------------------------------------------------
  // Asteroid Hit by Plasma Bolt (Hit Flash & Shattering)
  // -------------------------------------------------------------
  public hitAsteroid(index: number, damage: number = 1): boolean {
    if (index >= this.asteroids.length) return false;
    const ast = this.asteroids[index];

    ast.hp -= damage;
    ast.flashTimer = 0.12; // White flash

    const mat = ast.mesh.material as THREE.MeshStandardMaterial;
    mat.emissive.setHex(0xffffff);
    mat.emissiveIntensity = 2.5;

    if (ast.hp <= 0) {
      this.shatterAsteroid(index);
      return true;
    }

    return false;
  }

  private shatterAsteroid(index: number): void {
    const ast = this.asteroids[index];

    // Trigger debris explosion burst
    if (this.explosionFX) {
      this.explosionFX.trigger(ast.position, 0xff7700);
    }
    this.playShatterSound();

    // 50% Nanite Repair Orb (+1 Heart) / 50% Plasma Cell (+35% Boost)
    const lootType: LootType = Math.random() < 0.5 ? 'HEART' : 'BOOST';
    this.spawnLootDrop(ast.position, lootType);

    // Remove mesh from scene and array
    this.scene.remove(ast.mesh);
    ast.mesh.geometry.dispose();
    (ast.mesh.material as THREE.Material).dispose();
    this.asteroids.splice(index, 1);
  }

  // -------------------------------------------------------------
  // Loot Drop Item Spawning & Tractor Beam Physics (Safeguard 2)
  // -------------------------------------------------------------
  private spawnLootDrop(pos: THREE.Vector3, type: LootType): void {
    const group = new THREE.Group();
    group.position.copy(pos);

    const isHeart = type === 'HEART';
    const colorHex = isHeart ? 0x00ff88 : 0x00f0ff;

    // Glowing core sphere
    const sphereGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 3.5,
      roughness: 0.1,
    });
    const core = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(core);

    // Outer rotating beacon ring
    const ringGeo = new THREE.TorusGeometry(1.6, 0.12, 8, 24);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: colorHex,
      emissiveIntensity: 2.0,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    group.add(ring);

    const light = new THREE.PointLight(colorHex, 2.5, 15);
    group.add(light);

    this.scene.add(group);

    this.lootItems.push({
      type,
      mesh: group,
      position: pos.clone(),
      velocity: new THREE.Vector3(),
      lifetime: 0,
    });
  }

  // -------------------------------------------------------------
  // Collision Detection with Jet
  // -------------------------------------------------------------
  public checkCollisions(
    jetPosition: THREE.Vector3,
    onCollision: () => void
  ): boolean {
    if (this.hitCooldown > 0) return false;

    const JET_BOUNDING_RADIUS = 3.2;

    for (let i = 0; i < this.asteroids.length; i++) {
      const ast = this.asteroids[i];
      const dist = jetPosition.distanceTo(ast.position);

      if (dist < ast.radius + JET_BOUNDING_RADIUS) {
        this.hitCooldown = 1.5;
        this.playImpactSound();
        onCollision();
        return true;
      }
    }

    return false;
  }

  // -------------------------------------------------------------
  // Loot Pickup & Magnetic Tractor Beam Check (Safeguard 2)
  // -------------------------------------------------------------
  public updateLootAndCollisions(
    jetPosition: THREE.Vector3,
    dt: number,
    onCollect: (type: LootType) => void
  ): void {
    const TRACTOR_RADIUS = 25.0; // Magnetic tractor beam range (25m)
    const PICKUP_RADIUS = 4.5;   // Instant collection range (4.5m)

    for (let i = this.lootItems.length - 1; i >= 0; i--) {
      const loot = this.lootItems[i];
      loot.lifetime += dt;

      // Despawn loot after 35 seconds
      if (loot.lifetime > 35.0) {
        this.scene.remove(loot.mesh);
        this.lootItems.splice(i, 1);
        continue;
      }

      // Rotate visual beacon rings
      loot.mesh.rotation.y += 2.5 * dt;
      loot.mesh.rotation.x += 1.8 * dt;

      const dist = jetPosition.distanceTo(loot.position);

      // Safeguard 2: Magnetic tractor beam smoothly pulls orb toward jet
      if (dist < TRACTOR_RADIUS) {
        const pullDir = jetPosition.clone().sub(loot.position).normalize();
        const pullStrength = 180.0 * (1.0 - dist / TRACTOR_RADIUS) + 60.0;
        loot.velocity.addScaledVector(pullDir, pullStrength * dt);
        loot.position.addScaledVector(loot.velocity, dt);
        loot.mesh.position.copy(loot.position);
      }

      // Collect loot item
      if (dist < PICKUP_RADIUS) {
        this.playLootPickupSound(loot.type === 'HEART');
        onCollect(loot.type);

        this.scene.remove(loot.mesh);
        this.lootItems.splice(i, 1);
      }
    }
  }

  // -------------------------------------------------------------
  // Update Loop (Tumble Asteroids & Hit Flash Decay)
  // -------------------------------------------------------------
  public update(dt: number): void {
    if (this.hitCooldown > 0) {
      this.hitCooldown = Math.max(0, this.hitCooldown - dt);
    }

    for (let i = 0; i < this.asteroids.length; i++) {
      const ast = this.asteroids[i];
      ast.mesh.rotation.x += ast.rotationSpeed.x * dt;
      ast.mesh.rotation.y += ast.rotationSpeed.y * dt;
      ast.mesh.rotation.z += ast.rotationSpeed.z * dt;

      // Hit flash decay
      if (ast.flashTimer > 0) {
        ast.flashTimer = Math.max(0, ast.flashTimer - dt);
        if (ast.flashTimer === 0) {
          const mat = ast.mesh.material as THREE.MeshStandardMaterial;
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
        }
      }
    }
  }
}
