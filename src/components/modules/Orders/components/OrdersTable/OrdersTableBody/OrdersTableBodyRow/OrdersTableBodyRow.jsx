import cn from "classnames";
import { TableRow } from "../../../../../../shared/TableRow/TableRow";
import { TableCell } from "../../../../../../shared/TableCell/TableCell";
import { Checkbox } from "../../../../../../shared/Checkbox/Checkbox";
import { LabelStatus } from "./LabelStatus/LabelStatus";
import stylesColumns from "../../OrdersTableColumns.module.css";
import styles from "./OrdersTableBodyRow.module.css";
import { useDispatch } from "react-redux";
import { selectOrder, getOrder } from "../../../../model/ordersSlice";

export const OrdersTableBodyRow = ({ data, selected }) => {
  const dispatch = useDispatch();
  const { checked, id, date, status, quantity, amount, fio } = data;
  const cellClass = cn(stylesColumns._, {
    [styles.selected]: selected,
  });

  const formatDate = (date) => {
    let [day, month, year] = date.split(".");
    day = day.length < 2 ? "0" + day : day;
    month = month.length < 2 ? "0" + month : month;
    return [day, month, year].join(".");
  };

  const onChange = (id) => {
    dispatch(selectOrder(id));
  };

  const onEditOrder = (id) => {
    dispatch(getOrder(id));
  };

  return (
    <TableRow>
      <TableCell className={cellClass}>
        {
          <label className="check">
            <Checkbox checked={checked} onChange={() => onChange(id)} />
          </label>
        }
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {id}
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {formatDate(date)}
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {<LabelStatus status={status} />}
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {quantity}
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {amount + " ₽"}
      </TableCell>
      <TableCell className={cellClass} onClick={() => onEditOrder(id)}>
        {fio}
      </TableCell>
    </TableRow>
  );
};
