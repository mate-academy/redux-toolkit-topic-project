import type { AppThunk } from '../app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const positionSlice = createSlice({
  name: 'position',
  initialState: { x: 0, y: 0 },
  reducers: {
    moveLeft(position, { payload = 1 }: PayloadAction<number | void>) {
      position.x -= payload;
    },
    moveRight(position, { payload = 1 }: PayloadAction<number | void>) {
      position.x += payload;
    },
    moveUp(position, { payload = 1 }: PayloadAction<number | void>) {
      position.y -= payload;
    },
    moveDown(position, { payload = 1 }: PayloadAction<number | void>) {
      position.y += payload;
    },
  },
});

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function circle(delay: number): AppThunk<Promise<void>> {
  return async (dispatch) => {
    dispatch(positionSlice.actions.moveRight());
    await wait(delay);
    dispatch(positionSlice.actions.moveDown());
    await wait(delay);
    dispatch(positionSlice.actions.moveLeft());
    await wait(delay);
    dispatch(positionSlice.actions.moveUp());
  };
}
