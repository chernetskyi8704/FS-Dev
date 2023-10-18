import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./fatures/auth/authSlice";
import { apiSlice } from "../api/apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
