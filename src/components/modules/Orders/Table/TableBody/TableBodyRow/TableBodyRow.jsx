import { TableBodyRowCell } from "./TableBodyRowCell/TableBodyRowCell";
import { LabelStatus } from "./LabelStatus/LabelStatus";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import styles from "./TableBodyRow.module.css";

export const TableBodyRow = (props) => {
  return (
    <div className={styles._}>
      <TableBodyRowCell
        text={
          <label className="check">
            <Checkbox checked={props.data.checked} />
          </label>
        }
      />
      <TableBodyRowCell text={props.data.id} />
      <TableBodyRowCell text={props.data.date} />
      <TableBodyRowCell text={<LabelStatus status={props.data.status} />} />
      <TableBodyRowCell text={props.data.kol} />
      <TableBodyRowCell text={props.data.summa + " ₽"} />
      <TableBodyRowCell text={props.data.fio} />
    </div>
  );
};
