import { Filters } from "./Filters/Filters";
import { FilterForm } from "./FilterForm/FilterForm";
import { useState } from "react";
import styles from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../model/filtersSlice";
import { setSort } from "../../model/sortSlice";
import { selectFilter, selectSearch } from "../../model/ordersTableSelectors";
import { deselectAllOrders } from "../../model/ordersSlice";

export const FilterBar = () => {
  // Состояния

  const [isShowForm, setShowForm] = useState(false);

  const [search, setSearch] = useState(useSelector(selectSearch));
  const [startDate, setStartDate] = useState(
    useSelector(selectFilter).startDate
  );
  const [endDate, setEndDate] = useState(useSelector(selectFilter).endDate);
  const [startAmount, setStartAmount] = useState(
    useSelector(selectFilter).startAmount
  );
  const [endAmount, setEndAmount] = useState(
    useSelector(selectFilter).endAmount
  );
  const [selectedStatuses, setStatusSelected] = useState(
    useSelector(selectFilter).selectedStatuses
  );

  // Демонстрация работы индикатора
  let loading = isShowForm;

  const dispatch = useDispatch();

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
      dispatch(setFilter(result));
      dispatch(deselectAllOrders());
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

    dispatch(
      setFilter({
        startDate: "",
        endDate: "",
        startAmount: "",
        endAmount: "",
        selectedStatuses: [],
      })
    );
    dispatch(setSort({ fieldName: "date", asc: false }));
    dispatch(deselectAllOrders());
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
