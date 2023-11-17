import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./fatures/auth/authSlice";
import userSettingsReducer from "./fatures/userSettings/userSettingsSlice";
import { apiSlice } from "../api/apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  userSettings: userSettingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
