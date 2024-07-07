import { useReducer, useState } from "react";
import { formatCurrency } from './helpers/index';
import { gameReducer, initialState } from "./reducers/gameReducer";

const InitialMoneyState = {
  money: "",
  moneyWin: "",
  moneyLose: "",
}

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // state winning numbers form
  const [valueWinning, setValueWinning] = useState("");

  // state money form
  const [valueMoney, setValueMoney] = useState(InitialMoneyState);

  function handleTableNumber(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const tableNumber = parseInt(e.currentTarget.innerText);
    dispatch({
      type: "ADD_NUMBER_TO_PATRON",
      payload: {
        patronNumber: tableNumber,
      },
    });
  }

  function handleWinningChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueWinning(e.target.value);
  }

  function handleWinningSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (+valueWinning > 0 && +valueWinning <= 36) {
      dispatch({
        type: "PLAY_NUMBER",
        payload: {
          gameNumber: +valueWinning,
        },
      });
    }
    setValueWinning("");
  }

  function handleMoneyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueMoney({
      ...valueMoney,
      [e.target.id]: e.target.value,
    });
  }

  function handleMoneySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      +valueMoney.money > 0 &&
      +valueMoney.moneyWin > 0 &&
      +valueMoney.moneyLose > 0
    ) {
      dispatch({
        type: "ADD_MONEY",
        payload: {
          money: {
            money: +valueMoney.money,
            moneyWin: +valueMoney.moneyWin,
            moneyLose: +valueMoney.moneyLose,
          },
        },
      });
    }
    setValueMoney(InitialMoneyState);
  }

  return (
    <>
      <header className="header">
        <h1>Roulette Simulator</h1>
      </header>

      <main className="main">
        <div className="moneySection">
          <h2>Money</h2>
          <p className={`moneyNumber ${state.money < 0 && 'colorRed'}`}>{formatCurrency(state.money)} COP</p>
          <p>Money win: + {formatCurrency(state.moneyWin)}</p>
          <p>Money lose: - {formatCurrency(state.moneyLose)}</p>

          <form className="moneyForm" onSubmit={handleMoneySubmit}>
            <input
              id="money"
              className="moneyInput"
              type="number"
              placeholder="type the amount to bet"
              onChange={handleMoneyChange}
              value={valueMoney.money}
            />
            <input
              id="moneyWin"
              className="moneyWinInput"
              type="number"
              placeholder="type the amount when win"
              onChange={handleMoneyChange}
              value={valueMoney.moneyWin}
            />
            <input
              id="moneyLose"
              className="moneyLoseInput"
              type="number"
              placeholder="type the amount when lose"
              onChange={handleMoneyChange}
              value={valueMoney.moneyLose}
            />
            <button className="moneyButton">bet</button>
          </form>
        </div>

        <div className="winningSection">
          <h2 className={`winningTitle ${state.patron.length === 0 && 'winningTitleDisabled'}`}>Winning Numbers</h2>
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
                <li key={index} className="winningNumber">
                  <p>{item.number}</p>
                  <p>{item.tag}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tableSection">
          <h2>Roulette</h2>
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
