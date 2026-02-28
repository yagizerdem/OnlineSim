export enum Direction {
  "UP",
  "RIGHT",
  "DOWN",
  "LEFT",
}

export class CircuitElement {
  x: number;
  y: number;
  inputLength: number;
  bitWidth: number;
  dir: Direction;

  constructor({
    x,
    y,
    inputLength,
    bitWidth,
    dir,
  }: {
    x: number;
    y: number;
    inputLength: number;
    bitWidth: number;
    dir: Direction;
  }) {
    this.x = x;
    this.y = y;
    this.inputLength = inputLength;
    this.bitWidth = bitWidth;
    this.dir = dir;
  }
}
