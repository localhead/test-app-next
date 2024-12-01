import { authSlice } from "@features/auth/store/slices";
import { countriesApi } from "@features/countries/store/apiService";
import { langSlice } from "@features/languages/store/slices";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [countriesApi.reducerPath]: countriesApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [langSlice.name]: langSlice.reducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer: combinedReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(countriesApi.middleware);
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper(makeStore);
