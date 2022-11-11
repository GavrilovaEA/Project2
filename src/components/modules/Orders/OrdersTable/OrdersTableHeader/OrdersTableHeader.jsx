import cn from "classnames";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { TableHeader } from "../../../../shared/TableHeader/TableHeader";
import { TableHeaderCell } from "../../../../shared/TableHeaderCell/TableHeaderCell";
import styles from "./OrdersTableHeader.module.css";
import stylesColumns from "../OrdersTableColumns.module.css";
import stylesCell from "../../../../shared/TableHeaderCell/TableHeaderCell.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "../ordersTableSlice";

export const OrdersTableHeader = ({ allSelect, onChangeAllSelect }) => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const onSort = (field) => {
    dispatch(setSort(field));
  };

  return (
    <TableHeader className={styles._}>
      <TableHeaderCell className={stylesColumns._}>
        <Checkbox checked={allSelect} onChange={onChangeAllSelect} />
      </TableHeaderCell>
      <TableHeaderCell className={stylesColumns._}>#</TableHeaderCell>
      <TableHeaderCell
        className={cn(stylesColumns._, {
          [stylesCell.asc]: sort.field === "date" && sort.asc,
        })}
        onSort={() => onSort("date")}
        sorting={sort.field === "date"}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={cn(stylesColumns._, {
          [stylesCell.asc]: sort.field === "status" && sort.asc,
        })}
        onSort={() => onSort("status")}
        sorting={sort.field === "status"}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={cn(stylesColumns._, {
          [stylesCell.asc]: sort.field === "quantity" && sort.asc,
        })}
        onSort={() => onSort("quantity")}
        sorting={sort.field === "quantity"}
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={cn(stylesColumns._, {
          [stylesCell.asc]: sort.field === "amount" && sort.asc,
        })}
        onSort={() => onSort("amount")}
        sorting={sort.field === "amount"}
      >
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={stylesColumns._}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
