import * as THREE from 'three';
import { Engine } from './core/Engine';
import { Jet } from './entities/Jet';
import { InputManager } from './core/InputManager';
import { FlightController } from './core/FlightController';
import { ChaseCamera } from './core/ChaseCamera';
import { FlightHUD } from './ui/FlightHUD';
import { Starfield } from './environment/Starfield';
import { CelestialEnvironment } from './environment/CelestialEnvironment';
import { TrackManager } from './environment/TrackManager';
import { AsteroidField } from './environment/AsteroidField';
import { HealthSystem } from './combat/HealthSystem';
import { ExplosionFX } from './effects/ExplosionFX';
import { AIRival, AIRivalConfig } from './entities/AIRival';
import { WeaponSystem } from './combat/WeaponSystem';
import { GameState } from './core/GameState';
import { MenuUI } from './ui/MenuUI';
import { HangarUI } from './ui/HangarUI';
import { RaceDirector } from './core/RaceDirector';
import { MusicDirector } from './audio/MusicDirector';

// 1. Initialize Core Engine, Jet & Game State
const engine = new Engine();
const jet = new Jet();
engine.scene.add(jet.mesh);

const gameState = new GameState('TITLE_SCREEN');
const musicDirector = new MusicDirector();

// 2. Initialize Flight Systems & HUD
const inputManager = new InputManager();
const flightController = new FlightController(jet);
const chaseCamera = new ChaseCamera(engine.camera, jet);
const hud = new FlightHUD(inputManager);

hud.setInputMode(inputManager.activeMode);

// 3. Initialize Environment & Track
const starfield = new Starfield(engine.scene, engine.camera);
const celestialEnvironment = new CelestialEnvironment(engine.scene, engine.camera);
const trackManager = new TrackManager(engine.scene);
const trackWaypoints = trackManager.rings.map((r) => r.position);

// 4. Initialize Combat, FX & Weapons
const explosionFX = new ExplosionFX(engine.scene);
const asteroidField = new AsteroidField(engine.scene, trackWaypoints, explosionFX);
const weaponSystem = new WeaponSystem(engine.scene);

// Game Statistics
const stats = {
  shotsFired: 0,
  asteroidsDestroyed: 0,
};

// 5. Initialize AI Rivals with Distinct Colors and Billboarded 3D Health Bars
const aiConfigs: AIRivalConfig[] = [
  {
    name: 'Phantom-01',
    hullColor: 0x2e1065,
    accentColor: 0x9333ea,
    glowColor: 0xc084fc,
    baseSpeed: 53.0, // Balanced ace
    archetype: 'ACE',
  },
  {
    name: 'Solar-02',
    hullColor: 0x78350f,
    accentColor: 0xf59e0b,
    glowColor: 0xfbbf24,
    baseSpeed: 56.0, // Fastest cruiser
    archetype: 'SPEEDER',
  },
  {
    name: 'Viper-03',
    hullColor: 0x064e3b,
    accentColor: 0x10b981,
    glowColor: 0x34d399,
    baseSpeed: 50.0, // Aggressive brawler
    archetype: 'BRAWLER',
  },
];

const aiRivals: AIRival[] = aiConfigs.map((config, index) => {
  return new AIRival(engine.scene, trackWaypoints, config, index);
});

// Initialize 3D Screen-Space Floating Nameplates
hud.initRivalMarkers(aiRivals);

// 6. Initialize Race Director & Hangar Customizer
const raceDirector = new RaceDirector();
const hangarUI = new HangarUI(jet, gameState, inputManager);

// Technical Safeguard 2: AudioCtx resume across all audio subsystems
const unlockAllAudio = () => {
  hud.resumeAudio();
  weaponSystem.resumeAudio();
  trackManager.resumeAudio();
  raceDirector.resumeAudio();
  musicDirector.resumeAudio();
};

const startNewRace = (callsign: string) => {
  hud.setPilotCallsign(callsign);
  unlockAllAudio();

  // Reset starting grid and course
  raceDirector.resetStartingGrid(jet, flightController, aiRivals);
  chaseCamera.snapToTarget(); // Technical Safeguard 3: Snapping cleanly to ChaseCamera
  trackManager.resetCourse();
  hud.resetRace(); // Technical Safeguard 1: Resets stopwatch to 00:00:00
  hud.updateGate(0, trackManager.rings.length);

  stats.shotsFired = 0;
  stats.asteroidsDestroyed = 0;

  gameState.setState('COUNTDOWN');
  raceDirector.startCountdown(() => {
    gameState.setState('RACING');
    flightController.resetPhysics(flightController.baseCruisingSpeed);
  });
};

// 7. Initialize Menu UI & State Machine
const menuUI = new MenuUI(gameState, {
  onStartRace: (callsign) => {
    startNewRace(callsign);
  },
  onOpenHangar: () => {
    gameState.setState('HANGAR');
    hangarUI.show();
  },
  onResume: () => {
    gameState.setState('RACING');
  },
  onRestartRace: () => {
    const callsign = menuUI.getPilotCallsign();
    startNewRace(callsign);
  },
  onQuitToTitle: () => {
    raceDirector.cancelCountdown();
    raceDirector.resetStartingGrid(jet, flightController, aiRivals);
    trackManager.resetCourse();
    hud.resetRace();
    gameState.setState('TITLE_SCREEN');
  },
  onAudioUnlock: () => {
    unlockAllAudio();
  },
  onToggleMusic: () => {
    return musicDirector.toggleMute();
  },
}, inputManager);

musicDirector.onMuteChange = (muted) => {
  menuUI.updateMusicUI(muted);
};

hud.setPilotCallsign(menuUI.getPilotCallsign());

// Dock ?debug=true FPS monitor, MUSIC toggle, and PAUSE button side-by-side into top-right header
if (engine.fpsOverlay) {
  hud.attachFpsOverlay(engine.fpsOverlay);
}
hud.attachMusicButton(menuUI.musicBtn);
hud.attachPauseButton(menuUI.pauseBtn);

// Wire Victory Podium and Finish Line Event
trackManager.onFinish = () => {
  gameState.transitionTo('PODIUM');
  hud.showPodium({
    rank: currentStanding,
    totalTime: hud.getFormattedTime(),
    shotsFired: stats.shotsFired,
    asteroidsDestroyed: stats.asteroidsDestroyed,
  });
};

hud.onPodiumRestart = () => {
  startNewRace(menuUI.getPilotCallsign());
};

// Technical Safeguard 3: Transition listener to snap ChaseCamera cleanly and manage music tracks
gameState.onStateChange((newState) => {
  if (newState === 'COUNTDOWN') {
    chaseCamera.snapToTarget();
  }
  if (newState === 'HANGAR') {
    hangarUI.show();
  } else {
    hangarUI.hide();
  }

  // Procedural Synthwave Music Transitions
  if (newState === 'HANGAR' || newState === 'START' || newState === 'TITLE_SCREEN') {
    musicDirector.transitionTo('MENU');
  } else if (newState === 'COUNTDOWN' || newState === 'RACING') {
    musicDirector.transitionTo('RACING');
  } else if (newState === 'PAUSED') {
    musicDirector.transitionTo('PAUSED');
  } else if (newState === 'PODIUM') {
    musicDirector.transitionTo('PODIUM');
  }
});

// Set initial grid positions
raceDirector.resetStartingGrid(jet, flightController, aiRivals);

// 8. Initialize Health System & Checkpoint Respawn
const healthSystem = new HealthSystem(jet.mesh, {
  onDamage: (heartsRemaining) => {
    hud.updateHearts(heartsRemaining);
  },
  onDefeat: () => {
    explosionFX.trigger(jet.mesh.position, 0xff1a75);
    hud.addPenaltyTime(3.0);

    if (trackManager.currentRingIndex > 0) {
      const lastGate = trackManager.rings[trackManager.currentRingIndex - 1];
      jet.mesh.position.copy(lastGate.position);
      jet.mesh.quaternion.copy(lastGate.mesh.quaternion);
    } else {
      jet.mesh.position.copy(raceDirector.playerStartPos);
      jet.mesh.quaternion.identity();
    }

    flightController.resetPhysics(flightController.baseCruisingSpeed);
    chaseCamera.snapToTarget();

    healthSystem.respawn();
    hud.updateHearts(10);
    engine.addTrauma(0.6);
  },
});

hud.updateHearts(healthSystem.currentHearts);
hud.updateGate(trackManager.currentRingIndex, trackManager.rings.length);

// Reusable vector for pre-tick anti-tunneling segment check
const prevJetPos = new THREE.Vector3();
let currentStanding = 1;
let turntableAngle = 0;

// 9. Main Tick Loop Integration
engine.onUpdate((dt, elapsedTime) => {
  const currentState = gameState.current;

  // -------------------------------------------------------------
  // Technical Safeguard 3: Turntable Orbit during TITLE_SCREEN and HANGAR
  // -------------------------------------------------------------
  if (gameState.isInMenu()) {
    turntableAngle += dt * 0.4; // Slow cinematic orbit
    const orbitRadius = 9.0;
    const orbitHeight = 2.5;
    const jetPos = jet.mesh.position;

    engine.camera.position.set(
      jetPos.x + Math.sin(turntableAngle) * orbitRadius,
      jetPos.y + orbitHeight,
      jetPos.z + Math.cos(turntableAngle) * orbitRadius
    );
    engine.camera.up.set(0, 1, 0);
    engine.camera.lookAt(jetPos.x, jetPos.y + 0.3, jetPos.z);

    // Update ambient visual effects without physics
    jet.update(dt, elapsedTime, false);
    starfield.update(jet.mesh.position, jet.mesh.quaternion, false, dt);
    celestialEnvironment.update(dt, elapsedTime);
    trackManager.update(dt, elapsedTime);
    explosionFX.update(dt);
    hud.setVisible(false);
    return;
  }

  // -------------------------------------------------------------
  // Technical Safeguard 1: PAUSED State freezes physics and stopwatch
  // -------------------------------------------------------------
  if (currentState === 'PAUSED') {
    // Keep camera and scene static, do not advance physics or race stopwatch
    return;
  }

  hud.setVisible(true);

  // -------------------------------------------------------------
  // COUNTDOWN State: Camera snaps, ships idle on starting grid
  // -------------------------------------------------------------
  if (currentState === 'COUNTDOWN') {
    chaseCamera.update(dt, false);
    jet.update(dt, elapsedTime, false);
    starfield.update(jet.mesh.position, jet.mesh.quaternion, false, dt);
    celestialEnvironment.update(dt, elapsedTime);
    trackManager.update(dt, elapsedTime);

    const activeGatePos = trackManager.getActiveGatePosition();
    hud.updateNavigationChevron(activeGatePos, jet.mesh.position, engine.camera);
    // Technical Safeguard 1: isRacing = false prevents stopwatch increment
    hud.update(0, 100, false, dt, false);
    hud.updateRivalMarkers(aiRivals, jet.mesh.position, engine.camera, false);
    return;
  }

  // -------------------------------------------------------------
  // PODIUM State: Ambient visuals continue, race controls frozen
  // -------------------------------------------------------------
  if (currentState === 'PODIUM') {
    chaseCamera.update(dt, false);
    jet.update(dt, elapsedTime, false);
    starfield.update(jet.mesh.position, jet.mesh.quaternion, false, dt);
    celestialEnvironment.update(dt, elapsedTime);
    trackManager.update(dt, elapsedTime);
    explosionFX.update(dt);
    return;
  }

  // -------------------------------------------------------------
  // RACING State
  // -------------------------------------------------------------
  // 1. Poll Unified Input State
  const input = inputManager.update();

  // 2. Cache Previous Position for Anti-Tunneling Ring Passages
  prevJetPos.copy(jet.mesh.position);

  // 3. Step Flight Physics
  flightController.update(input, dt);

  // 4. Handle Weapon Firing & Overheat
  if (input.fire) {
    const fired = weaponSystem.firePlayer(jet.mesh.position, jet.mesh.quaternion);
    if (fired) {
      stats.shotsFired++;
    }
  }
  weaponSystem.update(dt);
  hud.updateWeaponHeat(weaponSystem.getHeatRatio(), weaponSystem.isOverheated);

  // 5. Swept Line-Segment Plasma Bolt Collisions
  for (let b = weaponSystem.bolts.length - 1; b >= 0; b--) {
    const bolt = weaponSystem.bolts[b];

    if (!bolt.isEnemy) {
      let boltRemoved = false;

      // Player bolts vs Asteroids
      for (let a = asteroidField.asteroids.length - 1; a >= 0; a--) {
        const ast = asteroidField.asteroids[a];
        if (weaponSystem.checkHitAgainstSphere(bolt, ast.position, ast.radius)) {
          weaponSystem.removeBolt(b);
          boltRemoved = true;
          const destroyed = asteroidField.hitAsteroid(a, 1);
          if (destroyed) {
            stats.asteroidsDestroyed++;
          }
          break;
        }
      }

      if (boltRemoved) continue;

      // Player bolts vs AI Rivals
      for (let r = 0; r < aiRivals.length; r++) {
        const rival = aiRivals[r];
        if (weaponSystem.checkHitAgainstSphere(bolt, rival.mesh.position, 3.2)) {
          weaponSystem.removeBolt(b);
          rival.takeDamage(1);
          break;
        }
      }
    } else {
      // Enemy AI bolts vs Player Jet
      if (weaponSystem.checkHitAgainstSphere(bolt, jet.mesh.position, 3.2)) {
        weaponSystem.removeBolt(b);
        healthSystem.takeDamage(1);
        hud.triggerDamageFlash();
        engine.addTrauma(0.5);
      }
    }
  }

  // 6. Update Health System
  healthSystem.update(dt);

  // 7. Checkpoint Trigger Evaluation
  trackManager.checkPassage(
    prevJetPos,
    jet.mesh.position,
    (_gateIndex) => {
      flightController.boostEnergy = Math.min(100, flightController.boostEnergy + 25);
      hud.updateGate(trackManager.currentRingIndex, trackManager.rings.length);
    },
    (_finalGateIndex) => {
      gameState.transitionTo('PODIUM');
      hud.showPodium({
        rank: currentStanding,
        totalTime: hud.getFormattedTime(),
        shotsFired: stats.shotsFired,
        asteroidsDestroyed: stats.asteroidsDestroyed,
      });
    }
  );

  // 8. Asteroid Collision with Jet
  asteroidField.checkCollisions(jet.mesh.position, () => {
    const damaged = healthSystem.takeDamage(2);
    if (damaged) {
      engine.addTrauma(0.85);
      flightController.currentSpeed *= 0.4;
      flightController.boostEnergy = Math.max(0, flightController.boostEnergy - 50);
      hud.triggerDamageFlash();
    }
  });

  // 9. Update Destructible Asteroid Field & Magnetic Loot Tractor Beam
  asteroidField.update(dt);
  asteroidField.updateLootAndCollisions(jet.mesh.position, dt, (lootType) => {
    if (lootType === 'HEART') {
      healthSystem.heal(1);
      hud.updateHearts(healthSystem.currentHearts);
    } else {
      flightController.boostEnergy = Math.min(100, flightController.boostEnergy + 35);
    }
  });

  // 10. Real-Time Player Score & AI Rivals Update
  const activeGatePos = trackManager.getActiveGatePosition();
  const playerDistToNext = activeGatePos ? jet.mesh.position.distanceTo(activeGatePos) : 0;
  const playerScore = trackManager.currentRingIndex * 10000 - playerDistToNext;

  for (let i = 0; i < aiRivals.length; i++) {
    const rival = aiRivals[i];
    rival.update(dt, engine.camera, playerScore, elapsedTime, jet.mesh.position);

    rival.checkRetaliation(
      jet.mesh.position,
      (spawnPos, forwardDir, quat) => {
        weaponSystem.fireEnemy(spawnPos, forwardDir, quat);
      },
      dt
    );
  }

  // 11. Real-Time Race Standing Calculator (1st to 4th)
  const rivalScores = aiRivals.map((rival) => rival.getCourseScore());
  currentStanding = trackManager.calculateStandings(playerScore, rivalScores);
  hud.setStandings(currentStanding);

  // 12. Update Entities & Environments
  jet.update(dt, elapsedTime, flightController.isBoosting);
  chaseCamera.update(dt, flightController.isBoosting);
  starfield.update(jet.mesh.position, jet.mesh.quaternion, flightController.isBoosting, dt);
  celestialEnvironment.update(dt, elapsedTime);
  trackManager.update(dt, elapsedTime);
  explosionFX.update(dt);

  // 13. Align Rim Backlight dynamically behind Jet
  engine.rimLight.position
    .set(0, 4, -15)
    .applyQuaternion(jet.mesh.quaternion)
    .add(jet.mesh.position);
  engine.rimLight.target.position.copy(jet.mesh.position);

  // 14. Update 3D Floating Rival Nameplates & Off-Screen Chevrons
  hud.updateRivalMarkers(aiRivals, jet.mesh.position, engine.camera, currentState === 'RACING');

  // 15. Update HUD (Speedometer, 10 Hearts, Boost, Timer, Nav Chevron)
  hud.updateNavigationChevron(activeGatePos, jet.mesh.position, engine.camera);
  // Technical Safeguard 1: Only advance stopwatch while actively in RACING state
  hud.update(
    flightController.displaySpeedKmH,
    flightController.boostEnergy,
    flightController.isBoosting,
    dt,
    currentState === 'RACING'
  );
});

// 10. Start Engine Loop
engine.start();
