import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import bookingReducer from "../features/booking/bookingSlice";
import typeReducer from "../features/roomType/typeSlice";
import checkReducer from "../features/availability/checkSlice";

const store = configureStore({
    reducer: {
            cart: cartReducer,
            booking:  bookingReducer,
            type: typeReducer,
            check: checkReducer
        },
    devTools: true
});

export default store;