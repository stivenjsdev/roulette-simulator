import { rouletteNumbers } from "../data/roulette";
import { PatronNumber, RouletteNumber } from "../types";

export type GameActions = {
  type: "ADD_NUMBER_TO_PATRON" | "PLAY_NUMBER" | "ADD_MONEY";
  payload: {
    patronNumber?: PatronNumber;
    gameNumber?: number;
    money?: number;
  };
};

type GameState = {
  patron: PatronNumber[];
  gameNumbers: Array<RouletteNumber>;
  money: number;
};

export const initialState: GameState = {
  patron: [],
  gameNumbers: [],
  money: 0,
};

export const gameReducer = (state: GameState, action: GameActions) => {
  if (action.type === "ADD_NUMBER_TO_PATRON") {
    const { patronNumber } = action.payload;
    if (
      patronNumber &&
      patronNumber.number !== 0 &&
      !state.patron.some((item) => item.number === patronNumber.number)
    ) {
      return {
        ...state,
        patron: [...state.patron, patronNumber],
      };
    }
  }

  if (action.type === "PLAY_NUMBER") {
    const { gameNumber } = action.payload;
    if (typeof gameNumber === "undefined") return state;
    const totalSpend = state.patron.reduce((acc, item) => acc + item.chip, 0);
    if (totalSpend > state.money) {
      alert("No tienes suficiente dinero para jugar");
      return state;
    }
    const patronNumber = state.patron.find(
      (item) => item.number === gameNumber
    );
    const tag = patronNumber ? "win" : "lose";
    const newGameNumber: RouletteNumber = {
      number: gameNumber,
      tag,
      color: rouletteNumbers[gameNumber].color,
      leftPosition: rouletteNumbers[gameNumber].leftPosition,
    };

    console.log(totalSpend);
    console.log(state.money);
    if (patronNumber) console.log(patronNumber!.chip * 35);
    console.log(totalSpend - state.money);

    return {
      ...state,
      gameNumbers: [...state.gameNumbers, newGameNumber],
      money:
        tag === "win" && patronNumber
          ? state.money + patronNumber.chip * 35
          : state.money - totalSpend,
    };
  }

  if (action.type === "ADD_MONEY") {
    if (!action.payload.money) return state;
    return {
      ...state,
      money: state.money + action.payload.money,
    };
  }

  return state;
};
