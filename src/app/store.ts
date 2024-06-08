import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as amountReducer } from '../features/amount';

const rootReducer = combineReducers({
  amount: amountReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
