import { Input } from "../../../../../shared/Input/Input";
import { Button } from "../../../../../shared/Button/Button";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import { STATUS_LIST } from "../../../../../../dbase/data";
import styles from "./FilterForm.module.css";
import { Icon } from "../../../../../shared/Icon/Icon";

export const FilterForm = ({
  selectedStatuses,
  onSelectStatusList,
  startDate,
  isValidStartDate,
  onChangeStartDate,
  endDate,
  isValidEndDate,
  onChangeEndDate,
  startAmount,
  isValidStartAmount,
  onChangeStartAmount,
  endAmount,
  isValidEndAmount,
  onChangeEndAmount,
  onClickApply,
}) => {
  // Строка статусов для Input
  let statusText = "Любой";
  if (
    selectedStatuses.length !== 0 &&
    selectedStatuses.length !== Object.keys(STATUS_LIST).length
  ) {
    statusText = selectedStatuses
      .map((status) => STATUS_LIST[status])
      .join(", ");
  }

  // Содержимое раскрывающегося списка
  const dialogStatus = Object.keys(STATUS_LIST).map((item) => (
    <Checkbox
      key={item}
      className={styles.dropdown_checkbox}
      text={STATUS_LIST[item]}
      checked={selectedStatuses.includes(item)}
      onChange={() => onSelectStatusList(item)}
    />
  ));

  return (
    <div key="edDate" className={styles._}>
      <div className={styles.period}>
        <Input
          key="edStartDate"
          className={styles.period__start}
          label="Дата оформления"
          prefix="с"
          value={startDate}
          incorrect={!isValidStartDate}
          placeholder="dd.mm.yyyy"
          onChange={(e) => onChangeStartDate(e.target.value)}
          onReset={() => onChangeStartDate("")}
        />
        <Input
          key="edEndDate"
          className={styles.period__end}
          label="&nbsp;"
          prefix="по"
          value={endDate}
          incorrect={!isValidEndDate}
          placeholder="dd.mm.yyyy"
          onChange={(e) => onChangeEndDate(e.target.value)}
          onReset={() => onChangeEndDate("")}
        />
      </div>
      <Dropdown
        trigger={
          <div key="edStatus">
            <Input
              className={styles.status}
              label="Статус заказа"
              value={statusText}
              readonly
              placeholder="Введите..."
              postfix={
                <div className={styles.iconStatusWrapper}>
                  <Icon className={styles.iconStatus} iconName="down" />
                </div>
              }
            />
          </div>
        }
        overlay={dialogStatus}
        className={styles.dropdown_list}
      />
      <div key="edAmount" className={styles.amount}>
        <Input
          key="edStartAmount"
          className={styles.amount__start}
          label="Сумма заказа"
          prefix="от"
          value={startAmount}
          incorrect={!isValidStartAmount}
          placeholder="₽"
          onChange={(e) => onChangeStartAmount(e.target.value)}
          onReset={() => onChangeStartAmount("")}
        />
        <Input
          key="edEndAmount"
          className={styles.amount__end}
          label="&nbsp;"
          prefix="до"
          value={endAmount}
          incorrect={!isValidEndAmount}
          placeholder="₽"
          onChange={(e) => onChangeEndAmount(e.target.value)}
          onReset={() => onChangeEndAmount("")}
        />
      </div>
      <Button className={styles.apply} theme="reverse" onClick={onClickApply}>
        Применить
      </Button>
    </div>
  );
};
