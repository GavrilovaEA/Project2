import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/modules/Orders/model/filtersSlice";
import ordersReducer from "../components/modules/Orders/model/ordersSlice";
import sortReducer from "../components/modules/Orders/model/sortSlice";
export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    filters: filtersReducer,
    sort: sortReducer,
  },
});
