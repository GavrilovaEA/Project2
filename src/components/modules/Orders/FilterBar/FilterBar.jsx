import { FilterStr } from "./FilterStr/FilterStr";
import { FilterForm } from "./FilterForm/FilterForm";
import "./filterBar.css";
import { loadStatus } from "../../../../dbase/data";
import { useState } from "react";

export const FilterBar = (props) => {
    // Загрузка списка статусов
    let statusData = loadStatus();
    for (let i = 0; i < statusData.length; i++) {
        statusData[i]["checked"] = false;
    }

    // Состояния
    const [find, setFind] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startSumma, setStartSumma] = useState("");
    const [endSumma, setEndSumma] = useState("");
    const [statusList, setStatusList] = useState(statusData);

    // Клик на элементе выпадающего списка
    const onSelectStatusList = (id) => {
        let newStatusList = statusList;
        for (let i = 0; i < newStatusList.length; i++) {
            if (newStatusList[i].id === id) {
                newStatusList[i].checked = !newStatusList[i].checked;
                break;
            }
        }
        setStatusList(newStatusList);
    };

    // Возврат значений фильтра
    const onClickBtApply = () => {
        const result = {
            startDate: startDate,
            endDate: endDate,
            startSumma: startSumma,
            endSumma: endSumma,
            statusList: statusList,
        };
        console.log(result);
        if (props.onApplyFilter) {
            props.onApplyFilter(result);
        }
    };

    const onResetFilter = () => {
        setStartDate("");
        setEndDate("");
        let newStatusList = statusList;
        for (let i = 0; i < newStatusList.length; i++) {
            newStatusList[i].checked = false;
        }
        setStatusList(newStatusList);
        setStartSumma("");
        setEndSumma("");
    };

    return (
        <div className="filter-bar filter-bar_show-form" id="filter">
            <FilterStr
                showForm={props.showForm}
                onChangeFind={(value) => setFind(value)}
                onClickBtFilter={props.onClickBtFilter}
                onResetFilter={onResetFilter}
                find={find}
            />
            <FilterForm
                startDate={startDate}
                endDate={endDate}
                statusList={statusList}
                startSumma={startSumma}
                endSumma={endSumma}
                showForm={props.showForm}
                onClickBtApply={onClickBtApply}
                onSelectStatusList={onSelectStatusList}
                onChangeStartDate={(value) => setStartDate(value)}
                onChangeEndDate={(value) => setEndDate(value)}
                onChangeStartSumma={(value) => setStartSumma(value)}
                onChangeEndSumma={(value) => setEndSumma(value)}
            />
        </div>
    );
};
