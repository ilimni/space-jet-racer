import * as THREE from 'three';
import { Jet } from '../entities/Jet';

export class ChaseCamera {
  public camera: THREE.PerspectiveCamera;
  public jet: Jet;

  // Offsets relative to Jet local frame
  public baseOffset: THREE.Vector3 = new THREE.Vector3(0, 2.5, 7.5);
  public boostOffset: THREE.Vector3 = new THREE.Vector3(0, 2.8, 9.2);
  public lookAheadOffset: THREE.Vector3 = new THREE.Vector3(0, 0.4, -14.0);

  // Field of View
  public baseFov: number = 60.0;
  public boostFovMultiplier: number = 1.1; // +10% FOV (66.0)
  public currentFov: number = 60.0;

  // Damping Coefficients
  public positionDamping: number = 7.0;
  public targetDamping: number = 10.0;
  public rollDamping: number = 6.0;

  // Internal Tracking States
  private currentLookAt: THREE.Vector3 = new THREE.Vector3(0, 0, -10);
  private currentOffset: THREE.Vector3 = new THREE.Vector3(0, 2.5, 7.5);

  // Pre-allocated vectors to prevent GC
  private readonly desiredPos = new THREE.Vector3();
  private readonly desiredLookAt = new THREE.Vector3();
  private readonly desiredUp = new THREE.Vector3();
  private readonly VEC_UP = new THREE.Vector3(0, 1, 0);

  constructor(camera: THREE.PerspectiveCamera, jet: Jet) {
    this.camera = camera;
    this.jet = jet;
    this.baseFov = camera.fov;
    this.currentFov = camera.fov;

    // Initialize camera position immediately at default offset
    this.snapToTarget();
  }

  public snapToTarget(): void {
    const jetPos = this.jet.mesh.position;
    const jetQuat = this.jet.mesh.quaternion;

    this.desiredPos.copy(this.baseOffset).applyQuaternion(jetQuat).add(jetPos);
    this.desiredLookAt.copy(this.lookAheadOffset).applyQuaternion(jetQuat).add(jetPos);
    this.desiredUp.copy(this.VEC_UP).applyQuaternion(jetQuat);

    this.camera.position.copy(this.desiredPos);
    this.currentLookAt.copy(this.desiredLookAt);
    this.camera.up.copy(this.desiredUp);
    this.camera.lookAt(this.currentLookAt);
  }

  public update(dt: number, isBoosting: boolean): void {
    const jetPos = this.jet.mesh.position;
    const jetQuat = this.jet.mesh.quaternion;

    // -------------------------------------------------------------
    // 1. Dynamic FOV and Offset during Boost (+10% FOV)
    // -------------------------------------------------------------
    const targetFov = isBoosting ? this.baseFov * this.boostFovMultiplier : this.baseFov;
    const fovLerpFactor = 1.0 - Math.exp(-8.0 * dt);
    this.currentFov = THREE.MathUtils.lerp(this.currentFov, targetFov, fovLerpFactor);

    if (Math.abs(this.camera.fov - this.currentFov) > 0.05) {
      this.camera.fov = this.currentFov;
      this.camera.updateProjectionMatrix();
    }

    const targetOffset = isBoosting ? this.boostOffset : this.baseOffset;
    this.currentOffset.lerp(targetOffset, fovLerpFactor);

    // -------------------------------------------------------------
    // 2. Camera Position with Delta-Time Dampening
    // -------------------------------------------------------------
    this.desiredPos.copy(this.currentOffset).applyQuaternion(jetQuat).add(jetPos);
    const posAlpha = 1.0 - Math.exp(-this.positionDamping * dt);
    this.camera.position.lerp(this.desiredPos, posAlpha);

    // -------------------------------------------------------------
    // 3. Smooth Look-At Tracking along -Z
    // -------------------------------------------------------------
    this.desiredLookAt.copy(this.lookAheadOffset).applyQuaternion(jetQuat).add(jetPos);
    const targetAlpha = 1.0 - Math.exp(-this.targetDamping * dt);
    this.currentLookAt.lerp(this.desiredLookAt, targetAlpha);

    // -------------------------------------------------------------
    // 4. Smooth Camera Roll Lag with Up Vector
    // -------------------------------------------------------------
    this.desiredUp.copy(this.VEC_UP).applyQuaternion(jetQuat);
    const rollAlpha = 1.0 - Math.exp(-this.rollDamping * dt);
    this.camera.up.lerp(this.desiredUp, rollAlpha);

    this.camera.lookAt(this.currentLookAt);
  }
}
