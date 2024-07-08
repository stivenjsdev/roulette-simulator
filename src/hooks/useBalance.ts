import { useState } from "react";
import { GameActions } from "../reducers/gameReducer";

type BalanceState = {
  money: string | number;
};

const initialBalanceState: BalanceState = {
  money: "",
};

export function useBalance() {
  const [balance, setBalance] = useState(initialBalanceState);

  function handleBalanceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBalance({
      ...balance,
      [e.target.id]: e.target.value,
    });
  }

  function handleBalanceSubmit(
    e: React.FormEvent<HTMLFormElement>,
    dispatch: React.Dispatch<GameActions>
  ) {
    e.preventDefault();
    if (+balance.money > 0) {
      dispatch({
        type: "ADD_MONEY",
        payload: {
          money: +balance.money,
        },
      });
    }
    setBalance(initialBalanceState);
  }

  function handleResetBalance(dispatch: React.Dispatch<GameActions>) {
    dispatch({
      type: "RESET_MONEY",
    });
    setBalance(initialBalanceState);
  }

  return {
    balance,
    handleBalanceChange,
    handleBalanceSubmit,
    handleResetBalance,
  };
}
