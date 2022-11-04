import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { STATUS_LIST } from "../../../../../dbase/data";
import styles from "./FilterForm.module.css";

export const FilterForm = ({
  statusSelected,
  onSelectStatusList,
  startDate,
  validStartDate,
  onChangeStartDate,
  endDate,
  validEndDate,
  onChangeEndDate,
  startSumma,
  validStartSumma,
  onChangeStartSumma,
  endSumma,
  validEndSumma,
  onChangeEndSumma,
  onClickApply,
}) => {
  // Строка статусов для Input
  let statusText = "Любой";
  if (
    statusSelected.length !== 0 &&
    statusSelected.length !== STATUS_LIST.size
  ) {
    statusText = Object.keys(STATUS_LIST)
      .filter((item) => statusSelected.includes(item))
      .map((item) => STATUS_LIST[item])
      .join(", ");
  }

  // Содержимое раскрывающегося списка
  const dlgStatus = Object.keys(STATUS_LIST).map((item) => (
    <Checkbox
      className={styles.dropdown_checkbox}
      text={STATUS_LIST[item]}
      checked={statusSelected.includes(item)}
      onChange={() => onSelectStatusList(item)}
    />
  ));

  return [
    <div className={styles._}>
      <div className={styles.period}>
        <Input
          className={styles.period__start}
          label={"Дата оформления"}
          maskText={"с"}
          value={startDate}
          incorrect={!validStartDate}
          placeholder={"dd.mm.yyyy"}
          onChange={(e) => onChangeStartDate(e.target.value)}
          onClickButton={() => onChangeStartDate("")}
        />
        <Input
          className={styles.period__end}
          label="&nbsp;"
          maskText={"по"}
          value={endDate}
          incorrect={!validEndDate}
          placeholder={"dd.mm.yyyy"}
          onChange={(e) => onChangeEndDate(e.target.value)}
          onClickButton={() => onChangeEndDate("")}
        />
      </div>
      <Dropdown
        trigger={
          <div>
            <Input
              className={styles.status}
              combobox
              label={"Статус заказа"}
              value={statusText}
              placeholder={"Введите..."}
            />
          </div>
        }
        overlay={dlgStatus}
        className={styles.dropdown_list}
      />
      <div className={styles.summa}>
        <Input
          className={styles.summa__start}
          label={"Сумма заказа"}
          maskText={"от"}
          value={startSumma}
          incorrect={!validStartSumma}
          placeholder={"₽"}
          onChange={(e) => onChangeStartSumma(e.target.value)}
          onClickButton={() => onChangeStartSumma("")}
        />
        <Input
          className={styles.summa__end}
          label="&nbsp;"
          maskText={"до"}
          value={endSumma}
          incorrect={!validEndSumma}
          placeholder={"₽"}
          onChange={(e) => onChangeEndSumma(e.target.value)}
          onClickButton={() => onChangeEndSumma("")}
        />
      </div>
      <Button className={styles.apply} reverse onClick={onClickApply}>
        Применить
      </Button>
    </div>,
  ];
};
