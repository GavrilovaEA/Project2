import { Filters } from "./Filters/Filters";
import { FilterForm } from "./FilterForm/FilterForm";
import { useState } from "react";
import styles from "./FilterBar.module.css";

export const FilterBar = ({ onApplyFilter }) => {
  // Состояния
  const [isShowForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startAmount, setStartAmount] = useState("");
  const [endAmount, setEndAmount] = useState("");
  const [selectedStatuses, setStatusSelected] = useState([]);

  // Демонстрация работы индикатора
  let loading = isShowForm;

  // Клик на элементе выпадающего списка
  const onSelectStatusList = (id) => {
    setStatusSelected(
      selectedStatuses.includes(id)
        ? selectedStatuses.filter((item) => item !== id)
        : [...selectedStatuses, id]
    );
  };

  // Валидация даты
  const validateDate = (value) => {
    if (value === "") return true;
    let dateArr = value.split(".");
    if (dateArr.length !== 3) {
      return false;
    }
    const [day, month, year] = dateArr;
    if (
      new Date(year + "-" + month + "-" + day).toString() === "Invalid Date"
    ) {
      return false;
    }
    return true;
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
      validateInt(startAmount) &&
      validateInt(endAmount)
    ) {
      const result = {
        startDate: startDate,
        endDate: endDate,
        startAmount: startAmount,
        endAmount: endAmount,
        selectedStatuses: selectedStatuses,
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
    setStartAmount("");
    setEndAmount("");
  };

  return (
    <div className={styles._} id="filter">
      <Filters
        showForm={isShowForm}
        onChangeSearch={(value) => setSearch(value)}
        onClickButtonFilter={() => setShowForm(!isShowForm)}
        onResetFilter={onResetFilter}
        search={search}
        loading={loading}
      />
      {isShowForm && (
        <FilterForm
          startDate={startDate}
          isValidStartDate={validateDate(startDate)}
          endDate={endDate}
          isValidEndDate={validateDate(endDate)}
          selectedStatuses={selectedStatuses}
          startAmount={startAmount}
          isValidStartAmount={validateInt(startAmount)}
          endAmount={endAmount}
          isValidEndAmount={validateInt(endAmount)}
          onClickApply={onClickApply}
          onSelectStatusList={onSelectStatusList}
          onChangeStartDate={(value) => setStartDate(value)}
          onChangeEndDate={(value) => setEndDate(value)}
          onChangeStartAmount={(value) => setStartAmount(value)}
          onChangeEndAmount={(value) => setEndAmount(value)}
        />
      )}
    </div>
  );
};
