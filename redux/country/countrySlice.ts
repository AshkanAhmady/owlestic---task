import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries, fetchSingleCountry } from "./actions";

const counrtyList: any = {
  loading: false,
  data: [],
  error: null,
  filterCountries: [],
  selectedOption: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: counrtyList,
  reducers: {
    searchCountryName: (state, action) => {
      // filter products befor search
      let updatedCountries;
      if (state.selectedOption == null) {
        updatedCountries = state.data;
      } else {
        updatedCountries = state.data.filter((country: any) => {
          return country.region
            .toLowerCase()
            .includes(state.selectedOption.toLowerCase());
        });
      }

      let searched = updatedCountries.filter((county: any) =>
        action.payload
          .split("")
          .every((item: string) => county.name.includes(item))
      );
      state.filterCountries = searched;
    },
    filterByRegion: (state, action) => {
      if (action.payload.value === "") {
        state.filterCountries = state.data;
      }
      let updatedCountries = state.data.filter((country: any) => {
        return country.region
          .toLowerCase()
          .includes(action.payload.value.toLowerCase());
      });

      state.filterCountries = updatedCountries;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    //allCountries
    builder.addCase(fetchAllCountries.pending, (state) => {
      return { ...state, error: null, data: [], loading: true };
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      return {
        ...state,
        error: null,
        data: action.payload,
        filterCountries: action.payload,
        loading: false,
      };
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

export const { searchCountryName, filterByRegion, setSelectedOption } =
  countriesSlice.actions;
export default rootReducer;
