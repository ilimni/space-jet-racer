import * as THREE from 'three';

export type AIRivalArchetype = 'SPEEDER' | 'ACE' | 'BRAWLER';

export interface AIRivalConfig {
  name: string;
  hullColor: number;
  accentColor: number;
  glowColor: number;
  baseSpeed: number;
  archetype?: AIRivalArchetype;
}

export class AIRival {
  public mesh: THREE.Group;
  public name: string;
  public currentHearts: number = 10;
  public readonly MAX_HEARTS: number = 10;
  public archetype: AIRivalArchetype;

  // Waypoint & Race State
  private waypoints: THREE.Vector3[];
  private currentWaypointIndex: number = 0;
  public gatesCleared: number = 0;
  public isFinished: boolean = false;
  private currentSpeed: number;
  private targetSpeed: number;

  // Nitro Boost & Thruster Visuals
  public isBoosting: boolean = false;
  private boostTimer: number = 0;
  private boostCooldown: number = 4.0 + Math.random() * 4.0;
  private readonly BOOST_DURATION: number = 2.0;
  private boostMultiplier: number = 1.4;
  private thrusterGlows: THREE.Mesh[] = [];
  private glowMat: THREE.MeshStandardMaterial | null = null;

  // Archetype Random Phases & State
  private readonly phaseShiftX: number;
  private readonly phaseShiftY: number;
  private burstQueue: number = 0;
  private burstTimer: number = 0;
  private playerDistance: number = 999;

  // 3D Floating Health Bar
  private healthBarGroup: THREE.Group;
  private healthSegments: THREE.Mesh[] = [];
  private readonly NUM_SEGMENTS = 10;

  // Spin-out & Retaliation State
  public isSpinningOut: boolean = false;
  private spinTimer: number = 0;
  private fireCooldown: number = 0;
  private hitFlashTimer: number = 0;

  // Pre-allocated vectors & quaternions
  private readonly targetDir = new THREE.Vector3();
  private readonly targetWithOffset = new THREE.Vector3();
  private readonly desiredQuat = new THREE.Quaternion();
  private readonly forwardDir = new THREE.Vector3(0, 0, -1);

  public config: AIRivalConfig;

  constructor(scene: THREE.Scene, waypoints: THREE.Vector3[], config: AIRivalConfig, startIndex: number = 0) {
    this.config = config;
    this.name = config.name;
    this.waypoints = waypoints;
    this.currentWaypointIndex = Math.min(startIndex, Math.max(0, waypoints.length - 1));
    this.gatesCleared = this.currentWaypointIndex;
    this.currentSpeed = config.baseSpeed;
    this.targetSpeed = config.baseSpeed;

    // Determine Archetype
    if (config.archetype) {
      this.archetype = config.archetype;
    } else if (config.name.includes('Solar')) {
      this.archetype = 'SPEEDER';
    } else if (config.name.includes('Phantom')) {
      this.archetype = 'ACE';
    } else {
      this.archetype = 'BRAWLER';
    }

    // Configure Boost Multiplier based on archetype
    if (this.archetype === 'SPEEDER') {
      this.boostMultiplier = 1.4; // 1.4x nitro bursts on straights
    } else if (this.archetype === 'ACE') {
      this.boostMultiplier = 1.5; // Overtaking kick
    } else {
      this.boostMultiplier = 1.35; // Brawler burst
    }

    // Unique random phases for sinusoidal weaving
    this.phaseShiftX = Math.random() * Math.PI * 2;
    this.phaseShiftY = Math.random() * Math.PI * 2;

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
    this.glowMat = glowMat;

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
    this.thrusterGlows = [];
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
      this.thrusterGlows.push(glow);
    });
  }

  // -------------------------------------------------------------
  // Thruster Nitro Visual Effects
  // -------------------------------------------------------------
  private updateThrusterVisuals(isBoosting: boolean): void {
    const scaleZ = isBoosting ? 2.5 : 1.0;
    const scaleXY = isBoosting ? 1.35 : 1.0;
    for (const glow of this.thrusterGlows) {
      glow.scale.set(scaleXY, scaleXY, scaleZ);
    }
    if (this.glowMat) {
      this.glowMat.emissiveIntensity = isBoosting ? 5.5 : 2.2;
    }
  }

  // -------------------------------------------------------------
  // Archetype Lateral & Vertical Flight Offsets
  // -------------------------------------------------------------
  private getPersonalityOffset(elapsedTime: number): THREE.Vector3 {
    const localOffset = new THREE.Vector3();

    if (this.archetype === 'SPEEDER') {
      // Solar-02: Hugs inside corners tightly (lateral offset -6.0m, low center)
      localOffset.set(-6.0, -1.2, 0);
    } else if (this.archetype === 'ACE') {
      // Phantom-01: Holds high altitude (+5m Y), maintains smooth sinusoidal swoops
      localOffset.set(
        Math.sin(elapsedTime * 1.3) * 2.8,
        5.0 + Math.sin(elapsedTime * 1.8) * 1.5,
        0
      );
    } else {
      // Viper-03: Erratic lateral dodging (sinusoidal weave with random phase shifts)
      // When tailgating player (< 30m), tighten lateral weaving to lock onto player slipstream
      if (this.playerDistance < 30.0) {
        localOffset.set(
          Math.sin(elapsedTime * 4.0 + this.phaseShiftX) * 1.8,
          Math.cos(elapsedTime * 3.0 + this.phaseShiftY) * 1.0,
          0
        );
      } else {
        localOffset.set(
          Math.sin(elapsedTime * 3.2 + this.phaseShiftX) * 6.5 + Math.sin(elapsedTime * 5.5) * 1.8,
          Math.cos(elapsedTime * 2.2 + this.phaseShiftY) * 2.5,
          0
        );
      }
    }

    // Rotate offset to world space aligned with rival orientation
    return localOffset.applyQuaternion(this.mesh.quaternion);
  }

  // -------------------------------------------------------------
  // 3D Hovering Billboarded Health Bar
  // -------------------------------------------------------------
  private buildHealthBar(): THREE.Group {
    const group = new THREE.Group();
    group.position.set(0, 2.2, 0);

    const segmentWidth = 0.26;
    const segmentHeight = 0.09;
    const segmentDepth = 0.04;
    const spacing = 0.06;
    const totalWidth = this.NUM_SEGMENTS * segmentWidth + (this.NUM_SEGMENTS - 1) * spacing;
    const startX = -totalWidth / 2 + segmentWidth / 2;

    const segmentGeo = new THREE.BoxGeometry(segmentWidth, segmentHeight, segmentDepth);

    const backGeo = new THREE.BoxGeometry(totalWidth + 0.15, segmentHeight + 0.06, segmentDepth * 0.8);
    const backMat = new THREE.MeshBasicMaterial({ color: 0x050a14, transparent: true, opacity: 0.85 });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -0.01;
    group.add(backMesh);

    for (let i = 0; i < this.NUM_SEGMENTS; i++) {
      const segMat = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
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
    for (const seg of this.healthSegments) {
      (seg.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
    }
  }

  // -------------------------------------------------------------
  // Archetype Combat Logic & Retaliation
  // -------------------------------------------------------------
  public checkRetaliation(
    playerPos: THREE.Vector3,
    onFire: (spawnPos: THREE.Vector3, forwardDir: THREE.Vector3, quat: THREE.Quaternion) => void,
    dt: number
  ): void {
    if (this.isSpinningOut || this.isFinished) return;

    // Handle queued burst bolts for Viper-03 (Double-Bolt Burst)
    if (this.burstQueue > 0) {
      this.burstTimer -= dt;
      if (this.burstTimer <= 0) {
        this.burstQueue--;
        const rightSpawn = this.mesh.position.clone().add(
          new THREE.Vector3(0.8, 0, -2.4).applyQuaternion(this.mesh.quaternion)
        );
        const forward = this.forwardDir.clone().applyQuaternion(this.mesh.quaternion).normalize();
        onFire(rightSpawn, forward, this.mesh.quaternion);
      }
    }

    if (this.fireCooldown > 0) {
      this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    }

    const dist = this.mesh.position.distanceTo(playerPos);
    this.playerDistance = dist;

    // Check weapon range & cooldown
    const maxEngagementRange = this.archetype === 'ACE' ? 140.0 : 120.0;
    if (dist < maxEngagementRange && this.fireCooldown <= 0) {
      const toPlayer = playerPos.clone().sub(this.mesh.position).normalize();
      const forward = this.forwardDir.clone().applyQuaternion(this.mesh.quaternion).normalize();
      const dot = forward.dot(toPlayer);

      // Archetype 2: Phantom-01 fires precision plasma bolts only when locked on (tighter lock cone: cos(13 deg) ~ 0.975)
      const lockThreshold = this.archetype === 'ACE' ? 0.975 : (this.archetype === 'BRAWLER' ? 0.92 : 0.94);

      if (dot >= lockThreshold) {
        if (this.archetype === 'BRAWLER') {
          // Viper-03: Rapid double-bolt burst!
          this.fireCooldown = 1.1; // Fast reload
          const leftSpawn = this.mesh.position.clone().add(
            new THREE.Vector3(-0.8, 0, -2.4).applyQuaternion(this.mesh.quaternion)
          );
          onFire(leftSpawn, forward, this.mesh.quaternion);
          // Queue second bolt 0.08s later from right wing
          this.burstQueue = 1;
          this.burstTimer = 0.08;
        } else if (this.archetype === 'ACE') {
          // Phantom-01: Precision center plasma bolt with high velocity
          this.fireCooldown = 1.4;
          const spawnPos = this.mesh.position.clone().add(
            new THREE.Vector3(0, 0, -2.6).applyQuaternion(this.mesh.quaternion)
          );
          // Aim directly along toPlayer vector for pinpoint accuracy
          const precisionQuat = new THREE.Quaternion().setFromUnitVectors(this.forwardDir, toPlayer);
          onFire(spawnPos, toPlayer, precisionQuat);
        } else {
          // Solar-02: Standard retaliation burst
          this.fireCooldown = 1.35;
          const spawnPos = this.mesh.position.clone().add(
            new THREE.Vector3(0, 0, -2.4).applyQuaternion(this.mesh.quaternion)
          );
          onFire(spawnPos, forward, this.mesh.quaternion);
        }
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

  public getCourseScore(): number {
    if (this.isFinished) {
      return this.waypoints.length * 10000;
    }
    if (this.waypoints.length === 0) return 0;
    const target = this.waypoints[this.currentWaypointIndex];
    const dist = this.mesh.position.distanceTo(target);
    return this.gatesCleared * 10000 - dist;
  }

  private updateHealthBarVisuals(): void {
    const activeCount = this.currentHearts;
    for (let i = 0; i < this.NUM_SEGMENTS; i++) {
      const seg = this.healthSegments[i];
      const mat = seg.material as THREE.MeshBasicMaterial;

      if (i < activeCount) {
        seg.visible = true;
        if (activeCount <= 3) {
          mat.color.setHex(0xff1a75);
        } else if (activeCount <= 6) {
          mat.color.setHex(0xffaa00);
        } else {
          mat.color.setHex(0x00ff88);
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
    this.gatesCleared = waypointIndex;
    this.isFinished = false;
    this.isBoosting = false;
    this.boostTimer = 0;
    this.boostCooldown = 4.0 + Math.random() * 4.0;
    this.currentHearts = this.MAX_HEARTS;
    this.isSpinningOut = false;
    this.spinTimer = 0;
    this.burstQueue = 0;
    this.burstTimer = 0;
    this.currentSpeed = this.config.baseSpeed;
    this.targetSpeed = this.config.baseSpeed;
    this.updateHealthBarVisuals();
    this.updateThrusterVisuals(false);
  }

  private triggerSpinOut(): void {
    this.isSpinningOut = true;
    this.isBoosting = false;
    this.updateThrusterVisuals(false);
    this.spinTimer = 2.2;
    this.currentSpeed = 10.0;
    this.burstQueue = 0;
  }

  // -------------------------------------------------------------
  // AI Racing & Update Loop
  // -------------------------------------------------------------
  public update(
    dt: number,
    camera: THREE.PerspectiveCamera,
    playerScore: number = 0,
    elapsedTime: number = 0,
    playerPos?: THREE.Vector3
  ): void {
    this.healthBarGroup.quaternion.copy(camera.quaternion);

    if (playerPos) {
      this.playerDistance = this.mesh.position.distanceTo(playerPos);
    }

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
        this.isSpinningOut = false;
        this.currentHearts = this.MAX_HEARTS;
        this.updateHealthBarVisuals();
        this.currentSpeed = this.targetSpeed;

        this.currentWaypointIndex = Math.max(0, this.currentWaypointIndex - 1);
        this.gatesCleared = this.currentWaypointIndex;
        const rewindTarget = this.waypoints[this.currentWaypointIndex];
        if (rewindTarget) {
          this.mesh.position.copy(rewindTarget);
        }
      }
      return;
    }

    // Victory Cruise upon crossing Gate 15
    if (this.isFinished) {
      this.currentSpeed = THREE.MathUtils.lerp(this.currentSpeed, 18.0, dt * 2.0);
      this.mesh.translateZ(-this.currentSpeed * dt);
      this.updateThrusterVisuals(false);
      return;
    }

    // 2. Waypoint Navigation with Archetype Offsets
    if (this.waypoints.length === 0) return;

    const targetPos = this.waypoints[this.currentWaypointIndex];
    const lateralOffset = this.getPersonalityOffset(elapsedTime);
    this.targetWithOffset.copy(targetPos).add(lateralOffset);

    this.targetDir.copy(this.targetWithOffset).sub(this.mesh.position);
    const distToWaypoint = this.targetDir.length();

    // Checkpoint advance check (radius 28.0m)
    if (distToWaypoint < 28.0) {
      this.gatesCleared++;
      if (this.currentWaypointIndex >= this.waypoints.length - 1) {
        this.isFinished = true;
        this.isBoosting = false;
        this.updateThrusterVisuals(false);
        return;
      } else {
        this.currentWaypointIndex++;
      }
    }

    this.targetDir.normalize();

    // 3. Dynamic Rubber-Banding Speed Calculation (Capped at 1.15x)
    const rivalScore = this.getCourseScore();
    const scoreDiff = rivalScore - playerScore;

    let rubberBandFactor = 1.0;
    if (scoreDiff < -40) {
      // Trailing rivals draft up smoothly without rocket-launching past (Cap at 1.15x down from 1.35x)
      rubberBandFactor = Math.min(1.15, 1.0 + (Math.abs(scoreDiff) - 40) / 250);
    } else if (scoreDiff > 80) {
      // Leading by > 80m: scale back slightly to 0.95x to keep race tight
      rubberBandFactor = 0.95;
    }

    // 4. Heading & Corner Angle Calculation
    const forwardVec = this.forwardDir.clone().applyQuaternion(this.mesh.quaternion).normalize();
    const headingDot = forwardVec.dot(this.targetDir);
    // Heading dot for straights: headingDot >= 0.96 (< 16 degrees deviation)
    const isStraight = headingDot >= 0.96;
    // Turn angle > 30 degrees: cos(30 deg) = 0.866
    const isSharpTurn = headingDot < 0.866;

    // Archetype Specific Corner Braking & Boost Logic
    let cornerBrakeFactor = 1.0;
    if (this.archetype === 'SPEEDER' && isSharpTurn) {
      // Solar-02: Brakes slightly harder on turns > 30 degrees
      cornerBrakeFactor = 0.78;
    } else if (isSharpTurn) {
      cornerBrakeFactor = 0.88;
    }

    // Tailgate surge for Viper-03 when close behind player (< 30m)
    let tailgateMultiplier = 1.0;
    if (this.archetype === 'BRAWLER' && this.playerDistance < 30.0 && scoreDiff < 0) {
      tailgateMultiplier = 1.12; // Aggressive surge right on player's tail
    }

    // Boost decision per Archetype
    if (this.isBoosting) {
      this.boostTimer -= dt;
      if (this.boostTimer <= 0) {
        this.isBoosting = false;
        this.boostCooldown = (this.archetype === 'SPEEDER' ? 5.5 : 7.0) + Math.random() * 3.5;
        this.updateThrusterVisuals(false);
      }
    } else {
      if (this.boostCooldown > 0) {
        this.boostCooldown = Math.max(0, this.boostCooldown - dt);
      } else if (!this.isSpinningOut) {
        let shouldTriggerBoost = false;

        if (this.archetype === 'SPEEDER') {
          // Solar-02: Engages 1.4x nitro bursts on straights
          shouldTriggerBoost = isStraight;
        } else if (this.archetype === 'ACE') {
          // Phantom-01: Uses boost strictly for overtaking when trailing behind player or rivals
          shouldTriggerBoost = scoreDiff < -10 && headingDot >= 0.91;
        } else {
          // Viper-03: Opportunistic boost when locked in or closing distance
          shouldTriggerBoost = headingDot >= 0.91 && (this.playerDistance < 45 || scoreDiff < -20);
        }

        if (shouldTriggerBoost) {
          this.isBoosting = true;
          this.boostTimer = this.BOOST_DURATION;
          this.updateThrusterVisuals(true);
        }
      }
    }

    const currentBoostMult = this.isBoosting ? this.boostMultiplier : 1.0;
    this.targetSpeed =
      this.config.baseSpeed *
      rubberBandFactor *
      currentBoostMult *
      cornerBrakeFactor *
      tailgateMultiplier;

    this.currentSpeed = THREE.MathUtils.lerp(this.currentSpeed, this.targetSpeed, dt * 3.5);

    // Smoothly rotate toward target direction
    this.desiredQuat.setFromUnitVectors(this.forwardDir, this.targetDir);
    this.mesh.quaternion.slerp(this.desiredQuat, 1.0 - Math.exp(-3.8 * dt));

    // Move forward along local -Z
    this.mesh.translateZ(-this.currentSpeed * dt);
  }
}

