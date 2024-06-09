import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Good, goodsSlice } from '../features/goods';

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');
  const { goods } = useAppSelector(state => state.goods);
  const dispatch = useAppDispatch();

  const addGood = (good: Good) => {
    dispatch(goodsSlice.actions.addGood(good));
  }

  const removeGood = (good: Good) => {
    dispatch(goodsSlice.actions.removeGood(good));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newGood) return;
    addGood(newGood);
    setNewGood('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
