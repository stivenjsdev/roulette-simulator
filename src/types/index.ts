export type RouletteNumber = {
  number: number;
  tag: string;
  color: "green" | "red" | "black";
  leftPosition: "top" | "middle" | "bottom";
  count: number;
};

export type PatternNumber = { number: number; chip: number };
