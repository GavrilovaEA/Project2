import { TableBody } from "../../../../../../shared/TableBody/TableBody";
import { ItemsTableBodyRow } from "./ItemsTableRow/ItemsTableBodyRow";
import styles from "./ItemsTableBody.module.css";

export const ItemsTableBody = ({ items }) => {
  return (
    <TableBody key="itb" className={styles._}>
      {items.map((item) => (
        <ItemsTableBodyRow key={"itr" + item.prodCode} data={item} />
      ))}
    </TableBody>
  );
};
