import { chips, rouletteNumbers } from "../data/roulette";
import { useRoulette } from "../hooks/useRoulette";
import { GameActions, GameState } from "../reducers/gameReducer";

type RouletteTableProps = {
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
};

const RouletteTable = ({ state, dispatch }: RouletteTableProps) => {
  const { chipsValue, handleTableNumber, handleChipsChange, handleClearChips } =
    useRoulette();

  return (
    <div className="tableSection">
      <h2>Roulette</h2>
      <div className="chipsContainer">
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

        <p>Total chips played: {state.patron.length}</p>

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
                state.patron.some((i) => i.number === +key) && "gold-border"
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
