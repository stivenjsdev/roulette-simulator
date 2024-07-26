import Balance from "./components/Balance";
import RouletteTable from "./components/RouletteTable";
import WinningNumbers from "./components/WinningNumbers";

function App() {
  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <h1>Roulette Simulator</h1>
        </div>
      </header>

      <main className="main">
        <Balance />

        <WinningNumbers />

        <RouletteTable />
      </main>
    </>
  );
}

export default App;
