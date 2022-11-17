import React from "react";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";
import styles from "./Orders.module.css";
import { EditOrder } from "./components/EditOrder/EditOrder";
import { selectOrder } from "./model/ordersTableSelectors";
import { useSelector } from "react-redux";

export const Orders = () => {
  const { order, items } = useSelector(selectOrder);
  return (
    <div className={styles._}>
      <PageHeader />
      <FilterBar />
      <OrdersTable />
      {order && <EditOrder order={order} items={items} />}
    </div>
  );
};
