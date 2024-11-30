import type { Action, ThunkAction } from "@reduxjs/toolkit";
import type { AppStore } from "./store";

export type AppDispatch = AppStore["dispatch"];

export type AppRootState = ReturnType<AppStore["getState"]>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;
