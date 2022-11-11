import { PageHeader } from "./PageHeader/PageHeader";
import { FilterBar } from "./FilterBar/FilterBar";
import styles from "./Orders.module.css";

export const Orders = () => {
  const applyFilter = (filter) => {
    console.log(filter);
  };

  return (
    <div className={styles._}>
      <PageHeader />
      <FilterBar onApplyFilter={applyFilter} />
    </div>
  );
};
