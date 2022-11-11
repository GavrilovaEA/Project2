import { TableFooter } from "../../../../shared/TableFooter/TableFooter";
import { Button } from "../../../../shared/Button/Button";
import { Paginator } from "../../../../shared/Paginator/Paginator";

import styles from "./OrdersTableFooter.module.css";
import { useDispatch } from "react-redux";
import { setPage } from "../ordersTableSlice";

export const OrdersTableFooter = ({ recordSelected, paginator }) => {
  const dispatch = useDispatch();

  const onGotoPage = (numberPage) => {
    dispatch(setPage(numberPage));
  };

  return (
    <TableFooter className={styles._}>
      <div className={styles.action}>
        <div className={styles.recordCount}>
          Выбрано записей: {recordSelected}
        </div>
        <Button size="small" iconName="edit">
          Изменить статус
        </Button>
        <Button
          className={styles.recordDelete}
          size="small"
          iconName="recycle"
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
