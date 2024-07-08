import { formatCurrency } from "../helpers";
import { useBalance } from "../hooks/useBalance";
import { GameActions, GameState } from "../reducers/gameReducer";

type BalanceProps = {
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
};

const Balance = ({ state, dispatch }: BalanceProps) => {
  const {
    balance,
    handleBalanceChange,
    handleBalanceSubmit,
    handleResetBalance,
  } = useBalance();

  return (
    <div className="moneySection">
      <h2>Balance</h2>
      <p className={`moneyNumber ${state.money < 0 && "colorRed"}`}>
        {formatCurrency(state.money)} COP
      </p>

      <form
        className="moneyForm"
        onSubmit={(e) => handleBalanceSubmit(e, dispatch)}
      >
        <input
          id="money"
          className="moneyInput"
          type="number"
          placeholder="type the amount to bet"
          onChange={handleBalanceChange}
          value={balance.money}
        />
        <button className="moneyButton">deposit</button>
      </form>
      <button
        className="moneyButton"
        onClick={() => handleResetBalance(dispatch)}
      >
        reset balance
      </button>
    </div>
  );
};

export default Balance;
