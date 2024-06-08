import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Good = string;

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: [] as Good[],
  reducers: {
    addGood(goods, { payload }: PayloadAction<string>) {
      goods.push(payload);
    },
    removeGood(goods, { payload }: PayloadAction<string>) {
      return goods.filter(good => good !== payload);
    },
    clearGoods: () => [],
  },
});
