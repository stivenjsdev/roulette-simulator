import { RouletteNumber } from "../types";

// const rouletteNumbers = Array.from({ length: 37 }, (_, i) => i);
export const rouletteNumbers: {
  [key: number]: {
    color: RouletteNumber["color"];
    leftPosition: RouletteNumber["leftPosition"];
  };
} = {
  0: { color: "green", leftPosition: "top" },
  1: { color: "red", leftPosition: "top" },
  2: { color: "black", leftPosition: "top" },
  3: { color: "red", leftPosition: "top" },
  4: { color: "black", leftPosition: "top" },
  5: { color: "red", leftPosition: "top" },
  6: { color: "black", leftPosition: "top" },
  7: { color: "red", leftPosition: "top" },
  8: { color: "black", leftPosition: "top" },
  9: { color: "red", leftPosition: "top" },
  10: { color: "black", leftPosition: "top" },
  11: { color: "black", leftPosition: "top" },
  12: { color: "red", leftPosition: "top" },
  13: { color: "black", leftPosition: "middle" },
  14: { color: "red", leftPosition: "middle" },
  15: { color: "black", leftPosition: "middle" },
  16: { color: "red", leftPosition: "middle" },
  17: { color: "black", leftPosition: "middle" },
  18: { color: "red", leftPosition: "middle" },
  19: { color: "red", leftPosition: "middle" },
  20: { color: "black", leftPosition: "middle" },
  21: { color: "red", leftPosition: "middle" },
  22: { color: "black", leftPosition: "middle" },
  23: { color: "red", leftPosition: "middle" },
  24: { color: "black", leftPosition: "middle" },
  25: { color: "red", leftPosition: "bottom" },
  26: { color: "black", leftPosition: "bottom" },
  27: { color: "red", leftPosition: "bottom" },
  28: { color: "black", leftPosition: "bottom" },
  29: { color: "black", leftPosition: "bottom" },
  30: { color: "red", leftPosition: "bottom" },
  31: { color: "black", leftPosition: "bottom" },
  32: { color: "red", leftPosition: "bottom" },
  33: { color: "black", leftPosition: "bottom" },
  34: { color: "red", leftPosition: "bottom" },
  35: { color: "black", leftPosition: "bottom" },
  36: { color: "red", leftPosition: "bottom" },
};
// console.log(rouletteNumbers);

export const chips = ["500", "1000", "2500", "5000"];
