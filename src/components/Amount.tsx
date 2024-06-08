import { useState } from 'react';

export const Amount = () => {
  const [amount, setAmount] = useState(0);

  const take = (value: number) => {
    setAmount(current => current - value);
  };

  const add = (value: number) => {
    setAmount(current => current + value);
  };

  const clear = () => setAmount(0);

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
