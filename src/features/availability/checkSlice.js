import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkData: [],
    lastUpdatedCheck: null,
}

const checkSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        checkAvailable: (state,{payload}) => {
            console.log(payload);
            return {
                ...state,
                checkData: [...state.checkData,payload],
                lastUpdatedCheck: payload
            }
        }
    }
})

export const {checkAvailable} = checkSlice.actions;

export default checkSlice.reducer;

export const allCheckData = (state) => state.check.checkData;

export const lastUpdatedCheck = (state) => state.check.lastUpdatedCheck;
