import { useReducer } from "react";
import Balance from "./components/Balance";
import RouletteTable from "./components/RouletteTable";
import WinningNumbers from "./components/WinningNumbers";
import { gameReducer, initialState } from "./reducers/gameReducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <>
      <header className="header">
        <h1>Roulette Simulator</h1>
      </header>

      <main className="main">
        <Balance state={state} dispatch={dispatch} />

        <WinningNumbers state={state} dispatch={dispatch} />

        <RouletteTable state={state} dispatch={dispatch} />
      </main>
    </>
  );
}

export default App;
