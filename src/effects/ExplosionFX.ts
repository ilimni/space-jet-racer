import * as THREE from 'three';

interface ExplosionInstance {
  points: THREE.Points;
  velocities: Float32Array;
  lifetime: number;
  maxLifetime: number;
}

export class ExplosionFX {
  private scene: THREE.Scene;
  private activeExplosions: ExplosionInstance[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  public trigger(position: THREE.Vector3, colorHex: number = 0xff1a75): void {
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const baseCol = new THREE.Color(colorHex);
    const fireCol = new THREE.Color(0xff7700);
    const whiteCol = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = position.x;
      positions[i3 + 1] = position.y;
      positions[i3 + 2] = position.z;

      // Random spherical explosion velocity
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const speed = 15.0 + Math.random() * 55.0;

      velocities[i3] = Math.sin(phi) * Math.cos(theta) * speed;
      velocities[i3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      velocities[i3 + 2] = Math.cos(phi) * speed;

      // Color variation
      const rRatio = Math.random();
      const col = rRatio < 0.5 ? baseCol : rRatio < 0.8 ? fireCol : whiteCol;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    this.scene.add(points);

    this.activeExplosions.push({
      points,
      velocities,
      lifetime: 0,
      maxLifetime: 1.2,
    });
  }

  public update(dt: number): void {
    for (let e = this.activeExplosions.length - 1; e >= 0; e--) {
      const exp = this.activeExplosions[e];
      exp.lifetime += dt;
      const progress = exp.lifetime / exp.maxLifetime;

      if (progress >= 1.0) {
        this.scene.remove(exp.points);
        exp.points.geometry.dispose();
        (exp.points.material as THREE.Material).dispose();
        this.activeExplosions.splice(e, 1);
        continue;
      }

      // Update particle positions and fade
      const pos = exp.points.geometry.attributes.position.array as Float32Array;
      const vel = exp.velocities;
      const count = pos.length / 3;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3] += vel[i3] * dt;
        pos[i3 + 1] += vel[i3 + 1] * dt;
        pos[i3 + 2] += vel[i3 + 2] * dt;

        // Drag/friction
        vel[i3] *= 0.96;
        vel[i3 + 1] *= 0.96;
        vel[i3 + 2] *= 0.96;
      }

      exp.points.geometry.attributes.position.needsUpdate = true;
      (exp.points.material as THREE.PointsMaterial).opacity = 1.0 - progress;
      (exp.points.material as THREE.PointsMaterial).size = 2.2 * (1.0 + progress * 0.8);
    }
  }
}
