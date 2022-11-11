import React from "react";
import { PageHeader } from "./PageHeader/PageHeader";
import { FilterBar } from "./FilterBar/FilterBar";
import { OrdersTable } from "./OrdersTable/OrdersTable";
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
