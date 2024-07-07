export type GameActions = {
  type: "ADD_NUMBER_TO_PATRON" | "PLAY_NUMBER" | "ADD_MONEY";
  payload: {
    patronNumber?: number;
    gameNumber?: number;
    money?: { money: number; moneyWin: number; moneyLose: number };
  };
};

type GameState = {
  patron: number[];
  gameNumbers: { number: number; tag: string, color: string }[];
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
const rouletteNumbers: { [key: number]: { color: 'green' | 'red' | 'black' } } = {
  0: {color: "green"},
  1: {color: "red"},
  2: {color: "black"},
  3: {color: "red"},
  4: {color: "black"},
  5: {color: "red"},
  6: {color: "black"},
  7: {color: "red"},
  8: {color: "black"},
  9: {color: "red"},
  10: {color: "black"},
  11: {color: "black"},
  12: {color: "red"},
  13: {color: "black"},
  14: {color: "red"},
  15: {color: "black"},
  16: {color: "red"},
  17: {color: "black"},
  18: {color: "red"},
  19: {color: "red"},
  20: {color: "black"},
  21: {color: "red"},
  22: {color: "black"},
  23: {color: "red"},
  24: {color: "black"},
  25: {color: "red"},
  26: {color: "black"},
  27: {color: "red"},
  28: {color: "black"},
  29: {color: "black"},
  30: {color: "red"},
  31: {color: "black"},
  32: {color: "red"},
  33: {color: "black"},
  34: {color: "red"},
  35: {color: "black"},
  36: {color: "red"},
};
console.log(rouletteNumbers);

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
    return {
      ...state,
      gameNumbers: [...state.gameNumbers, { number: gameNumber, tag, color: rouletteNumbers[gameNumber].color }],
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
