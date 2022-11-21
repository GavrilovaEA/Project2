import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { setOrder } from "../../model/ordersSlice";
import { STATUS_LIST } from "../../../../../dbase/data";
import { ItemsTable } from "./ItemsTable/ItemsTable";

import styles from "./EditOrder.module.css";
import { Radio } from "../../../../shared/Radio/Radio";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Icon } from "../../../../shared/Icon/Icon";

const VALID_CODE = "123";

export const EditOrder = ({ order, items }) => {
  const dispatch = useDispatch();

  const lbMessage = useRef();

  const [fio, setFIO] = useState(order && order.fio);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(order && order.status);
  const [error, setError] = useState({ field: "", text: "" });
  const [isShowDialogStatus, setShowDialogStatus] = useState(false);
  const [isShowDialogClose, setShowDialogClose] = useState(false);

  const onCancel = () => {
    dispatch(setOrder(null));
  };

  const isValidFIO = (value) => {
    return value.length > 0;
  };

  const onChangeFIO = (e) => {
    setFIO(e.target.value);
  };

  const isValidCode = (value) => {
    return value === VALID_CODE;
  };

  const buttonSaveClick = () => {
    if (!isValidFIO(fio)) {
      setError({ field: "fio", text: "Поле ФИО не может быть пустым" });
      return;
    }
    if (!isValidCode(code)) {
      setError({ field: "code", text: "Неверный код подтверждения" });
      return;
    }

    dispatch(setOrder({ id: order.id, fio: fio, status: status }));
  };

  const onSetStatus = (item) => {
    setStatus(item);
    setShowDialogStatus(false);
  };

  const dialogSelectStatus = (
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

  const onClickSelectStatus = () => {
    setShowDialogStatus(!isShowDialogStatus);
  };

  const onResume = () => {
    setShowDialogClose(false);
  };

  const dialogClose = (
    <>
      <div className={styles.dialogCloseCaption}>
        Есть несохраненные изменения
      </div>
      <Button size="small" theme="reverse" onClick={onCancel}>
        Сбросить
      </Button>
      <Button size="small" onClick={onResume}>
        Остаться
      </Button>
    </>
  );

  const onClose = () => {
    if (order.fio !== fio || order.status !== status) setShowDialogClose(true);
    else onCancel();
  };

  return (
    <div className={styles.formModal}>
      <div className={styles._}>
        <div className={styles.header}>
          <div className={styles.headerText}>Заявка #{order.id}</div>

          <Dropdown
            trigger={
              <Button className={styles.headerButton} iconName={"xLarge"} />
            }
            overlay={dialogClose}
            className={styles.dialogClose}
            isShowExt={isShowDialogClose}
            onClick={onClose}
            onClose={() => setShowDialogClose(false)}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <Input label={"Дата и время заказа"} value={order.date} disabled />

            <Input
              label={"ФИО покупателя"}
              value={fio}
              incorrect={error.field === "fio"}
              onChange={onChangeFIO}
            />

            <ItemsTable items={items} />

            <Input label={"Уровень лояльности"} value={order.level} disabled />

            <Dropdown
              trigger={
                <div className={styles.status}>
                  <Input
                    className={styles.status}
                    label="Статус заказа"
                    value={STATUS_LIST[status]}
                    readonly
                    postfix={
                      <div className={styles.iconStatusWrapper}>
                        <Icon className={styles.iconStatus} iconName="down" />
                      </div>
                    }
                  />
                </div>
              }
              overlay={dialogSelectStatus}
              isShowExt={isShowDialogStatus}
              onClick={onClickSelectStatus}
              onClose={() => setShowDialogStatus(false)}
              className={styles.dialogSelectStatus}
            />

            <Input
              label={"Код подтверждения"}
              incorrect={error.field === "code"}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerSave}>
            <div ref={lbMessage} className={styles.footerSaveText}>
              {error.text}
            </div>
            <Button
              className={styles.button}
              onClick={buttonSaveClick}
              iconName={"apply"}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
