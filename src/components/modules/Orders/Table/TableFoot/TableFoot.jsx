import { Button } from "../../../../shared/Button/Button";
import { Paginator } from "./Paginator/Paginator";
// import "./table__foot.css";

import styles from "./TableFoot.module.css";

export const TableFoot = ({ recSelect, paginator }) => {
  return (
    <div className={styles._}>
      <div className={styles.action}>
        <div className={styles.recCount}>Выбрано записей: {recSelect}</div>
        <Button className={styles.recEdit} small iconName={"edit"}>
          Изменить статус
        </Button>
        <Button
          className={styles.recDel}
          small
          iconName={"recycle"}
          iconClass={styles.button__ico}
        >
          Удалить
        </Button>
      </div>
      <Paginator pageCount={paginator.count} pageCur={paginator.current} />
    </div>
  );
};
