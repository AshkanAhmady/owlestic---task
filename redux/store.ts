import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./country/countrySlice";

export const store = configureStore({
  reducer: {
    allSlices: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
