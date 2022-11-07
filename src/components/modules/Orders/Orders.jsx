import React from "react";
import { PageHeader } from "./PageHeader/PageHeader";
import { FilterBar } from "./FilterBar/FilterBar";
import { OrdersTable } from "./OrdersTable/OrdersTable";
import { loadOrders } from "../../../dbase/data";
import styles from "./Orders.module.css";

export const Orders = () => {
  const applyFilter = (filter) => {
    console.log(filter);
  };

  let ordersList = loadOrders();

  return (
    <div className={styles._}>
      <PageHeader />
      <FilterBar onApplyFilter={applyFilter} />
      <OrdersTable data={ordersList} />
    </div>
  );
};
