import { TableFooter } from "../../../../shared/Table/TableFooter/TableFooter";
import { Button } from "../../../../shared/Button/Button";
import { Paginator } from "../../../../shared/Paginator/Paginator";

import styles from "./OrdersTableFooter.module.css";

export const OrdersTableFooter = ({ recordSelected, paginator }) => {
  const onGotoPage = (numberPage) => {
    console.log("Переход на страницу " + numberPage);
  };

  return (
    <TableFooter className={styles._}>
      <div className={styles.action}>
        <div className={styles.recordCount}>
          Выбрано записей: {recordSelected}
        </div>
        <Button small iconName={"edit"}>
          Изменить статус
        </Button>
        <Button
          className={styles.recordDelete}
          small
          iconName={"recycle"}
          iconClass={styles.button__ico}
        >
          Удалить
        </Button>
      </div>
      <Paginator
        pageCount={paginator.count}
        pageCur={paginator.current}
        onGotoPage={onGotoPage}
      />
    </TableFooter>
  );
};
