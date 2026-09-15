import * as THREE from 'three';

export class CelestialEnvironment {
  public scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  // Celestial vista group (locked to camera position so it acts as skybox vista at 1800-2200m)
  private celestialGroup: THREE.Group;

  // Planet components
  public planetMesh: THREE.Mesh;
  public ringMesh: THREE.Mesh;
  public atmosphereMesh: THREE.Mesh;

  // Distant Sun & Corona
  public primarySunMesh: THREE.Mesh;
  public binaryCompanionMesh: THREE.Mesh;
  public coronaSprite: THREE.Sprite;
  public celestialSunLight: THREE.DirectionalLight;

  // Nebula Clusters
  public nebulaClusters: { points: THREE.Points; rotSpeed: THREE.Vector3 }[] = [];

  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene;
    this.camera = camera;

    this.celestialGroup = new THREE.Group();
    this.celestialGroup.name = 'CelestialVistas';

    // 1. Build Giant Ringed Gas Planet (radius 350m, distance 1800m)
    const planetData = this.buildRingedGasPlanet();
    this.planetMesh = planetData.planet;
    this.ringMesh = planetData.rings;
    this.atmosphereMesh = planetData.atmosphere;

    const planetGroup = new THREE.Group();
    planetGroup.position.set(700, 450, -1650); // Upper right celestial horizon
    planetGroup.add(this.planetMesh);
    planetGroup.add(this.ringMesh);
    planetGroup.add(this.atmosphereMesh);
    this.celestialGroup.add(planetGroup);

    // 2. Build Distant Binary Sun & Corona (radius 80m, distance 2200m)
    const sunData = this.buildBinarySun();
    this.primarySunMesh = sunData.primarySun;
    this.binaryCompanionMesh = sunData.binaryCompanion;
    this.coronaSprite = sunData.coronaSprite;

    const sunGroup = new THREE.Group();
    sunGroup.position.set(-850, 600, -2000); // Upper left celestial horizon
    sunGroup.add(this.primarySunMesh);
    sunGroup.add(this.binaryCompanionMesh);
    sunGroup.add(this.coronaSprite);
    this.celestialGroup.add(sunGroup);

    // Directional celestial rim light casting warm glow across track
    this.celestialSunLight = new THREE.DirectionalLight(0xffedd5, 1.4);
    this.celestialSunLight.position.copy(sunGroup.position);
    this.scene.add(this.celestialSunLight);

    this.scene.add(this.celestialGroup);

    // 3. Build Volumetric Nebula Particle Fields along track perimeter
    this.buildTrackNebulae();
  }

  // -------------------------------------------------------------
  // 1. Giant Ringed Gas Planet
  // -------------------------------------------------------------
  private buildRingedGasPlanet() {
    const planetRadius = 350;

    // Procedural banded canvas texture (rich violet, amber, and deep navy stripes)
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base deep navy gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#0c0a1f'); // North pole dark indigo
    grad.addColorStop(0.2, '#3b0764'); // Rich royal violet
    grad.addColorStop(0.35, '#581c87'); // Vivid purple
    grad.addColorStop(0.48, '#d97706'); // Glowing amber equator band
    grad.addColorStop(0.52, '#f59e0b'); // Golden amber core stripe
    grad.addColorStop(0.65, '#1e1b4b'); // Deep navy
    grad.addColorStop(0.8, '#4c1d95'); // Soft violet
    grad.addColorStop(1.0, '#0a0918'); // South pole deep navy
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    // Add multiple turbulent planetary cloud bands
    const bandColors = [
      'rgba(245, 158, 11, 0.45)', // Amber
      'rgba(192, 132, 252, 0.35)', // Lavender
      'rgba(251, 191, 36, 0.3)',  // Warm gold
      'rgba(30, 27, 75, 0.5)',    // Navy shadow
      'rgba(217, 119, 6, 0.38)',  // Deep amber
      'rgba(168, 85, 247, 0.3)',  // Bright violet
    ];

    for (let i = 0; i < 36; i++) {
      const y = Math.random() * 512;
      const height = 4 + Math.random() * 24;
      ctx.fillStyle = bandColors[i % bandColors.length];
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= 1024; x += 32) {
        const wave = Math.sin(x * 0.02 + i) * 6 + Math.cos(x * 0.05 + i * 2) * 3;
        ctx.lineTo(x, y + wave);
      }
      ctx.lineTo(1024, y + height);
      ctx.lineTo(0, y + height);
      ctx.closePath();
      ctx.fill();
    }

    const planetTexture = new THREE.CanvasTexture(canvas);
    planetTexture.wrapS = THREE.RepeatWrapping;
    planetTexture.wrapT = THREE.ClampToEdgeWrapping;

    const planetGeo = new THREE.SphereGeometry(planetRadius, 48, 48);
    const planetMat = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.72,
      metalness: 0.15,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);

    // Subtle atmospheric fresnel rim glow shell
    const atmosphereGeo = new THREE.SphereGeometry(planetRadius * 1.025, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = dot(viewDir, vNormal);
          fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
          fresnel = pow(fresnel, 2.8);
          vec3 atmosphereColor = mix(vec3(0.55, 0.15, 0.85), vec3(0.95, 0.65, 0.2), fresnel * 0.5);
          gl_FragColor = vec4(atmosphereColor, fresnel * 0.85);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);

    // Tilted Flat Ring Disc (inner radius 420m, outer radius 650m)
    const ringInner = 420;
    const ringOuter = 650;

    // Procedural ring texture with Cassini-like transparent divisions
    const ringCanvas = document.createElement('canvas');
    ringCanvas.width = 512;
    ringCanvas.height = 32;
    const rCtx = ringCanvas.getContext('2d')!;

    const ringGrad = rCtx.createLinearGradient(0, 0, 512, 0);
    ringGrad.addColorStop(0.0, 'rgba(0,0,0,0)');
    ringGrad.addColorStop(0.08, 'rgba(217, 119, 6, 0.75)');
    ringGrad.addColorStop(0.25, 'rgba(251, 191, 36, 0.85)');
    ringGrad.addColorStop(0.42, 'rgba(168, 85, 247, 0.8)');
    ringGrad.addColorStop(0.48, 'rgba(0, 0, 0, 0.05)'); // Cassini division gap
    ringGrad.addColorStop(0.52, 'rgba(0, 0, 0, 0.05)');
    ringGrad.addColorStop(0.65, 'rgba(245, 158, 11, 0.7)');
    ringGrad.addColorStop(0.85, 'rgba(192, 132, 252, 0.5)');
    ringGrad.addColorStop(1.0, 'rgba(0,0,0,0)');
    rCtx.fillStyle = ringGrad;
    rCtx.fillRect(0, 0, 512, 32);

    const ringTexture = new THREE.CanvasTexture(ringCanvas);

    const ringGeo = new THREE.RingGeometry(ringInner, ringOuter, 96);
    // Align UVs radially along the ring
    const posAttr = ringGeo.attributes.position;
    const uvAttr = ringGeo.attributes.uv;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const r = Math.sqrt(vx * vx + vy * vy);
      const u = (r - ringInner) / (ringOuter - ringInner);
      uvAttr.setXY(i, u, 0.5);
    }

    const ringMat = new THREE.MeshStandardMaterial({
      map: ringTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
      roughness: 0.6,
      metalness: 0.2,
      depthWrite: false,
    });

    const rings = new THREE.Mesh(ringGeo, ringMat);
    rings.rotation.x = Math.PI * 0.42;
    rings.rotation.y = Math.PI * 0.14;

    return { planet, rings, atmosphere };
  }

  // -------------------------------------------------------------
  // 2. Distant Binary Sun & Stellar Corona
  // -------------------------------------------------------------
  private buildBinarySun() {
    // Primary Sun Sphere (radius 80m, distance 2200m)
    const sunRadius = 80;
    const sunGeo = new THREE.SphereGeometry(sunRadius, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const primarySun = new THREE.Mesh(sunGeo, sunMat);

    // Companion Binary Star (radius 34m, brilliant cyan-white)
    const companionGeo = new THREE.SphereGeometry(34, 24, 24);
    const companionMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
    });
    const binaryCompanion = new THREE.Mesh(companionGeo, companionMat);
    binaryCompanion.position.set(180, -60, -90);

    // Stellar Corona Additive Sprite Halo
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 256;
    haloCanvas.height = 256;
    const hCtx = haloCanvas.getContext('2d')!;

    const haloGrad = hCtx.createRadialGradient(128, 128, 8, 128, 128, 128);
    haloGrad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    haloGrad.addColorStop(0.18, 'rgba(254, 240, 138, 0.9)');
    haloGrad.addColorStop(0.42, 'rgba(245, 158, 11, 0.6)');
    haloGrad.addColorStop(0.72, 'rgba(239, 68, 68, 0.25)');
    haloGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    hCtx.fillStyle = haloGrad;
    hCtx.fillRect(0, 0, 256, 256);

    const haloTexture = new THREE.CanvasTexture(haloCanvas);
    const coronaMat = new THREE.SpriteMaterial({
      map: haloTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const coronaSprite = new THREE.Sprite(coronaMat);
    coronaSprite.scale.set(750, 750, 1.0);

    return { primarySun, binaryCompanion, coronaSprite };
  }

  // -------------------------------------------------------------
  // 3. Volumetric Nebula Particle Fields
  // -------------------------------------------------------------
  private createNebulaTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0.0, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
    grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.18)');
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
  }

  private buildTrackNebulae(): void {
    const nebulaTexture = this.createNebulaTexture();

    // 4 Organic clusters along the track perimeter
    const clusterConfigs = [
      {
        // Cluster 1: Near Gate 3-4 (Sweeping turn) - Vibrant Magenta & Violet
        center: new THREE.Vector3(120, 45, -480),
        color1: new THREE.Color(0xd946ef), // Magenta
        color2: new THREE.Color(0x8b5cf6), // Violet
        count: 320,
        spread: 220,
        particleSize: 75,
      },
      {
        // Cluster 2: Near Gate 7-8 (Canyon exit & climb) - Deep Indigo & Royal Blue
        center: new THREE.Vector3(-160, 10, -1120),
        color1: new THREE.Color(0x4f46e5), // Indigo
        color2: new THREE.Color(0x06b6d4), // Cyan highlight
        count: 350,
        spread: 250,
        particleSize: 85,
      },
      {
        // Cluster 3: Near Gate 11-12 (Descending sweep) - Turquoise & Emerald Glow
        center: new THREE.Vector3(140, 20, -1760),
        color1: new THREE.Color(0x14b8a6), // Turquoise
        color2: new THREE.Color(0x38bdf8), // Sky Blue
        count: 320,
        spread: 240,
        particleSize: 80,
      },
      {
        // Cluster 4: Near Gate 14-15 (Final Approach to Grand Hexagonal Arch) - Deep Celestial Orchid
        center: new THREE.Vector3(-70, 50, -2320),
        color1: new THREE.Color(0xa855f7), // Orchid
        color2: new THREE.Color(0xec4899), // Neon Pink
        count: 380,
        spread: 260,
        particleSize: 90,
      },
    ];

    for (const config of clusterConfigs) {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(config.count * 3);
      const colors = new Float32Array(config.count * 3);

      for (let i = 0; i < config.count; i++) {
        const i3 = i * 3;
        // Organic Gaussian-like distribution
        const u = Math.random() + Math.random() - 1;
        const v = Math.random() + Math.random() - 1;
        const w = Math.random() + Math.random() - 1;

        positions[i3] = config.center.x + u * config.spread;
        positions[i3 + 1] = config.center.y + v * (config.spread * 0.7);
        positions[i3 + 2] = config.center.z + w * config.spread;

        // Blend between cluster gradient colors
        const t = Math.random();
        const col = config.color1.clone().lerp(config.color2, t);
        const brightness = 0.45 + Math.random() * 0.45;
        colors[i3] = col.r * brightness;
        colors[i3 + 1] = col.g * brightness;
        colors[i3 + 2] = col.b * brightness;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: config.particleSize,
        map: nebulaTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.58,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      this.scene.add(points);

      this.nebulaClusters.push({
        points,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.008
        ),
      });
    }
  }

  // -------------------------------------------------------------
  // Update Loop
  // -------------------------------------------------------------
  public update(dt: number, elapsedTime: number): void {
    // Lock distant celestial vista group to camera position so planet and sun never get outpaced
    this.celestialGroup.position.copy(this.camera.position);

    // Slowly rotate planet and its rings
    this.planetMesh.rotation.y += 0.018 * dt;
    this.ringMesh.rotation.z += 0.008 * dt;

    // Pulse stellar corona halo gently
    const coronaScale = 750 + Math.sin(elapsedTime * 1.5) * 25;
    this.coronaSprite.scale.set(coronaScale, coronaScale, 1.0);

    // Animate binary companion orbiting slightly
    this.binaryCompanionMesh.position.x = 180 + Math.cos(elapsedTime * 0.2) * 20;
    this.binaryCompanionMesh.position.y = -60 + Math.sin(elapsedTime * 0.2) * 15;

    // Slowly evolve nebula particle clusters
    for (const cluster of this.nebulaClusters) {
      cluster.points.rotation.y += cluster.rotSpeed.y * dt;
      cluster.points.rotation.x += cluster.rotSpeed.x * dt;
    }
  }
}
