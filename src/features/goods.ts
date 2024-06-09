import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Good = string;

const initialState = {
  loading: false,
  goods: [] as Good[],
  error: '',
};

export const loadGoods = createAsyncThunk(
  'goods/fetch', // префікс для `action.type`
  async () => {
    // будь-яка асинхронна логіка
    return [] as Good[];
  },
);

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addGood(state, { payload }: PayloadAction<string>) {
      state.goods.push(payload);
    },
    removeGood(state, { payload }: PayloadAction<string>) {
      state.goods = state.goods.filter(good => good !== payload);
    },
    clearGoods(state) {
      state.goods = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(loadGoods.pending, (state) => {
      state.error = '';
      state.loading = true;
    });

    builder.addCase(loadGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loading = false;
    });

    builder.addCase(loadGoods.rejected, (state, action) => {
      state.error = action.error.message || '';
      state.loading = false;
    });
  },
});
