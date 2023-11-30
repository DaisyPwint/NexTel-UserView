import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details : null,
    userInfo : null,
    successData: null
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingDetail: (state,{payload}) => {
            return {
                ...state,
                details: payload
            }
        },
        addUserInfo : (state,{payload}) => {
            return {
                ...state,
                userInfo : payload
            }
        } 
    }
})

export const {setBookingDetail,addUserInfo} = bookingSlice.actions;

export default bookingSlice.reducer;


