export type GameActions = {
  type: "ADD_NUMBER_TO_PATRON" | "PLAY_NUMBER" | "ADD_MONEY";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
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
    if (
      action.payload !== 0 &&
      !state.patron.includes(action.payload as number)
    ) {
      return {
        ...state,
        patron: [...state.patron, action.payload],
      };
    }
  }

  if (action.type === "PLAY_NUMBER") {
    const tag = state.patron.includes(action.payload as number)
      ? "win"
      : "lose";
    const gameNumber = { number: action.payload, tag };
    return {
      ...state,
      gameNumbers: [...state.gameNumbers, gameNumber],
      money:
        tag === "win"
          ? action.payload === 32 ||
            action.payload === 26 ||
            action.payload === 23
            ? state.money + 500 * 18 - 3500
            : state.money + state.moneyWin
          : state.money - state.moneyLose,
    };
  }

  if (action.type === "ADD_MONEY") {
    console.log("action");
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
