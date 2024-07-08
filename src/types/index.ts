export type RouletteNumber = {
  number: number;
  tag: string;
  color: "green" | "red" | "black";
  leftPosition: "top" | "middle" | "bottom";
};

export type PatronNumber = { number: number; chip: number };
