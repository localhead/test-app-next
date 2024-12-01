import { AuthData, AuthState } from "./types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialAuthState: AuthState = {
  isAuth: false,
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState as AuthState,

  reducers: {
    setAuthDataInStorage: (_: AuthState, action: PayloadAction<AuthData>) => {
      return {
        isAuth: action.payload.isAuth,
        email: action.payload.email,
      } as AuthState;
    },

    clearAuthDataInStorage: () => {
      return {
        isAuth: false,
        email: "",
      } as AuthState;
    },
  },
});
