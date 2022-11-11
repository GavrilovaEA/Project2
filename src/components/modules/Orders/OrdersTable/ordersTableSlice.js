import { createSlice } from "@reduxjs/toolkit";
import { loadOrders, STATUS_LIST } from "../../../../dbase/data";

const initialState = {
  ordersList: loadOrders(),
  search: "",
  filter: {
    startDate: "",
    endDate: "",
    selectedStatuses: "",
    startAmount: "",
    endAmount: "",
  },
  sort: {
    field: "date",
    asc: true,
  },
  paginator: {
    count: 1,
    current: 1,
  },
};

export const ordersTableSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.paginator = { ...state.paginator, current: 1 };
    },
    setFilter: (state, action) => {
      state.filter = {
        ...state.filter,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        selectedStatuses: action.payload.selectedStatuses,
        startAmount: action.payload.startAmount,
        endAmount: action.payload.endAmount,
      };
      state.paginator = { ...state.paginator, current: 1 };
    },
    //
    // applyFilter: (state, action) => {
    //   state.paginator = {...state.paginator, current: 1};
    //
    // },

    setSort: (state, action) => {
      if (state.sort.field !== action.payload) {
        state.sort = { field: action.payload, asc: false };
      } else {
        state.sort.asc = !state.sort.asc;
      }
      state.paginator.current = 1;
    },

    setPage: (state, action) => {
      state.paginator.current = action.payload;
    },
  },
});

export const selectOrders = (state) => {
  let displayList = [...state.data.ordersList];

  if (state.data.filter.startDate !== "") {
    let startDate = new Date(
      state.data.filter.startDate.split(".").reverse().join("-")
    );
    displayList = displayList.filter(
      (rec) => new Date(rec.date.split(".").reverse().join("-")) >= startDate
    );
  }

  if (state.data.filter.endDate !== "") {
    let endDate = new Date(
      state.data.filter.endDate.split(".").reverse().join("-")
    );
    displayList = displayList.filter(
      (rec) => new Date(rec.date.split(".").reverse().join("-")) <= endDate
    );
  }
  if (
    state.data.filter.selectedStatuses.length > 0 &&
    state.data.filter.selectedStatuses.length < Object.keys(STATUS_LIST).length
  ) {
    // console.log(state.data.filter.selectedStatuses);
    displayList = displayList.filter((rec) =>
      state.data.filter.selectedStatuses.includes(rec.status)
    );
  }
  if (state.data.filter.startAmount !== "") {
    displayList = displayList.filter(
      (rec) => rec.amount >= +state.data.filter.startAmount
    );
  }
  if (state.data.filter.endAmount > 0) {
    displayList = displayList.filter(
      (rec) => rec.amount <= +state.data.filter.endAmount
    );
  }
  if (state.data.search !== "") {
    displayList = displayList.filter(
      (rec) =>
        rec.id.toString().includes(state.data.search) ||
        rec.fio.includes(state.data.search)
    );
  }

  // if (state.sort.field !== state.sort.field) {
  //   state.sort = {field: action.payload, asc: false};
  // } else {
  //   state.sort.asc = !state.sort.asc;
  // }

  if (state.data.sort.field === "date") {
    displayList.sort(
      (recPrev, recNext) =>
        (new Date(
          recPrev[state.data.sort.field].split(".").reverse().join("-")
        ) >
        new Date(recNext[state.data.sort.field].split(".").reverse().join("-"))
          ? 1
          : -1) * (state.data.sort.asc ? 1 : -1)
    );
  } else if (state.data.sort.field === "status") {
    displayList.sort(
      (recPrev, recNext) =>
        (STATUS_LIST[recPrev[state.data.sort.field]] >
        STATUS_LIST[recNext[state.data.sort.field]]
          ? 1
          : -1) * (state.data.sort.asc ? 1 : -1)
    );
  } else {
    displayList.sort(
      (recPrev, recNext) =>
        (recPrev[state.data.sort.field] > recNext[state.data.sort.field]
          ? 1
          : -1) * (state.data.sort.asc ? 1 : -1)
    );
  }

  let paginator = {
    ...state.data.paginator,
    count: Math.ceil(displayList.length / 10),
  };

  displayList = displayList.slice(
    (state.data.paginator.current - 1) * 10,
    state.data.paginator.current * 10
  );

  return { ordersList: displayList, paginator: paginator };
};

export const selectSort = (state) => state.data.sort;
export const selectFilter = (state) => state.data.filter;
export const selectSearch = (state) => state.data.search;

export const { setFilter, setSearch, setSort, setPage } =
  ordersTableSlice.actions;
export default ordersTableSlice.reducer;
