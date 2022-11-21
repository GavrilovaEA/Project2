import { TableHeader } from "../../../../../../shared/TableHeader/TableHeader";
import { TableHeaderCell } from "../../../../../../shared/TableHeaderCell/TableHeaderCell";
import cn from "classnames";

import styles from "./ItemsTableHeader.module.css";
import stylesColumns from "../ItemsTableColumns.module.css";

export const ItemsTableHeader = () => {
  const classCell = cn(styles.cell, stylesColumns._);
  return (
    <TableHeader className={styles._}>
      <TableHeaderCell className={classCell}>Артикул</TableHeaderCell>
      <TableHeaderCell className={classCell}>Наименование</TableHeaderCell>
      <TableHeaderCell className={classCell}>Цена</TableHeaderCell>
    </TableHeader>
  );
};
