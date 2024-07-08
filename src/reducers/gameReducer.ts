export type GameActions = {
  type: "ADD_NUMBER_TO_PATRON" | "PLAY_NUMBER" | "ADD_MONEY";
  payload: {
    patronNumber?: number;
    gameNumber?: number;
    money?: { money: number; moneyWin: number; moneyLose: number };
  };
};

export type RouletteNumber = {
  number: number;
  tag: string;
  color: "green" | "red" | "black";
  leftPosition: "top" | "middle" | "bottom";
};

type GameState = {
  patron: number[];
  gameNumbers: Array<RouletteNumber>;
  money: number;
  moneyWin: number;
  moneyLose: number;
};

export const initialState: GameState = {
  patron: [],
  gameNumbers: [],
  money: 0,
  moneyWin: 0,
  moneyLose: 0,
};

// const rouletteNumbers = Array.from({ length: 37 }, (_, i) => i);
const rouletteNumbers: {
  [key: number]: {
    color: RouletteNumber['color'];
    // color: string;
    leftPosition: RouletteNumber['leftPosition'];
    // leftPosition: string;
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

export const gameReducer = (state: GameState, action: GameActions) => {
  if (action.type === "ADD_NUMBER_TO_PATRON") {
    const { patronNumber } = action.payload;
    if (
      patronNumber &&
      patronNumber !== 0 &&
      !state.patron.includes(patronNumber)
    ) {
      return {
        ...state,
        patron: [...state.patron, patronNumber],
      };
    }
  }

  if (action.type === "PLAY_NUMBER") {
    const { gameNumber } = action.payload;
    if (!gameNumber) return state;
    const tag = state.patron.includes(gameNumber) ? "win" : "lose";
    const newGameNumber: RouletteNumber = {
      number: gameNumber,
      tag,
      color: rouletteNumbers[gameNumber].color,
      leftPosition: rouletteNumbers[gameNumber].leftPosition,
    };
    return {
      ...state,
      gameNumbers: [
        ...state.gameNumbers,
        newGameNumber,
      ],
      money:
        tag === "win"
          ? gameNumber === 32 || gameNumber === 26 || gameNumber === 23
            ? state.money + 500 * 18 - 3500
            : state.money + state.moneyWin
          : state.money - state.moneyLose,
    };
  }

  if (action.type === "ADD_MONEY") {
    return {
      ...state,
      ...action.payload.money,
    };
  }

  return state;
};
