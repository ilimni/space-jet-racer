import * as THREE from 'three';

export interface JetCustomizationColors {
  hullColor: string | number;
  accentColor: string | number;
  glowColor: string | number;
}

export class Jet {
  public mesh: THREE.Group;
  public hullMaterial!: THREE.MeshStandardMaterial;
  public racingAccentMaterial!: THREE.MeshStandardMaterial;
  public thrusterGlowMaterial!: THREE.MeshStandardMaterial;
  public emissiveEdgeMaterial!: THREE.MeshStandardMaterial;
  public thrusterLights: THREE.PointLight[] = [];

  public currentCustomization: JetCustomizationColors = {
    hullColor: 0xeef2f7,
    accentColor: 0xff5500,
    glowColor: 0x00e1ff,
  };

  private thrusterMaterials: THREE.MeshStandardMaterial[] = [];
  private basePosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

  constructor() {
    this.mesh = new THREE.Group();
    this.mesh.name = 'SciFiJet';

    // Load persisted customization from localStorage if available
    try {
      const saved = localStorage.getItem('hyperion_jet_customization');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.currentCustomization = { ...this.currentCustomization, ...parsed };
      }
    } catch {
      // Use defaults
    }

    this.buildJet();
  }

  private buildJet(): void {
    // -------------------------------------------------------------
    // 1. High-Clarity Palette & Materials
    // -------------------------------------------------------------
    this.hullMaterial = new THREE.MeshStandardMaterial({
      color: this.currentCustomization.hullColor,
      metalness: 0.15,
      roughness: 0.45,
      flatShading: true,
    });

    this.racingAccentMaterial = new THREE.MeshStandardMaterial({
      color: this.currentCustomization.accentColor,
      metalness: 0.2,
      roughness: 0.35,
      flatShading: true,
    });

    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x18202c,
      metalness: 0.85,
      roughness: 0.35,
      flatShading: true,
    });

    const canopyMaterial = new THREE.MeshStandardMaterial({
      color: 0x091422,
      metalness: 0.95,
      roughness: 0.08,
      transparent: true,
      opacity: 0.88,
    });

    this.emissiveEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.5,
      roughness: 0.2,
    });

    this.thrusterGlowMaterial = new THREE.MeshStandardMaterial({
      color: this.currentCustomization.glowColor,
      emissive: this.currentCustomization.glowColor,
      emissiveIntensity: 2.5,
      roughness: 0.15,
    });
    this.thrusterMaterials.push(this.thrusterGlowMaterial);

    // -------------------------------------------------------------
    // 2. Tapered Fuselage (Nose aligned along -Z)
    // -------------------------------------------------------------
    const fuselageGeo = new THREE.CylinderGeometry(0.18, 0.8, 4.4, 7);
    fuselageGeo.rotateX(-Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeo, this.hullMaterial);
    fuselage.scale.set(1.15, 0.65, 1.0);
    this.mesh.add(fuselage);

    const stripeGeo = new THREE.BoxGeometry(0.22, 0.06, 3.8);
    const centerStripe = new THREE.Mesh(stripeGeo, this.racingAccentMaterial);
    centerStripe.position.set(0, 0.28, -0.2);
    this.mesh.add(centerStripe);

    const noseGeo = new THREE.ConeGeometry(0.22, 1.3, 7);
    noseGeo.rotateX(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, this.racingAccentMaterial);
    nose.position.set(0, 0, -2.8);
    nose.scale.set(1.0, 0.6, 1.0);
    this.mesh.add(nose);

    // Emissive Edge Strips along Fuselage Sides
    const fuselageStripGeo = new THREE.BoxGeometry(0.035, 0.05, 3.6);
    const leftFuselageStrip = new THREE.Mesh(fuselageStripGeo, this.emissiveEdgeMaterial);
    leftFuselageStrip.position.set(-0.84, 0.02, -0.1);
    this.mesh.add(leftFuselageStrip);

    const rightFuselageStrip = new THREE.Mesh(fuselageStripGeo, this.emissiveEdgeMaterial);
    rightFuselageStrip.position.set(0.84, 0.02, -0.1);
    this.mesh.add(rightFuselageStrip);

    // -------------------------------------------------------------
    // 3. Cockpit Canopy
    // -------------------------------------------------------------
    const canopyGeo = new THREE.CylinderGeometry(0.09, 0.34, 1.9, 6);
    canopyGeo.rotateX(-Math.PI / 2);
    const canopy = new THREE.Mesh(canopyGeo, canopyMaterial);
    canopy.position.set(0, 0.35, -0.7);
    canopy.scale.set(0.95, 0.52, 1.0);
    this.mesh.add(canopy);

    const canopyFrameGeo = new THREE.BoxGeometry(0.38, 0.04, 1.9);
    const canopyFrame = new THREE.Mesh(canopyFrameGeo, darkTrimMaterial);
    canopyFrame.position.set(0, 0.22, -0.7);
    this.mesh.add(canopyFrame);

    // -------------------------------------------------------------
    // 4. Swept Wings & Emissive Wingtip Strips
    // -------------------------------------------------------------
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(2.9, 1.7);
    wingShape.lineTo(2.7, 2.2);
    wingShape.lineTo(0.5, 1.55);
    wingShape.lineTo(0, 1.45);
    wingShape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.09,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    };

    const rightWingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
    rightWingGeo.rotateX(Math.PI / 2);
    const rightWing = new THREE.Mesh(rightWingGeo, this.hullMaterial);
    rightWing.position.set(0.4, -0.05, -0.6);
    this.mesh.add(rightWing);

    const leftWingGeo = rightWingGeo.clone();
    leftWingGeo.scale(-1, 1, 1);
    const leftWing = new THREE.Mesh(leftWingGeo, this.hullMaterial);
    leftWing.position.set(-0.4, -0.05, -0.6);
    this.mesh.add(leftWing);

    const wingStripeGeo = new THREE.BoxGeometry(0.3, 0.03, 1.2);
    const rightWingStripe = new THREE.Mesh(wingStripeGeo, this.racingAccentMaterial);
    rightWingStripe.position.set(1.6, 0.04, 0.2);
    rightWingStripe.rotation.y = -0.45;
    this.mesh.add(rightWingStripe);

    const leftWingStripe = new THREE.Mesh(wingStripeGeo, this.racingAccentMaterial);
    leftWingStripe.position.set(-1.6, 0.04, 0.2);
    leftWingStripe.rotation.y = 0.45;
    this.mesh.add(leftWingStripe);

    const wingtipGeo = new THREE.BoxGeometry(0.1, 0.38, 0.9);
    const rightWingtip = new THREE.Mesh(wingtipGeo, darkTrimMaterial);
    rightWingtip.position.set(3.25, 0.06, 1.15);
    this.mesh.add(rightWingtip);

    const leftWingtip = new THREE.Mesh(wingtipGeo, darkTrimMaterial);
    leftWingtip.position.set(-3.25, 0.06, 1.15);
    this.mesh.add(leftWingtip);

    const wingtipStripGeo = new THREE.BoxGeometry(0.04, 0.42, 0.95);
    const rightWingtipStrip = new THREE.Mesh(wingtipStripGeo, this.emissiveEdgeMaterial);
    rightWingtipStrip.position.set(3.31, 0.06, 1.15);
    this.mesh.add(rightWingtipStrip);

    const leftWingtipStrip = new THREE.Mesh(wingtipStripGeo, this.emissiveEdgeMaterial);
    leftWingtipStrip.position.set(-3.31, 0.06, 1.15);
    this.mesh.add(leftWingtipStrip);

    const tailFinGeo = new THREE.BoxGeometry(0.07, 0.85, 0.95);
    const rightTailFin = new THREE.Mesh(tailFinGeo, this.racingAccentMaterial);
    rightTailFin.position.set(0.68, 0.55, 1.55);
    rightTailFin.rotation.z = -0.32;
    rightTailFin.rotation.y = 0.04;
    this.mesh.add(rightTailFin);

    const leftTailFin = new THREE.Mesh(tailFinGeo, this.racingAccentMaterial);
    leftTailFin.position.set(-0.68, 0.55, 1.55);
    leftTailFin.rotation.z = 0.32;
    leftTailFin.rotation.y = -0.04;
    this.mesh.add(leftTailFin);

    const tailStripGeo = new THREE.BoxGeometry(0.05, 0.05, 0.95);
    const rightTailStrip = new THREE.Mesh(tailStripGeo, this.emissiveEdgeMaterial);
    rightTailStrip.position.set(0.82, 0.98, 1.55);
    rightTailStrip.rotation.z = -0.32;
    this.mesh.add(rightTailStrip);

    const leftTailStrip = new THREE.Mesh(tailStripGeo, this.emissiveEdgeMaterial);
    leftTailStrip.position.set(-0.82, 0.98, 1.55);
    leftTailStrip.rotation.z = 0.32;
    this.mesh.add(leftTailStrip);

    // -------------------------------------------------------------
    // 5. Twin Engine Exhausts
    // -------------------------------------------------------------
    const engineSpacing = 0.56;
    [-engineSpacing, engineSpacing].forEach((xPos) => {
      const nacelleGeo = new THREE.CylinderGeometry(0.3, 0.34, 1.7, 14);
      nacelleGeo.rotateX(-Math.PI / 2);
      const nacelle = new THREE.Mesh(nacelleGeo, darkTrimMaterial);
      nacelle.position.set(xPos, 0, 1.25);
      this.mesh.add(nacelle);

      const fairingGeo = new THREE.BoxGeometry(0.18, 0.12, 1.2);
      const fairing = new THREE.Mesh(fairingGeo, this.racingAccentMaterial);
      fairing.position.set(xPos, 0.32, 1.2);
      this.mesh.add(fairing);

      const nozzleGeo = new THREE.CylinderGeometry(0.28, 0.23, 0.38, 14);
      nozzleGeo.rotateX(-Math.PI / 2);
      const nozzle = new THREE.Mesh(nozzleGeo, darkTrimMaterial);
      nozzle.position.set(xPos, 0, 2.1);
      this.mesh.add(nozzle);

      const glowGeo = new THREE.CylinderGeometry(0.21, 0.12, 0.28, 14);
      glowGeo.rotateX(-Math.PI / 2);
      const glowMesh = new THREE.Mesh(glowGeo, this.thrusterGlowMaterial);
      glowMesh.position.set(xPos, 0, 2.22);
      this.mesh.add(glowMesh);

      const thrusterLight = new THREE.PointLight(this.currentCustomization.glowColor, 2.2, 4.0);
      thrusterLight.position.set(xPos, 0, 2.25);
      this.mesh.add(thrusterLight);
      this.thrusterLights.push(thrusterLight);
    });

    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  public applyCustomization(colors: Partial<JetCustomizationColors>): void {
    if (colors.hullColor !== undefined) {
      this.currentCustomization.hullColor = colors.hullColor;
      this.hullMaterial.color.set(colors.hullColor);
    }
    if (colors.accentColor !== undefined) {
      this.currentCustomization.accentColor = colors.accentColor;
      this.racingAccentMaterial.color.set(colors.accentColor);
    }
    if (colors.glowColor !== undefined) {
      this.currentCustomization.glowColor = colors.glowColor;
      this.thrusterGlowMaterial.color.set(colors.glowColor);
      this.thrusterGlowMaterial.emissive.set(colors.glowColor);
      for (const light of this.thrusterLights) {
        light.color.set(colors.glowColor);
      }
    }
    try {
      localStorage.setItem('hyperion_jet_customization', JSON.stringify(this.currentCustomization));
    } catch {
      // localStorage ignored in restricted environments
    }
  }

  public setPosition(x: number, y: number, z: number): void {
    this.basePosition.set(x, y, z);
    this.mesh.position.set(x, y, z);
  }

  public update(_dt: number, elapsedTime: number, isBoosting: boolean = false): void {
    const basePulse = isBoosting ? 4.5 : 2.5;
    const flickerFreq = isBoosting ? 28.0 : 14.0;
    const pulse = basePulse + Math.sin(elapsedTime * flickerFreq) * (isBoosting ? 0.8 : 0.35);

    for (const mat of this.thrusterMaterials) {
      mat.emissiveIntensity = pulse;
      if (isBoosting) {
        mat.emissive.setHex(0xffaa00);
      } else {
        mat.emissive.set(this.currentCustomization.glowColor);
      }
    }
  }
}
