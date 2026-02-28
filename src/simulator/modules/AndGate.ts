import { CircuitElement, Direction } from "../CircutElement";

class AndGate extends CircuitElement {
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
    super({ x, y, inputLength, bitWidth, dir });
  }
}
