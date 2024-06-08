import { amountSlice } from '../features/amount';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const Amount = () => {
  const dispatch = useAppDispatch();
  const amount = useAppSelector(state => state.amount);

  const take = (value: number) => {
    dispatch(amountSlice.actions.takeMoney(value));
  };

  const add = (value: number) => {
    dispatch(amountSlice.actions.addMoney(value));
  };

  const clear = () => {
    dispatch(amountSlice.actions.clearBalance());
  };

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
