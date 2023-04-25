import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import countryReducer from "./country/countrySlice";
import createWrapper from "next-redux-wrapper";
import { Action } from "redux";

const makeStore = () =>
  configureStore({
    reducer: {
      countries: countryReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
