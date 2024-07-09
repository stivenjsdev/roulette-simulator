import { useWinningNumbers } from "../hooks/useWinningNumbers";
import { GameActions, GameState } from "../reducers/gameReducer";

type WinningNumbersProps = {
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
};

const WinningNumbers = ({ state, dispatch }: WinningNumbersProps) => {
  const {
    winningNumberValue,
    handleWinningNumberChange,
    handleWinningNumberSubmit,
    handleGenerateWinningNumber,
  } = useWinningNumbers();

  return (
    <div className="winningSection">
      <h2
        className={`winningTitle ${
          state.patron.length === 0 && "winningTitleDisabled"
        }`}
      >
        Winning Numbers
      </h2>
      <form
        className="winningForm"
        onSubmit={(e) => handleWinningNumberSubmit(e, dispatch)}
      >
        <input
          className="winningNumberInput"
          type="number"
          placeholder="type the winning number"
          value={winningNumberValue}
          onChange={handleWinningNumberChange}
          disabled={state.patron.length === 0}
        />
        <button
          className="winningNumberButton"
          disabled={state.patron.length === 0}
        >
          add
        </button>
      </form>

      <button
        className="generateWinningNumberButton"
        onClick={() => handleGenerateWinningNumber(dispatch)}
      >
        generate
      </button>

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
              <p className="winningNumberCount">{item.count}</p>
              <p className="winningNumberLeftPosition">{item.leftPosition}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WinningNumbers;
