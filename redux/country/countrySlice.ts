import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries, fetchSingleCountry } from "./actions";

const counrtyList: any = {
  loading: false,
  data: [],
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: counrtyList,
  reducers: {},
  extraReducers: (builder) => {
    //allCountries
    builder.addCase(fetchAllCountries.pending, (state) => {
      return { ...state, error: null, data: [], loading: true };
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      return { ...state, error: null, data: action.payload, loading: false };
    });
    builder.addCase(fetchAllCountries.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
        data: [],
        loading: false,
      };
    });
  },
});

const singleCounrty: any = {
  loading: false,
  data: null,
  error: null,
};

const singleCountrySlice = createSlice({
  name: "countries",
  initialState: singleCounrty,
  reducers: {},
  extraReducers: (builder) => {
    //allCountries
    builder.addCase(fetchSingleCountry.pending, (state) => {
      return { ...state, error: null, data: null, loading: true };
    });
    builder.addCase(fetchSingleCountry.fulfilled, (state, action) => {
      return { ...state, error: null, data: action.payload, loading: false };
    });
    builder.addCase(fetchSingleCountry.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
        data: [],
        loading: false,
      };
    });
  },
});

const rootReducer = combineReducers({
  countries: countriesSlice.reducer,
  singleCounrty: singleCountrySlice.reducer,
});

export default rootReducer;
