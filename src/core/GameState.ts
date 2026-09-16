export type GameStateType =
  | 'TITLE_SCREEN'
  | 'START'
  | 'HANGAR'
  | 'COUNTDOWN'
  | 'RACING'
  | 'PAUSED'
  | 'PODIUM';

export class GameState {
  private currentState: GameStateType = 'TITLE_SCREEN';
  private previousState: GameStateType = 'TITLE_SCREEN';
  private stateListeners: Set<(newState: GameStateType, oldState: GameStateType) => void> = new Set();

  constructor(initialState: GameStateType = 'TITLE_SCREEN') {
    this.currentState = initialState;
    this.previousState = initialState;
  }

  public get current(): GameStateType {
    return this.currentState;
  }

  public get previous(): GameStateType {
    return this.previousState;
  }

  public setState(newState: GameStateType): void {
    if (this.currentState === newState) return;

    this.previousState = this.currentState;
    this.currentState = newState;

    for (const listener of this.stateListeners) {
      listener(newState, this.previousState);
    }
  }

  public transitionTo(newState: GameStateType): void {
    this.setState(newState);
  }

  public onStateChange(listener: (newState: GameStateType, oldState: GameStateType) => void): () => void {
    this.stateListeners.add(listener);
    return () => this.stateListeners.delete(listener);
  }

  public isPaused(): boolean {
    return this.currentState === 'PAUSED';
  }

  public isRacing(): boolean {
    return this.currentState === 'RACING';
  }

  public isInMenu(): boolean {
    return this.currentState === 'TITLE_SCREEN' || this.currentState === 'START' || this.currentState === 'HANGAR';
  }
}
