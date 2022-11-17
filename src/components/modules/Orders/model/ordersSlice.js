import { createSlice } from "@reduxjs/toolkit";
import { loadOrders } from "../../../../dbase/data";

const initialState = {
  ordersList: loadOrders(),
  selectedOrders: [],
  order: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    selectOrder: (state, action) => {
      if (state.selectedOrders.includes(action.payload)) {
        state.selectedOrders = state.selectedOrders.filter(
          (record) => record !== action.payload
        );
      } else {
        state.selectedOrders.push(action.payload);
      }
    },
    selectAllOrders: (state, action) => {
      state.selectedOrders = action.payload;
    },
    deselectAllOrders: (state) => {
      state.selectedOrders = [];
    },
    deleteSelectedOrders: (state, action) => {
      state.ordersList = state.ordersList.filter(
        (record) => !state.selectedOrders.includes(record.id)
      );
      state.selectedOrders = [];
    },
    setStatusSelectedOrders: (state, action) => {
      let newOrderList = [];
      for (let item of state.ordersList) {
        if (state.selectedOrders.includes(item.id))
          newOrderList.push({ ...item, status: action.payload });
        else newOrderList.push(item);
      }
      state.ordersList = newOrderList;
      state.selectedOrders = [];
    },
    getOrder: (state, action) => {
      state.order = state.ordersList.filter(
        (record) => record.id === action.payload
      )[0];
    },
    setOrder: (state, action) => {
      if (action.payload) {
        for (let i = 0; i <= state.ordersList.length; i++) {
          if (state.ordersList[i].id === action.payload.id) {
            state.ordersList[i].fio = action.payload.fio;
            state.ordersList[i].status = action.payload.status;
            break;
          }
        }
      }
      state.order = null;
    },
  },
});

export default ordersSlice.reducer;

export const {
  selectOrder,
  selectAllOrders,
  deselectAllOrders,
  deleteSelectedOrders,
  setStatusSelectedOrders,
  getOrder,
  setOrder,
} = ordersSlice.actions;
