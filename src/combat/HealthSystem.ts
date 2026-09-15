import * as THREE from 'three';

export interface HealthEvents {
  onDamage?: (heartsRemaining: number, heartsLost: number) => void;
  onDefeat?: () => void;
  onHeal?: (heartsRemaining: number) => void;
}

export class HealthSystem {
  public readonly MAX_HEARTS: number = 10;
  public currentHearts: number = 10;
  public isInvulnerable: boolean = false;

  private invulnerabilityTimer: number = 0;
  private readonly DEFAULT_INVULNERABILITY_DURATION: number = 1.0; // 1.0 second i-frames
  private jetMesh: THREE.Object3D;
  private events: HealthEvents;

  constructor(jetMesh: THREE.Object3D, events: HealthEvents = {}) {
    this.jetMesh = jetMesh;
    this.events = events;
  }

  public takeDamage(hearts: number): boolean {
    if (this.isInvulnerable || this.currentHearts <= 0) {
      return false;
    }

    const previousHearts = this.currentHearts;
    this.currentHearts = Math.max(0, this.currentHearts - hearts);
    const heartsLost = previousHearts - this.currentHearts;

    // Trigger invulnerability frames
    this.grantInvulnerability(this.DEFAULT_INVULNERABILITY_DURATION);

    // Trigger damage callback
    this.events.onDamage?.(this.currentHearts, heartsLost);

    // Check defeat
    if (this.currentHearts <= 0) {
      this.events.onDefeat?.();
    }

    return true;
  }

  public grantInvulnerability(duration: number): void {
    this.isInvulnerable = true;
    this.invulnerabilityTimer = duration;
  }

  public heal(hearts: number): void {
    if (this.currentHearts <= 0) return;
    this.currentHearts = Math.min(this.MAX_HEARTS, this.currentHearts + hearts);
    this.events.onHeal?.(this.currentHearts);
  }

  public respawn(): void {
    this.currentHearts = this.MAX_HEARTS;
    this.grantInvulnerability(1.5); // 1.5s post-respawn i-frames
    this.jetMesh.visible = true;
  }

  public update(dt: number): void {
    if (this.isInvulnerable) {
      this.invulnerabilityTimer -= dt;

      // Visual Hull Flash during i-frames (strobe visibility at 18Hz)
      const flashStrobe = Math.floor(this.invulnerabilityTimer * 20) % 2 === 0;
      this.jetMesh.visible = flashStrobe;

      if (this.invulnerabilityTimer <= 0) {
        this.isInvulnerable = false;
        this.invulnerabilityTimer = 0;
        this.jetMesh.visible = true;
      }
    } else {
      this.jetMesh.visible = true;
    }
  }
}
