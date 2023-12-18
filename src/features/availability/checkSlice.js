import { createSlice } from '@reduxjs/toolkit';

const checkSlice = createSlice({
  name: 'check',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setData: (state, {payload}) => {
      state.data = payload;
    },
    setError: (state, {payload}) => {
      state.error = payload;
    },
  },
});

export const { setData, setError } = checkSlice.actions;
export default checkSlice.reducer;

export const searchedData = (state) => state?.check?.data;