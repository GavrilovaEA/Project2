import { TableHeadCell } from "./TableHeadCell/TableHeadCell";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import styles from "./TableHead.module.css";

export const TableHead = ({ sort, allSelect }) => {
  return (
    <div className={styles._}>
      <TableHeadCell caption={<Checkbox checked={allSelect} />} />
      <TableHeadCell caption={"#"} />
      <TableHeadCell caption={"Дата"} sort sorting={sort.field === "date"} />
      <TableHeadCell
        caption={"Статус"}
        sort
        sorting={sort.field === "status"}
      />
      <TableHeadCell caption={"Позиций"} sort sorting={sort.field === "kol"} />
      <TableHeadCell caption={"Сумма"} sort sorting={sort.field === "summa"} />
      <TableHeadCell caption={"ФИО покупателя"} />
    </div>
  );
};
