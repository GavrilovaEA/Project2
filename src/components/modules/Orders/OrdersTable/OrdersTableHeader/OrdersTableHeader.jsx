import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { TableHeader } from "../../../../shared/Table/TableHeader/TableHeader";
import { TableHeaderCell } from "../../../../shared/Table/TableHeader/TableHeaderCell/TableHeaderCell";
import styles from "./OrdersTableHeader.module.css";
import stylesColumns from "../OrdersTableColumns.module.css";

export const OrdersTableHeader = ({ sort, allSelect, setSort }) => {
  const onSort = (field) => {
    if (sort.field === field) {
      setSort({ ...sort, asc: !sort.asc });
    } else {
      setSort({ field: field, asc: true });
    }
  };

  return (
    <TableHeader className={styles._}>
      <TableHeaderCell className={stylesColumns._}>
        <Checkbox checked={allSelect} />
      </TableHeaderCell>
      <TableHeaderCell className={stylesColumns._}>#</TableHeaderCell>
      <TableHeaderCell
        className={stylesColumns._}
        onSort={() => onSort("date")}
        sorting={sort.field === "date"}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={stylesColumns._}
        onSort={() => onSort("status")}
        sorting={sort.field === "status"}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={stylesColumns._}
        onSort={() => onSort("kol")}
        sorting={sort.field === "kol"}
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={stylesColumns._}
        onSort={() => onSort("summa")}
        sorting={sort.field === "summa"}
      >
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={stylesColumns._}>
        ФИО покупателя
      </TableHeaderCell>
    </TableHeader>
  );
};
