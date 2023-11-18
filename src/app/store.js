import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { apiSlice } from "./services/apiSlice";
import checkReducer from '../features/availability/checkSlice';

// Configure Redux Persist
const persistConfig = {
    key: 'root',
    storage,
}

// Combine reducers
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer, // Reducer for API slice
    check: checkReducer // Reducer for 'check' slice
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disable serializability check
      }).concat(apiSlice.middleware),
    devTools: true
});

// Create a persistor
export const persistor = persistStore(store);
