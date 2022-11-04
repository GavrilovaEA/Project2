import { FilterStr } from "./FilterStr/FilterStr";
import { FilterForm } from "./FilterForm/FilterForm";
import { loadStatus } from "../../../../dbase/data";
import { useState } from "react";
import styles from "./FilterBar.module.css";

export const FilterBar = ({ onApplyFilter }) => {
  // Состояния
  const [isShowForm, setShowForm] = useState(false);
  const [find, setFind] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startSumma, setStartSumma] = useState("");
  const [endSumma, setEndSumma] = useState("");
  const [statusSelected, setStatusSelected] = useState([]);

  // Демонстрация работы индикатора
  let loading = isShowForm;

  // Клик на элементе выпадающего списка
  const onSelectStatusList = (id) => {
    setStatusSelected(
      statusSelected.includes(id)
        ? statusSelected.filter((item) => item !== id)
        : [...statusSelected, id]
    );
  };

  // Валидация даты
  const validateDate = (value) => {
    if (value === "") return true;
    let result = true;
    let aTmp = value.split(".");
    if (aTmp.length !== 3) {
      result = false;
    }
    if (new Date(aTmp[2] + "-" + aTmp[1] + "-" + aTmp[0]) == "Invalid Date") {
      result = false;
    }
    return result;
  };

  // Валидация целого числа
  const validateInt = (value) => {
    if (value === "") return true;
    let result = !isNaN(Number(value));
    if (value.indexOf(".") !== -1) result = false;
    return result;
  };

  // Возврат значений фильтра
  const onClickApply = () => {
    if (
      validateDate(startDate) &&
      validateDate(endDate) &&
      validateInt(startSumma) &&
      validateInt(endSumma)
    ) {
      const result = {
        startDate: startDate,
        endDate: endDate,
        startSumma: startSumma,
        endSumma: endSumma,
        statusSelected: statusSelected,
      };
      onApplyFilter && onApplyFilter(result);
    } else {
      console.log("Ошибка валидации");
    }
  };

  // Сброс фильтров
  const onResetFilter = () => {
    setStartDate("");
    setEndDate("");
    setStatusSelected([]);
    setStartSumma("");
    setEndSumma("");
  };

  return (
    <div className={styles._} id="filter">
      <FilterStr
        showForm={isShowForm}
        onChangeFind={(value) => setFind(value)}
        onClickButtonFilter={() => setShowForm(!isShowForm)}
        onResetFilter={onResetFilter}
        find={find}
        loading={loading}
      />
      {isShowForm && (
        <FilterForm
          startDate={startDate}
          validStartDate={validateDate(startDate)}
          endDate={endDate}
          validEndDate={validateDate(endDate)}
          statusSelected={statusSelected}
          startSumma={startSumma}
          validStartSumma={validateInt(startSumma)}
          endSumma={endSumma}
          validEndSumma={validateInt(endSumma)}
          onClickApply={onClickApply}
          onSelectStatusList={onSelectStatusList}
          onChangeStartDate={(value) => setStartDate(value)}
          onChangeEndDate={(value) => setEndDate(value)}
          onChangeStartSumma={(value) => setStartSumma(value)}
          onChangeEndSumma={(value) => setEndSumma(value)}
        />
      )}
    </div>
  );
};
