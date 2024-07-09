import { useState } from "react";
import { GameActions } from "../reducers/gameReducer";

type WinningNumberState = string;

export function useWinningNumbers() {
  const [winningNumberValue, setWinningNumberValue] =
    useState<WinningNumberState>("");

  function handleWinningNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWinningNumberValue(e.target.value);
  }

  function handleWinningNumberSubmit(
    e: React.FormEvent<HTMLFormElement>,
    dispatch: React.Dispatch<GameActions>
  ) {
    e.preventDefault();
    if (+winningNumberValue >= 0 && +winningNumberValue <= 36) {
      dispatch({
        type: "PLAY_NUMBER",
        payload: {
          gameNumber: +winningNumberValue,
        },
      });
    }
    setWinningNumberValue("");
  }

  function handleGenerateWinningNumber(dispatch: React.Dispatch<GameActions>) {
    dispatch({
      type: "PLAY_NUMBER_GENERATED",
    });
  }

  return {
    winningNumberValue,
    handleWinningNumberChange,
    handleWinningNumberSubmit,
    handleGenerateWinningNumber,
  };
}
