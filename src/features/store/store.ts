import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({});

const makeStore = () => {
  const store = configureStore({
    reducer: combinedReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat();
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper(makeStore);
