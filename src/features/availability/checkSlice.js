// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     lastUpdatedCheck: null,
// }

// const checkSlice = createSlice({
//     name: 'check',
//     initialState,
//     reducers: {
//         checkAvailable: (state,{payload}) => {
//             return {
//                 ...state,
//                 lastUpdatedCheck: payload
//             }
//         }
//     }
// })

// export const {checkAvailable} = checkSlice.actions;

// export default checkSlice.reducer;

// export const lastUpdatedCheck = (state) => state.check.lastUpdatedCheck;

// checkApiSlice.js

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
