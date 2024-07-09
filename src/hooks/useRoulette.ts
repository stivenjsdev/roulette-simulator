import { useState } from "react";
import { GameActions } from "../reducers/gameReducer";

export function useRoulette() {
  const [chipsValue, setChipsValue] = useState("500");

  function handleTableNumber(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dispatch: React.Dispatch<GameActions>
  ) {
    const tableNumber = parseInt(e.currentTarget.innerText);
    dispatch({
      type: "ADD_NUMBER_TO_PATRON",
      payload: {
        patternNumber: { number: tableNumber, chip: +chipsValue },
      },
    });
  }

  function handleChipsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChipsValue(e.target.value);
    console.log(e.target.value);
  }

  function handleClearChips(dispatch: React.Dispatch<GameActions>) {
    dispatch({ type: "CLEAR_PATRON" });
  }

  return { chipsValue, handleTableNumber, handleChipsChange, handleClearChips };
}
