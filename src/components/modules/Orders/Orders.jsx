import React from "react";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";
import styles from "./Orders.module.css";

export const Orders = () => {
  return (
    <div className={styles._}>
      <PageHeader />
      <FilterBar />
      <OrdersTable />
    </div>
  );
};
