import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { amountSlice } from '../features/amount';
import { positionSlice } from '../features/position';
import { goodsSlice } from '../features/goods';

const rootReducer = combineSlices(amountSlice, positionSlice, goodsSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
