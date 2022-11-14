import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {
    field: "date",
    asc: true,
  },
};

export const sortSilce = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (state, action) => {
      if (state.sort.field !== action.payload.fieldName) {
        state.sort = { field: action.payload.fieldName, asc: false };
      } else {
        state.sort.asc = !state.sort.asc;
      }
      if (typeof action.payload.asc === "boolean")
        state.sort.asc = action.payload.asc;
      state.currentPage = 1;
    },
  },
});

export const { setSort } = sortSilce.actions;
export default sortSilce.reducer;
