import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthInitialState {
  token: null | string;
  isUserLoggedIn: boolean;
  isRegistering: boolean;
  isAuthButtonsVisible: boolean;
}

const authInitialState: AuthInitialState = {
  token: null,
  isUserLoggedIn: false,
  isRegistering: false,
  isAuthButtonsVisible: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      const accessToken = action.payload;
      state.token = accessToken;
    },
    setIsRegistering: (state, action: PayloadAction<boolean>) => {
      state.isRegistering = action.payload;
    },
    setIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
    setIsAuthButtonsVisible: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const allAuthStateProperties = (state: RootState) => state.auth;
export const { setCredentials, setIsRegistering, setIsUserLoggedIn, setIsAuthButtonsVisible } =
  authSlice.actions;

export default authSlice.reducer;
