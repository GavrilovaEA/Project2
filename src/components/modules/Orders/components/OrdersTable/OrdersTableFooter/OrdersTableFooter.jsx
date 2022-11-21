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
  const [isShowDialogDeleteRecord, setShowDialogDeleteRecord] = useState(false);
  const [isShowDialogStatus, setShowDialogStatus] = useState(false);
  const dispatch = useDispatch();
  const selectedRecordCount = useSelector(selectSelectedRecordCount);
  const onGotoPage = (numberPage) => {
    dispatch(setPage(numberPage));
    dispatch(deselectAllOrders());
  };

  const onClickDeleteRecord = () => {
    if (selectedRecordCount > 0) {
      setShowDialogDeleteRecord(!isShowDialogDeleteRecord);
    }
  };

  const onDeleteRecord = () => {
    dispatch(deleteSelectedOrders());
    setShowDialogDeleteRecord(false);
  };

  const onCancelDeleteRecord = () => {
    setShowDialogDeleteRecord(false);
  };

  const dialogDeleteRecord = (
    <>
      <div className={styles.recordDeleteCaption}>
        Удалить {selectedRecordCount} записей?
      </div>
      <Button size="small" theme="reverse" onClick={onDeleteRecord}>
        Удалить
      </Button>
      <Button size="small" onClick={onCancelDeleteRecord}>
        Отмена
      </Button>
    </>
  );

  const onClickSetStatus = () => {
    if (selectedRecordCount > 0) {
      setShowDialogStatus(!isShowDialogStatus);
    }
  };

  const onSetStatus = (idStatus) => {
    dispatch(setStatusSelectedOrders(idStatus));
    setShowDialogStatus(false);
  };

  const dialogSetStatus = (
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
        {selectedRecordCount !== 0 ? (
          <>
            <div className={styles.recordCount}>
              Выбрано записей: {selectedRecordCount}
            </div>
            <Dropdown
              trigger={
                <Button size="small" iconName="edit">
                  Изменить статус
                </Button>
              }
              overlay={dialogSetStatus}
              isShowExt={isShowDialogStatus}
              onClick={onClickSetStatus}
              onClose={() => setShowDialogStatus(false)}
              className={styles.dialogSetStatus}
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
              overlay={dialogDeleteRecord}
              className={styles.dialogDeleteRecord}
              isShowExt={isShowDialogDeleteRecord}
              onClick={onClickDeleteRecord}
              onClose={() => setShowDialogDeleteRecord(false)}
            />
          </>
        ) : null}
      </div>
      <Paginator
        pageCount={paginator.count}
        pageCur={paginator.current}
        onGotoPage={onGotoPage}
      />
    </TableFooter>
  );
};
