import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState: any = {
  loading: false,
  data: [],
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return { ...state, error: null, data: [], loading: true };
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAllCountries.pending, (state) => {
  //     return { ...state, error: null, data: [], loading: true };
  //   });
  //   builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
  //     console.log(action);
  //     return { ...state, error: null, data: action.payload, loading: false };
  //   });
  //   builder.addCase(fetchAllCountries.rejected, (state, action) => {
  //     return {
  //       ...state,
  //       error: action.error.message,
  //       data: [],
  //       loading: false,
  //     };
  //   });
  // },
});

export default countrySlice.reducer;
