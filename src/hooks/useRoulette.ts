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
        patronNumber: { number: tableNumber, chip: +chipsValue },
      },
    });
  }

  function handleChipsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChipsValue(e.target.value);
    console.log(e.target.value);
  }

  return { chipsValue, handleTableNumber, handleChipsChange };
}
