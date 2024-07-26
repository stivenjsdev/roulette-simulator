import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }

  return context;
};
