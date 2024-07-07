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
  gameNumbers: { number: number; tag: string }[];
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
      gameNumbers: [...state.gameNumbers, { number: gameNumber, tag }],
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
