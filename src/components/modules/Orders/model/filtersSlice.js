import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filter: {
    startDate: "",
    endDate: "",
    selectedStatuses: "",
    startAmount: "",
    endAmount: "",
  },
  currentPage: 1,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
      state.currentPage = 1;
    },

    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setFilter, setSearch, setPage } = filtersSlice.actions;
export default filtersSlice.reducer;
