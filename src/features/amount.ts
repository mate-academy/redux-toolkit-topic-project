import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    addMoney: (amount, action: PayloadAction<number>) => amount + action.payload,
    takeMoney: (amount, action: PayloadAction<number>) => amount - action.payload,
    clearBalance: () => 0,
  },
});
