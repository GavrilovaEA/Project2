import { createSlice } from "@reduxjs/toolkit";
import { loadOrders } from "../../../../dbase/data";

const initialState = {
  ordersList: loadOrders(),
  selectedOrders: [],
  editedOrder: null,
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
      state.ordersList.map((item) =>
        state.selectedOrders.includes(item.id)
          ? (item.status = action.payload)
          : item
      );
      state.selectedOrders = [];
    },
    getOrder: (state, action) => {
      state.editedOrder = state.ordersList.filter(
        (record) => record.id === action.payload
      )[0];
    },
    setOrder: (state, action) => {
      if (action.payload) {
        let order = state.ordersList.find(
          (item) => item.id === action.payload.id
        );
        order.fio = action.payload.fio;
        order.status = action.payload.status;
      }
      state.editedOrder = null;
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
