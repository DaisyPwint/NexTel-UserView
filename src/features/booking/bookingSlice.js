import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details : null,
    userInfo : null,
    bookingData: null
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
        } ,
        addBookingData : (state,{payload}) => {
            return {
                ...state,
                bookingData: payload
            }
        }
    }
})

export const {setBookingDetail,addUserInfo,addBookingData} = bookingSlice.actions;

export default bookingSlice.reducer;


