import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export default sliceFilter.reducer;

export const { changeFilter } = sliceFilter.actions;
