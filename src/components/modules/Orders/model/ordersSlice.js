import { createSlice } from "@reduxjs/toolkit";
import { loadOrders } from "../../../../dbase/data";

const initialState = {
  ordersList: loadOrders(),
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export default ordersSlice.reducer;
