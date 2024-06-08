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
