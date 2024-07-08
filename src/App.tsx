import { useReducer, useState } from "react";
import Balance from "./components/Balance";
import { gameReducer, initialState } from "./reducers/gameReducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // state winning numbers form
  const [valueWinning, setValueWinning] = useState("");

  // state chips form
  const [valueChips, setValueChips] = useState("500");

  function handleTableNumber(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const tableNumber = parseInt(e.currentTarget.innerText);
    dispatch({
      type: "ADD_NUMBER_TO_PATRON",
      payload: {
        patronNumber: { number: tableNumber, chip: +valueChips },
      },
    });
  }

  function handleWinningChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueWinning(e.target.value);
  }

  function handleWinningSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (+valueWinning >= 0 && +valueWinning <= 36) {
      dispatch({
        type: "PLAY_NUMBER",
        payload: {
          gameNumber: +valueWinning,
        },
      });
    }
    setValueWinning("");
  }

  function handleChipsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueChips(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <header className="header">
        <h1>Roulette Simulator</h1>
      </header>

      <main className="main">
        <Balance state={state} dispatch={dispatch} />

        <div className="winningSection">
          <h2
            className={`winningTitle ${
              state.patron.length === 0 && "winningTitleDisabled"
            }`}
          >
            Winning Numbers
          </h2>
          <form className="winningForm" onSubmit={handleWinningSubmit}>
            <input
              className="winningNumberInput"
              type="number"
              placeholder="type the winning number"
              value={valueWinning}
              onChange={handleWinningChange}
              disabled={state.patron.length === 0}
            />
            <button
              className="winningNumberButton"
              disabled={state.patron.length === 0}
            >
              add
            </button>
          </form>
          <div className="showWinningNumber">
            <ul className="winningNumberContainer">
              {state.gameNumbers.map((item, index) => (
                <li
                  key={index}
                  className={`winningNumber ${item.tag === "win" && "green"} ${
                    item.color === "red" && "colorRed"
                  }`}
                >
                  <p>{item.number}</p>
                  <p>{item.tag}</p>
                  <p className="winningNumberLeftPosition">
                    {item.leftPosition}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tableSection">
          <h2>Roulette</h2>
          <div className="chipsContainer">
            <form className="chipsForm">
              <fieldset className="chipsRadioList">
                <input
                  type="radio"
                  id="500"
                  name="chips"
                  value="500"
                  checked={valueChips === "500"}
                  onChange={handleChipsChange}
                />
                <label htmlFor="500">500</label>

                <input
                  type="radio"
                  id="1000"
                  name="chips"
                  value="1000"
                  checked={valueChips === "1000"}
                  onChange={handleChipsChange}
                />
                <label htmlFor="1000">1000</label>

                <input
                  type="radio"
                  id="2500"
                  name="chips"
                  value="2500"
                  checked={valueChips === "2500"}
                  onChange={handleChipsChange}
                />
                <label htmlFor="2500">2500</label>

                <input
                  type="radio"
                  id="5000"
                  name="chips"
                  value="5000"
                  checked={valueChips === "5000"}
                  onChange={handleChipsChange}
                />
                <label htmlFor="5000">5000</label>
              </fieldset>

              {/* <input type="submit" value="Send" /> */}
            </form>

            <p>Total chips played: {state.patron.length}</p>
          </div>

          <div>
            <button className="tableNumber red" onClick={handleTableNumber}>
              1
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              2
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              3
            </button>
            <br />
            <button className="tableNumber black" onClick={handleTableNumber}>
              4
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              5
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              6
            </button>
            <br />
            <button className="tableNumber red" onClick={handleTableNumber}>
              7
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              8
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              9
            </button>
            <br />
            <button className="tableNumber black" onClick={handleTableNumber}>
              10
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              11
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              12
            </button>
          </div>

          <hr />

          <div>
            <button className="tableNumber black" onClick={handleTableNumber}>
              13
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              14
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              15
            </button>
            <br />
            <button className="tableNumber red" onClick={handleTableNumber}>
              16
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              17
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              18
            </button>
            <br />
            <button className="tableNumber red" onClick={handleTableNumber}>
              19
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              20
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              21
            </button>
            <br />
            <button className="tableNumber  black" onClick={handleTableNumber}>
              22
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              23
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              24
            </button>
          </div>

          <hr />

          <div>
            <button className="tableNumber red" onClick={handleTableNumber}>
              25
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              26
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              27
            </button>
            <br />
            <button className="tableNumber black" onClick={handleTableNumber}>
              28
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              29
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              30
            </button>
            <br />
            <button className="tableNumber black" onClick={handleTableNumber}>
              31
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              32
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              33
            </button>
            <br />
            <button className="tableNumber red" onClick={handleTableNumber}>
              34
            </button>
            <button className="tableNumber black" onClick={handleTableNumber}>
              35
            </button>
            <button className="tableNumber red" onClick={handleTableNumber}>
              36
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
