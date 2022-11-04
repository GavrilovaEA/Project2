import { TableBodyRow } from "./TableBodyRow/TableBodyRow";
import styles from "./TableBody.module.css";

export const TableBody = ({ data }) => {
  return (
    <div className={styles._}>
      {data.map((item) => (
        <TableBodyRow data={item} />
      ))}
    </div>
  );
};
