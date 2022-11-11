import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../components/modules/Orders/OrdersTable/ordersTableSlice";

export const store = configureStore({
  reducer: {
    data: ordersReducer,
  },
});
