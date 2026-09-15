import * as THREE from 'three';

export interface AIRivalConfig {
  name: string;
  hullColor: number;
  accentColor: number;
  glowColor: number;
  baseSpeed: number;
}

export class AIRival {
  public mesh: THREE.Group;
  public name: string;
  public currentHearts: number = 10;
  public readonly MAX_HEARTS: number = 10;

  private waypoints: THREE.Vector3[];
  private currentWaypointIndex: number = 0;
  private currentSpeed: number;
  private targetSpeed: number;

  // 3D Floating Health Bar
  private healthBarGroup: THREE.Group;
  private healthSegments: THREE.Mesh[] = [];
  private readonly NUM_SEGMENTS = 10;

  // Spin-out state
  public isSpinningOut: boolean = false;
  private spinTimer: number = 0;
  private fireCooldown: number = 0;
  private hitFlashTimer: number = 0;

  // Pre-allocated vectors & quaternions
  private readonly targetDir = new THREE.Vector3();
  private readonly desiredQuat = new THREE.Quaternion();
  private readonly forwardDir = new THREE.Vector3(0, 0, -1);

  public config: AIRivalConfig;

  constructor(scene: THREE.Scene, waypoints: THREE.Vector3[], config: AIRivalConfig, startIndex: number = 0) {
    this.config = config;
    this.name = config.name;
    this.waypoints = waypoints;
    this.currentWaypointIndex = Math.min(startIndex, waypoints.length - 1);
    this.currentSpeed = config.baseSpeed;
    this.targetSpeed = config.baseSpeed;

    this.mesh = new THREE.Group();
    this.mesh.name = `AIRival_${config.name}`;

    // 1. Build Rival Jet Mesh
    this.buildRivalModel(config);

    // 2. Build 3D Hovering Billboarded Health Bar
    this.healthBarGroup = this.buildHealthBar();
    this.mesh.add(this.healthBarGroup);

    // Initial positioning at starting waypoint
    if (waypoints.length > 0) {
      const initialPos = waypoints[this.currentWaypointIndex].clone();
      // Add slight offset so rivals don't spawn exactly on top of each other
      const angle = Math.random() * Math.PI * 2;
      initialPos.x += Math.cos(angle) * 8.0;
      initialPos.y += Math.sin(angle) * 4.0;
      this.mesh.position.copy(initialPos);
    }

    scene.add(this.mesh);
  }

  private buildRivalModel(config: AIRivalConfig): void {
    const hullMat = new THREE.MeshStandardMaterial({
      color: config.hullColor,
      metalness: 0.25,
      roughness: 0.4,
      flatShading: true,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: config.accentColor,
      metalness: 0.3,
      roughness: 0.3,
      flatShading: true,
    });

    const glowMat = new THREE.MeshStandardMaterial({
      color: config.glowColor,
      emissive: config.glowColor,
      emissiveIntensity: 2.2,
      roughness: 0.2,
    });

    // Tapered Fuselage (pointing along -Z)
    const fuselageGeo = new THREE.CylinderGeometry(0.18, 0.75, 4.2, 7);
    fuselageGeo.rotateX(-Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeo, hullMat);
    fuselage.scale.set(1.1, 0.65, 1.0);
    this.mesh.add(fuselage);

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.2, 1.2, 7);
    noseGeo.rotateX(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, accentMat);
    nose.position.set(0, 0, -2.7);
    this.mesh.add(nose);

    // Swept Delta Wings
    const wingGeo = new THREE.BoxGeometry(5.4, 0.08, 1.5);
    const wings = new THREE.Mesh(wingGeo, hullMat);
    wings.position.set(0, -0.05, 0.2);
    this.mesh.add(wings);

    // Wingtip Emissive Accents
    [-2.7, 2.7].forEach((xPos) => {
      const tipGeo = new THREE.BoxGeometry(0.12, 0.35, 0.8);
      const tip = new THREE.Mesh(tipGeo, glowMat);
      tip.position.set(xPos, 0.05, 0.3);
      this.mesh.add(tip);
    });

    // Twin Engines with Glow Core
    [-0.55, 0.55].forEach((xPos) => {
      const nacelleGeo = new THREE.CylinderGeometry(0.28, 0.32, 1.5, 10);
      nacelleGeo.rotateX(-Math.PI / 2);
      const nacelle = new THREE.Mesh(nacelleGeo, hullMat);
      nacelle.position.set(xPos, 0, 1.2);
      this.mesh.add(nacelle);

      const glowGeo = new THREE.CylinderGeometry(0.2, 0.1, 0.25, 10);
      glowGeo.rotateX(-Math.PI / 2);
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.set(xPos, 0, 2.05);
      this.mesh.add(glow);
    });
  }

  // -------------------------------------------------------------
  // 3D Hovering Billboarded Health Bar
  // -------------------------------------------------------------
  private buildHealthBar(): THREE.Group {
    const group = new THREE.Group();
    group.position.set(0, 2.2, 0); // Hovering above ship

    const segmentWidth = 0.26;
    const segmentHeight = 0.09;
    const segmentDepth = 0.04;
    const spacing = 0.06;
    const totalWidth = this.NUM_SEGMENTS * segmentWidth + (this.NUM_SEGMENTS - 1) * spacing;
    const startX = -totalWidth / 2 + segmentWidth / 2;

    const segmentGeo = new THREE.BoxGeometry(segmentWidth, segmentHeight, segmentDepth);

    // Background track
    const backGeo = new THREE.BoxGeometry(totalWidth + 0.15, segmentHeight + 0.06, segmentDepth * 0.8);
    const backMat = new THREE.MeshBasicMaterial({ color: 0x050a14, transparent: true, opacity: 0.85 });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -0.01;
    group.add(backMesh);

    for (let i = 0; i < this.NUM_SEGMENTS; i++) {
      const segMat = new THREE.MeshBasicMaterial({
        color: 0x00ff88, // Healthy vibrant green/cyan
      });
      const segMesh = new THREE.Mesh(segmentGeo, segMat);
      segMesh.position.set(startX + i * (segmentWidth + spacing), 0, 0);
      this.healthSegments.push(segMesh);
      group.add(segMesh);
    }

    return group;
  }

  public takeDamage(hearts: number): void {
    if (this.isSpinningOut) return;

    this.currentHearts = Math.max(0, this.currentHearts - hearts);
    this.updateHealthBarVisuals();
    this.flashDamage();

    if (this.currentHearts <= 0) {
      this.triggerSpinOut();
    }
  }

  public flashDamage(): void {
    this.hitFlashTimer = 0.15;
    // Flash segments white
    for (const seg of this.healthSegments) {
      (seg.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
    }
  }

  public checkRetaliation(
    playerPos: THREE.Vector3,
    onFire: (spawnPos: THREE.Vector3, forwardDir: THREE.Vector3, quat: THREE.Quaternion) => void,
    dt: number
  ): void {
    if (this.isSpinningOut) return;

    if (this.fireCooldown > 0) {
      this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    }

    const dist = this.mesh.position.distanceTo(playerPos);
    if (dist < 120.0 && this.fireCooldown <= 0) {
      const toPlayer = playerPos.clone().sub(this.mesh.position).normalize();
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.mesh.quaternion).normalize();
      const dot = forward.dot(toPlayer);

      // 20-degree cone check: cos(20 deg) ~ 0.94
      if (dot >= 0.94) {
        this.fireCooldown = 1.25; // Retaliation burst interval
        const spawnPos = this.mesh.position.clone().add(
          new THREE.Vector3(0, 0, -2.4).applyQuaternion(this.mesh.quaternion)
        );
        onFire(spawnPos, forward, this.mesh.quaternion);
      }
    }
  }

  public getCurrentWaypointIndex(): number {
    return this.currentWaypointIndex;
  }

  public getDistanceToNextWaypoint(): number {
    if (this.waypoints.length === 0) return 0;
    const target = this.waypoints[this.currentWaypointIndex];
    return this.mesh.position.distanceTo(target);
  }

  private updateHealthBarVisuals(): void {
    const activeCount = this.currentHearts;
    for (let i = 0; i < this.NUM_SEGMENTS; i++) {
      const seg = this.healthSegments[i];
      const mat = seg.material as THREE.MeshBasicMaterial;

      if (i < activeCount) {
        seg.visible = true;
        if (activeCount <= 3) {
          mat.color.setHex(0xff1a75); // Critical red
        } else if (activeCount <= 6) {
          mat.color.setHex(0xffaa00); // Warning yellow
        } else {
          mat.color.setHex(0x00ff88); // Healthy green
        }
      } else {
        seg.visible = false;
      }
    }
  }

  public resetToPosition(pos: THREE.Vector3, quat?: THREE.Quaternion, waypointIndex: number = 0): void {
    this.mesh.position.copy(pos);
    if (quat) {
      this.mesh.quaternion.copy(quat);
    } else {
      this.mesh.quaternion.identity();
    }
    this.currentWaypointIndex = waypointIndex;
    this.currentHearts = this.MAX_HEARTS;
    this.isSpinningOut = false;
    this.spinTimer = 0;
    this.currentSpeed = this.targetSpeed;
    this.updateHealthBarVisuals();
  }

  private triggerSpinOut(): void {
    this.isSpinningOut = true;
    this.spinTimer = 2.2;
    this.currentSpeed = 10.0;
  }

  // -------------------------------------------------------------
  // AI Racing & Update Loop
  // -------------------------------------------------------------
  public update(dt: number, camera: THREE.PerspectiveCamera): void {
    // Technical Safeguard 3: Orient floating health bar to camera quaternion so it stays flat and readable
    this.healthBarGroup.quaternion.copy(camera.quaternion);

    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer = Math.max(0, this.hitFlashTimer - dt);
      if (this.hitFlashTimer === 0) {
        this.updateHealthBarVisuals();
      }
    }

    // 1. Handle Spin-Out State
    if (this.isSpinningOut) {
      this.spinTimer -= dt;
      this.mesh.rotation.y += 14.0 * dt;
      this.mesh.rotation.z += 8.0 * dt;

      if (this.spinTimer <= 0) {
        // Recovery: fall back 100 meters behind the pack and restart with full hearts
        this.isSpinningOut = false;
        this.currentHearts = this.MAX_HEARTS;
        this.updateHealthBarVisuals();
        this.currentSpeed = this.targetSpeed;

        // Fall back 1-2 waypoints (~100m)
        this.currentWaypointIndex = Math.max(0, this.currentWaypointIndex - 1);
        const rewindTarget = this.waypoints[this.currentWaypointIndex];
        if (rewindTarget) {
          this.mesh.position.copy(rewindTarget);
        }
      }
      return;
    }

    // 2. Waypoint Navigation
    if (this.waypoints.length === 0) return;

    const targetPos = this.waypoints[this.currentWaypointIndex];
    this.targetDir.copy(targetPos).sub(this.mesh.position);
    const distToWaypoint = this.targetDir.length();

    if (distToWaypoint < 20.0) {
      // Advance to next waypoint
      this.currentWaypointIndex = (this.currentWaypointIndex + 1) % this.waypoints.length;
    }

    this.targetDir.normalize();

    // Smoothly rotate toward target direction
    this.desiredQuat.setFromUnitVectors(this.forwardDir, this.targetDir);
    this.mesh.quaternion.slerp(this.desiredQuat, 1.0 - Math.exp(-3.5 * dt));

    // Move forward along local -Z
    this.mesh.translateZ(-this.currentSpeed * dt);
  }
}
