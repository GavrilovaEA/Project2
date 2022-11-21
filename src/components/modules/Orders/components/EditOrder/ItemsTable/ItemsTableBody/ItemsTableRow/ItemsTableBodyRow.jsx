import cn from "classnames";
import { TableRow } from "../../../../../../../shared/TableRow/TableRow";
import { TableCell } from "../../../../../../../shared/TableCell/TableCell";
import styles from "./ItemsTableBodyRow.module.css";
import stylesColumns from "../../ItemsTableColumns.module.css";

export const ItemsTableBodyRow = ({ data }) => {
  return (
    <TableRow className={styles._}>
      <TableCell className={cn(styles.cell, stylesColumns._)}>
        {data.prodCode}
      </TableCell>
      <TableCell className={cn(styles.cell, stylesColumns._)}>
        {data.prodName}
      </TableCell>
      <TableCell className={cn(styles.cell, stylesColumns._)}>
        {data.prodPrice + " ₽"}
      </TableCell>
    </TableRow>
  );
};
