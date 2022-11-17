import { TableFooter } from "../../../../../shared/TableFooter/TableFooter";
import { Button } from "../../../../../shared/Button/Button";
import { Paginator } from "../../../../../shared/Paginator/Paginator";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../model/filtersSlice";
import {
  deselectAllOrders,
  deleteSelectedOrders,
  setStatusSelectedOrders,
} from "../../../model/ordersSlice";
import { selectSelectedRecordCount } from "../../../model/ordersTableSelectors";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import { useState } from "react";
import { STATUS_LIST } from "../../../../../../dbase/data";
import { Radio } from "../../../../../shared/Radio/Radio";
import styles from "./OrdersTableFooter.module.css";

export const OrdersTableFooter = ({ paginator }) => {
  const [isShowDlgDelRec, setShowDlgDelRec] = useState(false);
  const [isShowDlgStatus, setShowDlgStatus] = useState(false);
  const dispatch = useDispatch();
  const selectedRecordCount = useSelector(selectSelectedRecordCount);
  const onGotoPage = (numberPage) => {
    dispatch(setPage(numberPage));
    dispatch(deselectAllOrders());
  };

  const onClickDelRec = () => {
    if (selectedRecordCount > 0) {
      setShowDlgDelRec(!isShowDlgDelRec);
    }
  };

  const onDelRec = () => {
    dispatch(deleteSelectedOrders());
    setShowDlgDelRec(false);
  };

  const onCancelDelRec = () => {
    setShowDlgDelRec(false);
  };

  const dlgDelRec = (
    <>
      <div className={styles.recordDeleteCaption}>
        Удалить {selectedRecordCount} записей?
      </div>
      <Button size="small" theme="reverse" onClick={onDelRec}>
        Удалить
      </Button>
      <Button size="small" onClick={onCancelDelRec}>
        Отмена
      </Button>
    </>
  );

  const onClickSetStatus = () => {
    if (selectedRecordCount > 0) {
      setShowDlgStatus(!isShowDlgStatus);
    }
  };

  const onSetStatus = (idStatus) => {
    dispatch(setStatusSelectedOrders(idStatus));
    setShowDlgStatus(false);
  };

  const dlgSetStatus = (
    <>
      {Object.keys(STATUS_LIST).map((item) => (
        <Radio
          key={item}
          className={styles.radio}
          type="radio"
          text={STATUS_LIST[item]}
          noindicator
          name="status"
          id={item}
          checked={false}
          onChange={() => onSetStatus(item)}
        />
      ))}
    </>
  );

  return (
    <TableFooter className={styles._}>
      <div className={styles.action}>
        <div className={styles.recordCount}>
          Выбрано записей: {selectedRecordCount}
        </div>
        <Dropdown
          trigger={
            <Button size="small" iconName="edit">
              Изменить статус
            </Button>
          }
          overlay={dlgSetStatus}
          isShowExt={isShowDlgStatus}
          onClick={onClickSetStatus}
          onClose={() => setShowDlgStatus(false)}
          className={styles.dlgSetStatus}
        />

        <Dropdown
          trigger={
            <Button
              className={styles.recordDelete}
              size="small"
              iconName="recycle"
              iconClass={styles.button__ico}
            >
              Удалить
            </Button>
          }
          overlay={dlgDelRec}
          className={styles.dlgDelRec}
          isShowExt={isShowDlgDelRec}
          onClick={onClickDelRec}
          onClose={() => setShowDlgDelRec(false)}
        />
      </div>
      <Paginator
        pageCount={paginator.count}
        pageCur={paginator.current}
        onGotoPage={onGotoPage}
      />
    </TableFooter>
  );
};
