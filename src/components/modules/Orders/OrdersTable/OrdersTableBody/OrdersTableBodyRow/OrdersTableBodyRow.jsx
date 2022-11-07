import cn from "classnames";
import { TableRow } from "../../../../../shared/Table/TableBody/TableRow/TableRow";
import { TableCell } from "../../../../../shared/Table/TableBody/TableRow/TableCell/TableCell";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import { LabelStatus } from "./LabelStatus/LabelStatus";
import stylesColumns from "../../OrdersTableColumns.module.css";
import styles from "./OrdersTableBodyRow.module.css";

export const OrdersTableBodyRow = ({ data }) => {
  const { checked, id, date, status, quantity, amount, fio } = data;
  const cellClass = cn(stylesColumns._, {
    [styles.selected]: checked,
  });
  return (
    <TableRow>
      <TableCell className={cellClass}>
        {
          <label className="check">
            <Checkbox checked={checked} />
          </label>
        }
      </TableCell>
      <TableCell className={cellClass}>{id}</TableCell>
      <TableCell className={cellClass}>{date}</TableCell>
      <TableCell className={cellClass}>
        {<LabelStatus status={status} />}
      </TableCell>
      <TableCell className={cellClass}>{quantity}</TableCell>
      <TableCell className={cellClass}>{amount + " ₽"}</TableCell>
      <TableCell className={cellClass}>{fio}</TableCell>
    </TableRow>
  );
};
