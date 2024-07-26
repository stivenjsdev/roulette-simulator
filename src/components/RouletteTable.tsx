import { chips, rouletteNumbers } from "../data/roulette";
import { useGame } from "../hooks/useGame";
import { useRoulette } from "../hooks/useRoulette";

const RouletteTable = () => {
  const { state, dispatch } = useGame();
  const { chipsValue, handleTableNumber, handleChipsChange, handleClearChips } =
    useRoulette();

  return (
    <div className="tableSection">
      <div className="chipsContainer">
        <h2>Roulette Chip</h2>
        <form className="chipsForm">
          <fieldset className="chipsRadioList">
            {chips.map((chip, index) => (
              <div key={index} className="chipRadio">
                <input
                  type="radio"
                  id={chip}
                  name="chips"
                  value={chip}
                  checked={chipsValue === chip}
                  onChange={handleChipsChange}
                />
                <label htmlFor={chip}>{chip}</label>
              </div>
            ))}
          </fieldset>
        </form>

        <p>Total chips played: {state.pattern.length}</p>

        <button
          className="clearRouletteTableButton"
          onClick={() => handleClearChips(dispatch)}
        >
          clean the table
        </button>
      </div>

      <div className="rouletteTable">
        {Object.entries(rouletteNumbers).map(([key, value]) => {
          if (key === "0" || key === "00") return null;
          return (
            <button
              key={key}
              className={`tableNumber ${value.color} ${
                state.pattern.some((i) => i.number === +key) && "gold-border"
              }`}
              onClick={(e) => handleTableNumber(e, dispatch)}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RouletteTable;
