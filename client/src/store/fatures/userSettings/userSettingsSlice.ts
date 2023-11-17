import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUserSettingsInitialState {
  isBurgerMenuOpen: boolean;
}

const userSettingsInitialState: IUserSettingsInitialState = {
  isBurgerMenuOpen: false,
};

export const authSlice = createSlice({
  name: "userSettings",
  initialState: userSettingsInitialState,
  reducers: {
    setIsBurgerMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isBurgerMenuOpen = action.payload;
    },
  },
});

export const allUserSettingsProperties = (state: RootState) => state.userSettings;
export const { setIsBurgerMenuOpen } = authSlice.actions;

export default authSlice.reducer;
