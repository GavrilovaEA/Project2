import { PageHeader } from "./PageHeader/PageHeader";
import { FilterBar } from "./FilterBar/FilterBar";
import styles from "./Orders.module.css";
import { Table } from "./Table/Table";
import { loadOrders } from "../../../dbase/data";

export const Orders = () => {
  const applyFilter = (filter) => {
    console.log(filter);
  };

  let ordersList = loadOrders();

  return (
    <div className={styles._}>
      <PageHeader />
      <FilterBar onApplyFilter={applyFilter} />
      <Table data={ordersList} />
    </div>
  );
};
