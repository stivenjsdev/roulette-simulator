import { formatCurrency } from "../helpers/index";
import { useGame } from "../hooks/useGame";
import { useWinningNumbers } from "../hooks/useWinningNumbers";

const WinningNumbers = () => {
  const { state, dispatch } = useGame();

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
          state.pattern.length === 0 && "winningTitleDisabled"
        }`}
      >
        Winning Numbers
      </h2>
      <h2
        className={`winningTitle ${
          state.pattern.length === 0 && "winningTitleDisabled"
        }`}
      >
        {formatCurrency(state.money)}
      </h2>
      <div className="winningFormContainer">
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
            disabled={state.pattern.length === 0}
          />
          <button
            className="winningNumberButton"
            disabled={state.pattern.length === 0}
          >
            add
          </button>
        </form>
      </div>

      <button
        className="generateWinningNumberButton"
        onClick={() => handleGenerateWinningNumber(dispatch)}
      >
        generate
      </button>

      {state.gameNumbers.length > 0 && (
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
                {item.count !== 1 && (
                  <p className="winningNumberCount">{item.count}</p>
                )}
                <p className="winningNumberLeftPosition">{item.leftPosition}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WinningNumbers;
