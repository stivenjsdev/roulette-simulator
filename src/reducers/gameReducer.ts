import { rouletteNumbers } from "../data/roulette";
import { generateRandomNumber } from "../helpers";
import { PatternNumber, RouletteNumber } from "../types";

export type GameActions = {
  type:
    | "ADD_NUMBER_TO_PATRON"
    | "CLEAR_PATRON"
    | "PLAY_NUMBER"
    | "PLAY_NUMBER_GENERATED"
    | "ADD_MONEY"
    | "RESET_MONEY";
  payload?: {
    patternNumber?: PatternNumber;
    gameNumber?: number;
    money?: number;
  };
};

export type GameState = {
  pattern: PatternNumber[];
  gameNumbers: Array<RouletteNumber>;
  money: number;
};

export const initialState: GameState = {
  pattern: [],
  gameNumbers: [],
  money: 0,
};

export const gameReducer = (state: GameState, action: GameActions) => {
  if (action.type === "ADD_NUMBER_TO_PATRON") {
    if (!action.payload || !action.payload.patternNumber) return state;

    const { patternNumber } = action.payload;

    const patternNumberExist = state.pattern.some(
      (item) => item.number === patternNumber.number
    );

    return !patternNumberExist
      ? {
          ...state,
          pattern: [...state.pattern, patternNumber],
        }
      : state;
  }

  if (action.type === "CLEAR_PATRON") {
    return {
      ...state,
      pattern: [],
    };
  }

  if (action.type === "PLAY_NUMBER") {
    if (!action.payload || typeof action.payload.gameNumber === "undefined")
      return state;

    const { gameNumber: number } = action.payload;
    const totalSpend = state.pattern.reduce((acc, item) => acc + item.chip, 0);
    const patternNumber = state.pattern.find((i) => i.number === number);
    const tag = patternNumber ? "win" : "lose";
    const count =
      state.gameNumbers.filter((i) => i.number === number).length + 1;

    if (totalSpend > state.money) {
      alert("You don't have enough money to play");
      return state;
    }

    const newGameNumber: RouletteNumber = {
      number,
      tag,
      color: rouletteNumbers[number].color,
      leftPosition: rouletteNumbers[number].leftPosition,
      count,
    };

    // todo: remove console.log
    console.log("total spend", totalSpend);
    console.log("last state money", state.money);
    console.log("total win", patternNumber ? patternNumber.chip * 35 : 0);

    return {
      ...state,
      gameNumbers: [...state.gameNumbers, newGameNumber],
      money:
        tag === "win" && patternNumber
          ? state.money + patternNumber.chip * 35
          : state.money - totalSpend,
    };
  }

  if (action.type === "PLAY_NUMBER_GENERATED") {
    const number = generateRandomNumber(0, 36);
    const totalSpend = state.pattern.reduce((acc, item) => acc + item.chip, 0);
    const patternNumber = state.pattern.find((i) => i.number === number);
    const tag = patternNumber ? "win" : "lose";
    const count =
      state.gameNumbers.filter((i) => i.number === number).length + 1;

    if (totalSpend > state.money) {
      alert("You don't have enough money to play");
      return state;
    }

    const newGameNumber: RouletteNumber = {
      number,
      tag,
      color: rouletteNumbers[number].color,
      leftPosition: rouletteNumbers[number].leftPosition,
      count,
    };

    return {
      ...state,
      gameNumbers: [...state.gameNumbers, newGameNumber],
      money:
        tag === "win" && patternNumber
          ? state.money + patternNumber.chip * 35
          : state.money - totalSpend,
    };
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
