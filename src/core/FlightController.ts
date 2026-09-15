import * as THREE from 'three';
import { Jet } from '../entities/Jet';
import { InputState } from './InputManager';

export class FlightController {
  public jet: Jet;

  // Speed & Flight Parameters
  public baseCruisingSpeed: number = 48.0; // units / sec
  public maxBoostMultiplier: number = 1.8;
  public brakeMultiplier: number = 0.5;
  public currentSpeed: number = 48.0;
  public targetSpeed: number = 48.0;
  public displaySpeedKmH: number = 1200;

  // Boost System
  public boostEnergy: number = 100.0; // 0 to 100%
  public readonly BOOST_DRAIN_TIME: number = 4.0; // seconds to fully deplete (25%/s)
  public readonly BOOST_RECHARGE_TIME: number = 5.0; // seconds to fully recharge (20%/s)
  public isBoosting: boolean = false;

  // Angular Rates & Damping
  public pitchRate: number = 1.7;
  public yawRate: number = 1.4;
  public rollRate: number = 2.4;
  public autoBankFactor: number = 0.85;

  private currentPitchVel: number = 0;
  private currentYawVel: number = 0;
  private currentRollVel: number = 0;

  // Pre-allocated vectors & quaternions to prevent GC churn
  private readonly VEC_FORWARD = new THREE.Vector3(0, 0, -1);
  private readonly AXIS_X = new THREE.Vector3(1, 0, 0);
  private readonly AXIS_Y = new THREE.Vector3(0, 1, 0);
  private readonly AXIS_Z = new THREE.Vector3(0, 0, 1);

  private readonly quatPitch = new THREE.Quaternion();
  private readonly quatYaw = new THREE.Quaternion();
  private readonly quatRoll = new THREE.Quaternion();
  private readonly forwardDir = new THREE.Vector3();

  constructor(jet: Jet) {
    this.jet = jet;
  }

  public resetPhysics(speed: number = this.baseCruisingSpeed): void {
    this.currentSpeed = speed;
    this.targetSpeed = speed;
    this.currentPitchVel = 0;
    this.currentYawVel = 0;
    this.currentRollVel = 0;
    this.isBoosting = false;
  }

  public update(input: InputState, dt: number): void {
    // -------------------------------------------------------------
    // 1. Boost Management
    // -------------------------------------------------------------
    if (input.boost && this.boostEnergy > 0) {
      this.isBoosting = true;
      const drainRate = 100 / this.BOOST_DRAIN_TIME;
      this.boostEnergy = Math.max(0, this.boostEnergy - drainRate * dt);
      if (this.boostEnergy <= 0) {
        this.isBoosting = false;
      }
    } else {
      this.isBoosting = false;
      const rechargeRate = 100 / this.BOOST_RECHARGE_TIME;
      this.boostEnergy = Math.min(100, this.boostEnergy + rechargeRate * dt);
    }

    // -------------------------------------------------------------
    // 2. Velocity & Acceleration Calculations
    // -------------------------------------------------------------
    let targetSpeedMultiplier = 1.0;
    if (this.isBoosting) {
      targetSpeedMultiplier = this.maxBoostMultiplier;
    } else if (input.throttle < -0.1) {
      targetSpeedMultiplier = this.brakeMultiplier;
    } else if (input.throttle > 0.1) {
      targetSpeedMultiplier = 1.25;
    }

    this.targetSpeed = this.baseCruisingSpeed * targetSpeedMultiplier;

    // Smooth speed response
    const accelRate = this.isBoosting ? 8.0 : 4.0;
    this.currentSpeed = THREE.MathUtils.lerp(
      this.currentSpeed,
      this.targetSpeed,
      1.0 - Math.exp(-accelRate * dt)
    );

    // Display speed in km/h (~1150 km/h cruising, ~2070 km/h boosting)
    this.displaySpeedKmH = Math.round(this.currentSpeed * 24.0);

    // -------------------------------------------------------------
    // 3. Rotational Physics via THREE.Quaternion (Gimbal-Lock Free)
    // -------------------------------------------------------------
    const targetPitchVel = input.pitch * this.pitchRate;
    const targetYawVel = input.yaw * this.yawRate;

    // Visual banking: Yaw steering automatically induces ergonomic roll
    const visualBank = -input.yaw * this.autoBankFactor * this.rollRate;
    const directRoll = -input.roll * this.rollRate;
    const targetRollVel = directRoll !== 0 ? directRoll : visualBank;

    // Angular velocity damping for responsive yet fluid feel
    const damping = 12.0;
    this.currentPitchVel = THREE.MathUtils.lerp(
      this.currentPitchVel,
      targetPitchVel,
      1.0 - Math.exp(-damping * dt)
    );
    this.currentYawVel = THREE.MathUtils.lerp(
      this.currentYawVel,
      targetYawVel,
      1.0 - Math.exp(-damping * dt)
    );
    this.currentRollVel = THREE.MathUtils.lerp(
      this.currentRollVel,
      targetRollVel,
      1.0 - Math.exp(-damping * dt)
    );

    // Form discrete axis quaternions
    this.quatPitch.setFromAxisAngle(this.AXIS_X, this.currentPitchVel * dt);
    this.quatYaw.setFromAxisAngle(this.AXIS_Y, -this.currentYawVel * dt);
    this.quatRoll.setFromAxisAngle(this.AXIS_Z, this.currentRollVel * dt);

    // Concatenate into jet rotation: Pitch -> Yaw -> Roll
    this.jet.mesh.quaternion.multiply(this.quatPitch);
    this.jet.mesh.quaternion.multiply(this.quatYaw);
    this.jet.mesh.quaternion.multiply(this.quatRoll);
    this.jet.mesh.quaternion.normalize();

    // -------------------------------------------------------------
    // 4. Forward Translation along local -Z
    // -------------------------------------------------------------
    this.forwardDir.copy(this.VEC_FORWARD).applyQuaternion(this.jet.mesh.quaternion);
    this.jet.mesh.position.addScaledVector(this.forwardDir, this.currentSpeed * dt);
  }
}
