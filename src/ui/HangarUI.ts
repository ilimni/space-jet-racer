import { Jet } from '../entities/Jet';
import { GameState } from '../core/GameState';

export class HangarUI {
  private container: HTMLDivElement;
  private jet: Jet;
  private gameState: GameState;

  private readonly HULL_PRESETS = [
    { label: 'Ceramic White', color: '#eef2f7' },
    { label: 'Obsidian Stealth', color: '#18202c' },
    { label: 'Titanium Silver', color: '#94a3b8' },
    { label: 'Solar Gold', color: '#f59e0b' },
  ];

  private readonly ACCENT_PRESETS = [
    { label: 'Hazard Orange', color: '#ff5500' },
    { label: 'Electric Cyan', color: '#00f0ff' },
    { label: 'Neon Crimson', color: '#ff0055' },
    { label: 'Acid Lime', color: '#00ff66' },
  ];

  private readonly GLOW_PRESETS = [
    { label: 'Hyperion Cyan', color: '#00e1ff' },
    { label: 'Plasma Orange', color: '#ff7700' },
    { label: 'Void Purple', color: '#a855f7' },
    { label: 'Matrix Green', color: '#00ff66' },
  ];

  constructor(jet: Jet, gameState: GameState) {
    this.jet = jet;
    this.gameState = gameState;
    this.container = document.createElement('div');
    this.container.id = 'hangar-ui';
    this.initDOM();
    document.body.appendChild(this.container);

    this.gameState.onStateChange((newState) => {
      this.container.style.display = newState === 'HANGAR' ? 'flex' : 'none';
      if (newState === 'HANGAR') {
        this.updateActiveSwatches();
      }
    });
  }

  private initDOM(): void {
    Object.assign(this.container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'none',
      background: 'transparent',
      backdropFilter: 'none',
      webkitBackdropFilter: 'none',
      pointerEvents: 'none',
      zIndex: '3000',
      userSelect: 'none',
      webkitUserSelect: 'none',
      boxSizing: 'border-box',
    });

    // Top-left compact branding badge
    const header = document.createElement('div');
    Object.assign(header.style, {
      position: 'absolute',
      top: '24px',
      left: '28px',
      pointerEvents: 'auto',
      background: 'rgba(6, 12, 24, 0.75)',
      border: '1px solid rgba(0, 240, 255, 0.35)',
      borderRadius: '12px',
      padding: '10px 18px',
      backdropFilter: 'blur(8px)',
      webkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
    });
    header.innerHTML = `
      <div style="font-size: 10px; font-weight: 800; letter-spacing: 2.5px; color: #00f0ff; text-transform: uppercase;">FLIGHT DECK WORKSHOP</div>
      <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 1px; text-shadow: 0 0 14px rgba(0, 240, 255, 0.5);">JET HANGAR</div>
    `;
    this.container.appendChild(header);

    // Floating right side panel for controls
    const sidePanel = document.createElement('div');
    Object.assign(sidePanel.style, {
      position: 'absolute',
      top: '20px',
      bottom: '20px',
      right: '24px',
      width: '360px',
      maxWidth: 'calc(100vw - 48px)',
      padding: '24px',
      background: 'rgba(8, 14, 28, 0.85)',
      border: '1.5px solid rgba(0, 240, 255, 0.35)',
      borderRadius: '20px',
      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.8), inset 0 0 16px rgba(0, 240, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      webkitBackdropFilter: 'blur(16px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '16px',
      pointerEvents: 'auto',
      overflowY: 'auto',
      boxSizing: 'border-box',
    });

    const swatchesContainer = document.createElement('div');
    Object.assign(swatchesContainer.style, {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
    });

    // 1. Hull Tone Swatches
    swatchesContainer.appendChild(this.createCategory('HULL TONE', this.HULL_PRESETS, (col) => {
      this.jet.applyCustomization({ hullColor: col });
      this.updateActiveSwatches();
    }, 'hull'));

    // 2. Racing Accent Stripe Swatches
    swatchesContainer.appendChild(this.createCategory('RACING ACCENT STRIPE', this.ACCENT_PRESETS, (col) => {
      this.jet.applyCustomization({ accentColor: col });
      this.updateActiveSwatches();
    }, 'accent'));

    // 3. Thruster Plasma Glow Swatches
    swatchesContainer.appendChild(this.createCategory('THRUSTER PLASMA CORE', this.GLOW_PRESETS, (col) => {
      this.jet.applyCustomization({ glowColor: col });
      this.updateActiveSwatches();
    }, 'glow'));

    sidePanel.appendChild(swatchesContainer);

    // Exit Button at bottom of right side panel
    const exitBtn = document.createElement('button');
    exitBtn.id = 'btn-save-hangar';
    exitBtn.innerText = 'SAVE & RETURN';
    Object.assign(exitBtn.style, {
      width: '100%',
      padding: '14px 20px',
      background: 'linear-gradient(90deg, #00f0ff, #0284c7)',
      border: 'none',
      borderRadius: '12px',
      fontSize: '13px',
      fontWeight: '900',
      letterSpacing: '2px',
      color: '#050a14',
      cursor: 'pointer',
      boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)',
      transition: 'transform 0.1s ease, box-shadow 0.2s ease',
      marginTop: '10px',
    });

    exitBtn.addEventListener('click', () => {
      const returnState = this.gameState.previous === 'PAUSED' ? 'PAUSED' : 'TITLE_SCREEN';
      this.gameState.setState(returnState);
    });

    sidePanel.appendChild(exitBtn);
    this.container.appendChild(sidePanel);
  }

  private createCategory(
    title: string,
    presets: { label: string; color: string }[],
    onSelect: (color: string) => void,
    categoryKey: string
  ): HTMLElement {
    const box = document.createElement('div');

    const titleEl = document.createElement('div');
    titleEl.innerText = title;
    Object.assign(titleEl.style, {
      fontSize: '10px',
      fontWeight: '800',
      letterSpacing: '1.5px',
      color: '#94a3b8',
      marginBottom: '8px',
    });
    box.appendChild(titleEl);

    const swatchesRow = document.createElement('div');
    Object.assign(swatchesRow.style, {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    });

    for (const preset of presets) {
      const swatch = document.createElement('div');
      swatch.title = preset.label;
      swatch.dataset.category = categoryKey;
      swatch.dataset.color = preset.color;
      Object.assign(swatch.style, {
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: preset.color,
        border: '2px solid rgba(255, 255, 255, 0.25)',
        cursor: 'pointer',
        boxShadow: `0 0 10px ${preset.color}66`,
        transition: 'all 0.15s ease',
      });

      swatch.addEventListener('click', () => onSelect(preset.color));
      swatchesRow.appendChild(swatch);
    }

    box.appendChild(swatchesRow);
    return box;
  }

  private updateActiveSwatches(): void {
    const cur = this.jet.currentCustomization;
    const swatches = this.container.querySelectorAll('[data-category]');

    swatches.forEach((el) => {
      const sw = el as HTMLElement;
      const cat = sw.dataset.category;
      const col = sw.dataset.color?.toLowerCase();

      let isMatch = false;
      if (cat === 'hull') isMatch = (typeof cur.hullColor === 'string' ? cur.hullColor.toLowerCase() : '') === col;
      if (cat === 'accent') isMatch = (typeof cur.accentColor === 'string' ? cur.accentColor.toLowerCase() : '') === col;
      if (cat === 'glow') isMatch = (typeof cur.glowColor === 'string' ? cur.glowColor.toLowerCase() : '') === col;

      if (isMatch) {
        sw.style.transform = 'scale(1.18)';
        sw.style.borderColor = '#ffffff';
        sw.style.boxShadow = '0 0 18px #ffffff';
      } else {
        sw.style.transform = 'scale(1.0)';
        sw.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        sw.style.boxShadow = `0 0 8px ${col}44`;
      }
    });
  }

  public show(): void {
    this.container.style.display = 'flex';
    this.updateActiveSwatches();
  }

  public hide(): void {
    this.container.style.display = 'none';
  }
}
