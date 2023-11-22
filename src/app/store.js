import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import bookingReducer from "../features/booking/bookingSlice";

const store = configureStore({
    reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer, 
            cart: cartReducer,
            booking:  bookingReducer
        },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;