import { rouletteNumbers } from "../data/roulette";
import { useRoulette } from "../hooks/useRoulette";
import { GameActions, GameState } from "../reducers/gameReducer";

type RouletteTableProps = {
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
};

const RouletteTable = ({ state, dispatch }: RouletteTableProps) => {
  const { chipsValue, handleTableNumber, handleChipsChange } = useRoulette();

  return (
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
              checked={chipsValue === "500"}
              onChange={handleChipsChange}
            />
            <label htmlFor="500">500</label>

            <input
              type="radio"
              id="1000"
              name="chips"
              value="1000"
              checked={chipsValue === "1000"}
              onChange={handleChipsChange}
            />
            <label htmlFor="1000">1000</label>

            <input
              type="radio"
              id="2500"
              name="chips"
              value="2500"
              checked={chipsValue === "2500"}
              onChange={handleChipsChange}
            />
            <label htmlFor="2500">2500</label>

            <input
              type="radio"
              id="5000"
              name="chips"
              value="5000"
              checked={chipsValue === "5000"}
              onChange={handleChipsChange}
            />
            <label htmlFor="5000">5000</label>
          </fieldset>
        </form>

        <p>Total chips played: {state.patron.length}</p>
      </div>

      <div className="rouletteTable">
        {Object.entries(rouletteNumbers).map(([key, value]) => {
          if (key === "0" || key === "00") return null;
          return (
            <button
              key={key}
              className={`tableNumber ${value.color}`}
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
