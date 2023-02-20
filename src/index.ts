export type Point = {
  x: number;
  y: number;
};

const computeManhattanDistance = (a: Point, b: Point): number => {
  return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
};

export default computeManhattanDistance;
