import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  GameActions,
  gameReducer,
  GameState,
  initialState,
} from "../reducers/gameReducer";

type GameContextType = {
  state: GameState;
  dispatch: Dispatch<GameActions>;
};

type GameProviderProps = {
  children: ReactNode;
};

export const GameContext = createContext<GameContextType>(null!);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
