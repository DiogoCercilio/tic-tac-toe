export interface IGameStatusObject {
  status: string;
  data?: any;
}

export enum GAME_STATUS {
  INITIAL = "initial",
  WINNER = "winner",
  PLAYING = "playing",
  DRAW = "draw",
}

export enum GAME_COMMAND {
  X = 'X',
  O = 'O'
}

export interface IBoard {
  onWinner: Function;
  onDraw: Function;
}