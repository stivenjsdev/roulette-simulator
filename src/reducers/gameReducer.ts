import { rouletteNumbers } from "../data/roulette";
import { generateRandomNumber } from "../helpers";
import { PatronNumber, RouletteNumber } from "../types";

export type GameActions = {
  type: "ADD_NUMBER_TO_PATRON" | "CLEAR_PATRON" | "PLAY_NUMBER" | "PLAY_NUMBER_GENERATED" | "ADD_MONEY" | "RESET_MONEY";
  payload?: {
    patronNumber?: PatronNumber;
    gameNumber?: number;
    money?: number;
  };
};

export type GameState = {
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
    if (!action.payload) return state;
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

  if (action.type === "CLEAR_PATRON") {
    return {
      ...state,
      patron: [],
    };
  }

  if (action.type === "PLAY_NUMBER") {
    if (!action.payload || typeof action.payload.gameNumber === "undefined") return state;
    const { gameNumber } = action.payload;
    const totalSpend = state.patron.reduce((acc, item) => acc + item.chip, 0);
    if (totalSpend > state.money) {
      alert("You don't have enough money to play");
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

    // todo: remove console.log
    console.log("total spend", totalSpend);
    console.log("last state money", state.money);
    if (patronNumber) console.log("total win", patronNumber.chip * 35);

    return {
      ...state,
      gameNumbers: [...state.gameNumbers, newGameNumber],
      money:
        tag === "win" && patronNumber
          ? state.money + patronNumber.chip * 35
          : state.money - totalSpend,
    };
  }

  if (action.type === "PLAY_NUMBER_GENERATED") {
    const number = generateRandomNumber(0, 36);
    const totalSpend = state.patron.reduce((acc, item) => acc + item.chip, 0);
    if (totalSpend > state.money) {
      alert("You don't have enough money to play");
      return state;
    }
    const patronNumber = state.patron.find(
      (item) => item.number === number
    );
    const tag = patronNumber ? "win" : "lose";
    const newGameNumber: RouletteNumber = {
      number,
      tag,
      color: rouletteNumbers[number].color,
      leftPosition: rouletteNumbers[number].leftPosition,
    };
    return {
      ...state,
      gameNumbers: [...state.gameNumbers, newGameNumber],
      money: 
        tag === "win" && patronNumber
          ? state.money + patronNumber.chip * 35
          : state.money - totalSpend,
    }
  }

  if (action.type === "ADD_MONEY") {
    if (!action.payload || !action.payload.money) return state;
    return {
      ...state,
      money: state.money + action.payload.money,
    };
  }

  if (action.type === "RESET_MONEY") {
    return {
      ...state,
      money: 0,
    };
  }

  return state;
};
