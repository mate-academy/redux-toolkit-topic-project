import { PayloadAction, asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

export type Good = string;

const initialState = {
  loading: false,
  goods: [] as Good[],
  error: '',
};

// `buildCreateSlice` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const goodsSlice = createAppSlice({
  name: 'goods',
  initialState,
  reducers(create) {
    return {
      addGood: create.reducer((state, { payload }: PayloadAction<Good>) => {
        state.goods.push(payload);
      }),
      removeGood: create.reducer((state, { payload }: PayloadAction<Good>) => {
        state.goods = state.goods.filter(good => good !== payload);
      }),
      clearGoods: create.reducer((state) => {
        state.goods = [];
      }),
      loadGoods: create.asyncThunk(
        async () => {
          // будь-яка асинхронна логіка
          return [] as Good[];
        },
        {
          pending: (state) => {
            state.loading = true
          },
          rejected: (state, action) => {
            state.error = action.error.message ?? String(action.payload)
          },
          fulfilled: (state, action) => {
            state.goods = action.payload;
          },
          // settled is called for both rejected and fulfilled actions
          settled: (state) => {
            state.loading = false;
          },
        }
      )
    };
  },
});
