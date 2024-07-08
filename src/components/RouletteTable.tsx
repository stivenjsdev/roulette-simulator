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

          {/* <input type="submit" value="Send" /> */}
        </form>

        <p>Total chips played: {state.patron.length}</p>
      </div>

      <div>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          1
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          2
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          3
        </button>
        <br />
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          4
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          5
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          6
        </button>
        <br />
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          7
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          8
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          9
        </button>
        <br />
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          10
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          11
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          12
        </button>
      </div>

      <hr />

      <div>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          13
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          14
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          15
        </button>
        <br />
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          16
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          17
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          18
        </button>
        <br />
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          19
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          20
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          21
        </button>
        <br />
        <button
          className="tableNumber  black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          22
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          23
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          24
        </button>
      </div>

      <hr />

      <div>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          25
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          26
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          27
        </button>
        <br />
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          28
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          29
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          30
        </button>
        <br />
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          31
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          32
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          33
        </button>
        <br />
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          34
        </button>
        <button
          className="tableNumber black"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          35
        </button>
        <button
          className="tableNumber red"
          onClick={(e) => handleTableNumber(e, dispatch)}
        >
          36
        </button>
      </div>
    </div>
  );
};

export default RouletteTable;
