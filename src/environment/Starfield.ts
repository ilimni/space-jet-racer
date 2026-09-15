import * as THREE from 'three';

export class Starfield {
  public scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  // 1. Celestial Infinite Starfield (Anchored to camera)
  private celestialMesh: THREE.Points;

  // 2. Local Warp Dust & Speed Streaks
  private streakMesh: THREE.LineSegments;
  private streakGeometry: THREE.BufferGeometry;
  private streakPositions: Float32Array;
  private streakParticles: { x: number; y: number; z: number; speed: number }[] = [];

  private readonly NUM_CELESTIAL = 2500;
  private readonly NUM_STREAKS = 1200;
  private readonly BOUNDS_X = 150;
  private readonly BOUNDS_Y = 150;
  private readonly BOUNDS_Z = 250;

  // Reusable vectors to prevent GC
  private readonly forwardFlightVec = new THREE.Vector3();

  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene;
    this.camera = camera;

    // Build Celestial Sphere
    this.celestialMesh = this.buildCelestialStarfield();
    this.scene.add(this.celestialMesh);

    // Build Local Warp Dust / Streaks
    const streakData = this.buildWarpDust();
    this.streakMesh = streakData.mesh;
    this.streakGeometry = streakData.geometry;
    this.streakPositions = streakData.positions;
    this.streakParticles = streakData.particles;
    this.scene.add(this.streakMesh);
  }

  // -------------------------------------------------------------
  // 1. Celestial Starfield (Locked to camera position)
  // -------------------------------------------------------------
  private buildCelestialStarfield(): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.NUM_CELESTIAL * 3);
    const colors = new Float32Array(this.NUM_CELESTIAL * 3);

    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xa5f3fc),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xfef08a),
      new THREE.Color(0xf472b6),
    ];

    for (let i = 0; i < this.NUM_CELESTIAL; i++) {
      const i3 = i * 3;
      // Distribute evenly on spherical shell radius 1800 to 2800
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1800 + Math.random() * 1000;

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      // Subtle brightness variation
      const brightness = 0.7 + Math.random() * 0.3;
      colors[i3] = color.r * brightness;
      colors[i3 + 1] = color.g * brightness;
      colors[i3 + 2] = color.b * brightness;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
    });

    return new THREE.Points(geometry, material);
  }

  // -------------------------------------------------------------
  // 2. Warp Dust & Hyperspace Speed Streaks (LineSegments)
  // -------------------------------------------------------------
  private buildWarpDust() {
    const geometry = new THREE.BufferGeometry();
    // Each streak is a line segment with 2 vertices = 6 floats
    const positions = new Float32Array(this.NUM_STREAKS * 6);
    const colors = new Float32Array(this.NUM_STREAKS * 6);
    const particles: { x: number; y: number; z: number; speed: number }[] = [];

    const streakPalette = [
      new THREE.Color(0x00f0ff),
      new THREE.Color(0xffffff),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x818cf8),
    ];

    for (let i = 0; i < this.NUM_STREAKS; i++) {
      const px = (Math.random() - 0.5) * this.BOUNDS_X;
      const py = (Math.random() - 0.5) * this.BOUNDS_Y;
      const pz = (Math.random() - 0.5) * this.BOUNDS_Z;
      const speed = 0.8 + Math.random() * 0.6;
      particles.push({ x: px, y: py, z: pz, speed });

      const i6 = i * 6;
      // Head
      positions[i6] = px;
      positions[i6 + 1] = py;
      positions[i6 + 2] = pz;
      // Tail
      positions[i6 + 3] = px;
      positions[i6 + 4] = py;
      positions[i6 + 5] = pz + 1.0;

      const col = streakPalette[Math.floor(Math.random() * streakPalette.length)];
      // Head bright
      colors[i6] = col.r;
      colors[i6 + 1] = col.g;
      colors[i6 + 2] = col.b;
      // Tail fading
      colors[i6 + 3] = col.r * 0.3;
      colors[i6 + 4] = col.g * 0.3;
      colors[i6 + 5] = col.b * 0.3;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      linewidth: 1,
    });

    const mesh = new THREE.LineSegments(geometry, material);
    return { mesh, geometry, positions, colors, particles };
  }

  // -------------------------------------------------------------
  // Update Loop
  // -------------------------------------------------------------
  public update(jetPosition: THREE.Vector3, jetQuaternion: THREE.Quaternion, isBoosting: boolean, dt: number): void {
    // 1. Fix Celestial Starfield Disappearance Bug:
    // Lock celestial background sphere to camera.position so player never outruns it
    this.celestialMesh.position.copy(this.camera.position);

    // 2. Calculate Jet Forward Flight Vector
    this.forwardFlightVec.set(0, 0, -1).applyQuaternion(jetQuaternion).normalize();

    // 3. Update Local Warp Dust & Dynamic Streak Elongation
    const streakLength = isBoosting ? 12.0 : 1.4;
    const speedMult = isBoosting ? 2.6 : 1.0;

    const halfX = this.BOUNDS_X / 2;
    const halfY = this.BOUNDS_Y / 2;
    const halfZ = this.BOUNDS_Z / 2;

    for (let i = 0; i < this.NUM_STREAKS; i++) {
      const p = this.streakParticles[i];
      const i6 = i * 6;

      // Stream particles backwards relative to flight direction
      p.x -= this.forwardFlightVec.x * p.speed * 45.0 * speedMult * dt;
      p.y -= this.forwardFlightVec.y * p.speed * 45.0 * speedMult * dt;
      p.z -= this.forwardFlightVec.z * p.speed * 45.0 * speedMult * dt;

      // Wrap particles within local bounding box around the jet
      const dx = p.x - jetPosition.x;
      const dy = p.y - jetPosition.y;
      const dz = p.z - jetPosition.z;

      if (dx > halfX) p.x -= this.BOUNDS_X;
      else if (dx < -halfX) p.x += this.BOUNDS_X;

      if (dy > halfY) p.y -= this.BOUNDS_Y;
      else if (dy < -halfY) p.y += this.BOUNDS_Y;

      if (dz > halfZ) p.z -= this.BOUNDS_Z;
      else if (dz < -halfZ) p.z += this.BOUNDS_Z;

      // Update Head position
      this.streakPositions[i6] = p.x;
      this.streakPositions[i6 + 1] = p.y;
      this.streakPositions[i6 + 2] = p.z;

      // Update Tail position (stretched along opposite of flight vector)
      this.streakPositions[i6 + 3] = p.x + this.forwardFlightVec.x * streakLength;
      this.streakPositions[i6 + 4] = p.y + this.forwardFlightVec.y * streakLength;
      this.streakPositions[i6 + 5] = p.z + this.forwardFlightVec.z * streakLength;
    }

    this.streakGeometry.attributes.position.needsUpdate = true;
  }
}
