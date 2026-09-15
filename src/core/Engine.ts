import * as THREE from 'three';

export type UpdateCallback = (dt: number, elapsedTime: number) => void;

export class Engine {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public ambientLight: THREE.AmbientLight;
  public sunLight: THREE.DirectionalLight;
  public rimLight: THREE.DirectionalLight;

  private clock: THREE.Clock;
  private container: HTMLElement;
  private isRunning: boolean = false;
  private animationFrameId: number | null = null;
  private updateCallbacks: Set<UpdateCallback> = new Set();

  // Debug FPS Monitor
  public isDebug: boolean = false;
  public fpsOverlay: HTMLDivElement | null = null;
  private frameCount: number = 0;
  private lastFpsUpdate: number = 0;
  private currentFps: number = 0;

  constructor(containerElement?: HTMLElement) {
    this.container =
      containerElement ??
      document.getElementById('game-container') ??
      document.body;

    // 1. Initialize Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913);

    // 2. Initialize Camera with extended far plane (4000) and dynamic FOV
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(65, aspect, 0.1, 4000);
    if (aspect < 1.0) {
      this.camera.fov = 75 + (1.0 - aspect) * 20;
    } else {
      this.camera.fov = 65;
    }
    this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 3, 7);
    this.camera.lookAt(0, 0, -2);

    // 3. Initialize WebGLRenderer with user specifications
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.container.appendChild(this.renderer.domElement);

    // 4. Upgraded Lighting Setup for high contrast against space
    // Cool ambient fill to prevent dark areas from dropping to pitch black
    this.ambientLight = new THREE.AmbientLight(0x4a6fa5, 0.85);
    this.scene.add(this.ambientLight);

    // Overhead 45-degree primary Sun DirectionalLight
    this.sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    this.sunLight.position.set(18, 25, 18);
    this.scene.add(this.sunLight);

    // Strong Rim/Backlight angled directly toward camera from behind jet for crisp silhouette
    this.rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    this.rimLight.position.set(0, 4, -15);
    this.rimLight.target.position.set(0, 0, 0);
    this.scene.add(this.rimLight);
    this.scene.add(this.rimLight.target);

    // 5. Clock & Event Listeners
    this.clock = new THREE.Clock();
    window.addEventListener('resize', this.onWindowResize);

    // 6. Debug FPS Counter (?debug=true)
    this.checkDebugMode();
  }

  private checkDebugMode(): void {
    const urlParams = new URLSearchParams(window.location.search);
    this.isDebug = urlParams.get('debug') === 'true';

    if (this.isDebug) {
      this.initFpsOverlay();
    }
  }

  private initFpsOverlay(): void {
    this.fpsOverlay = document.createElement('div');
    this.fpsOverlay.id = 'debug-fps-counter';
    Object.assign(this.fpsOverlay.style, {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 10px',
      background: 'rgba(6, 12, 28, 0.82)',
      border: '1px solid rgba(0, 255, 204, 0.45)',
      borderRadius: '8px',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '11px',
      fontWeight: '700',
      color: '#00ffcc',
      letterSpacing: '0.5px',
      pointerEvents: 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 255, 204, 0.25)',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
    });
    this.fpsOverlay.innerText = 'FPS: -- | 0.0 ms';
    document.body.appendChild(this.fpsOverlay);
    this.lastFpsUpdate = performance.now();
  }

  private updateFpsOverlay(now: number, dt: number): void {
    if (!this.fpsOverlay) return;

    this.frameCount++;
    const deltaMs = now - this.lastFpsUpdate;

    if (deltaMs >= 500) {
      this.currentFps = Math.round((this.frameCount * 1000) / deltaMs);
      const frameMs = (dt * 1000).toFixed(1);
      this.fpsOverlay.innerText = `FPS: ${this.currentFps} | ${frameMs} ms`;
      this.frameCount = 0;
      this.lastFpsUpdate = now;
    }
  }

  private onWindowResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;

    this.camera.aspect = aspect;
    if (aspect < 1.0) {
      // Portrait fallback: expand FOV so the jet doesn't consume the entire view
      this.camera.fov = 75 + (1.0 - aspect) * 20;
    } else {
      this.camera.fov = 65;
    }
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  };

  public onUpdate(callback: UpdateCallback): () => void {
    this.updateCallbacks.add(callback);
    return () => this.updateCallbacks.delete(callback);
  }

  // Screen Shake / Camera Trauma System
  private trauma: number = 0;

  public addTrauma(amount: number): void {
    this.trauma = Math.min(1.0, this.trauma + amount);
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();

    const loop = (now: number): void => {
      if (!this.isRunning) return;

      // Delta time clamped to Math.min(clock.getDelta(), 0.1) as requested
      const rawDelta = this.clock.getDelta();
      const dt = Math.min(rawDelta, 0.1);
      const elapsedTime = this.clock.getElapsedTime();

      // Run registered frame updates
      for (const callback of this.updateCallbacks) {
        callback(dt, elapsedTime);
      }

      // Apply screen shake trauma
      if (this.trauma > 0) {
        this.trauma = Math.max(0, this.trauma - dt * 2.2);
        const shake = this.trauma * this.trauma;
        const ox = (Math.random() - 0.5) * 0.8 * shake;
        const oy = (Math.random() - 0.5) * 0.8 * shake;
        const oz = (Math.random() - 0.5) * 0.4 * shake;
        this.camera.position.x += ox;
        this.camera.position.y += oy;
        this.camera.position.z += oz;
      }

      // Render
      this.renderer.render(this.scene, this.camera);

      // Update Debug FPS Counter
      if (this.isDebug) {
        this.updateFpsOverlay(now, dt);
      }

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  public stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public destroy(): void {
    this.stop();
    window.removeEventListener('resize', this.onWindowResize);
    this.updateCallbacks.clear();

    if (this.fpsOverlay && this.fpsOverlay.parentElement) {
      this.fpsOverlay.parentElement.removeChild(this.fpsOverlay);
      this.fpsOverlay = null;
    }

    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}
