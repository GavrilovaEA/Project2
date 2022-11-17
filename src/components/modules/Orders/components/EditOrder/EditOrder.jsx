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

export const EditOrder = ({ order, items }) => {
  const dispatch = useDispatch();

  const lbMessage = useRef();

  const [fio, setFIO] = useState(order && order.fio);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(order && order.status);
  const [error, setError] = useState("");
  const [isShowDlgStatus, setShowDlgStatus] = useState(false);
  const [isShowDlgClose, setShowDlgClose] = useState(false);

  const onCancel = () => {
    dispatch(setOrder(null));
  };

  const isValidFIO = (value) => {
    return value;
  };

  const onChangeFIO = (e) => {
    setFIO(e.target.value);
  };

  const isValidCode = (value) => {
    return value === "123";
  };

  const btSaveClick = () => {
    if (!isValidFIO(fio)) {
      setError("Поле ФИО не может быть пустым");
      return;
    }
    if (!isValidCode(code)) {
      setError("Неверный код подтверждения");
      return;
    }

    dispatch(setOrder({ id: order.id, fio: fio, status: status }));
  };

  const dlgSelectStatus = (
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
          onChange={() => {
            setStatus(item);
            setShowDlgStatus(false);
          }}
        />
      ))}
    </>
  );

  const onClickSelectStatus = () => {
    setShowDlgStatus(!isShowDlgStatus);
  };

  const onResume = () => {
    setShowDlgClose(false);
  };

  const dlgClose = (
    <>
      <div className={styles.dlgCloseCaption}>Есть несохраненные изменения</div>
      <Button size="small" theme="reverse" onClick={onCancel}>
        Сбросить
      </Button>
      <Button size="small" onClick={onResume}>
        Остаться
      </Button>
    </>
  );

  const onClose = () => {
    if (order.fio !== fio || order.status !== status) setShowDlgClose(true);
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
            overlay={dlgClose}
            className={styles.dlgClose}
            isShowExt={isShowDlgClose}
            onClick={onClose}
            onClose={() => setShowDlgClose(false)}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <Input label={"Дата и время заказа"} value={order.date} disabled />

            <Input
              label={"ФИО покупателя"}
              value={fio}
              incorrect={!isValidFIO(fio)}
              onChange={onChangeFIO}
            />

            <ItemsTable items={items} />

            <Input label={"Уровень лояльности"} value={order.level} disabled />

            <Dropdown
              trigger={
                <div>
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
              overlay={dlgSelectStatus}
              isShowExt={isShowDlgStatus}
              onClick={onClickSelectStatus}
              onClose={() => setShowDlgStatus(false)}
              className={styles.dlgSelectStatus}
            />

            <Input
              // key="code"
              label={"Код подтверждения"}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerSave}>
            <div ref={lbMessage} className={styles.footerSaveText}>
              {error}
            </div>
            <Button
              className={styles.button}
              onClick={btSaveClick}
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
