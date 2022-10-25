import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import { useState } from "react";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";

export const FilterForm = (props) => {
    // Состояния
    const [showStatusList, setShowStatusList] = useState({
        isShow: false,
        top: 0,
        left: 0,
    });

    // Показ/скрытие выпадающего списка
    const onShowHideStatusList = (e) => {
        let newShowStatusList = { isShow: false, top: 0, left: 0 };
        if (!showStatusList.isShow) {
            let el = e.currentTarget.parentElement;
            let coords = el.getBoundingClientRect();
            newShowStatusList.top = coords.bottom + window.pageYOffset;
            newShowStatusList.left = coords.left + window.pageXOffset;
            newShowStatusList.isShow = true;
        }
        setShowStatusList(newShowStatusList);
    };

    // Выпадающий список
    const dlgEdStatus = showStatusList.isShow ? (
        <Dropdown
            type={"ChkList"}
            data={props.statusList}
            top={showStatusList.top}
            left={showStatusList.left}
            onSelect={props.onSelectStatusList}
        />
    ) : null;

    // Строка статусов для Input
    const selectStatus = props.statusList.filter((item) => item.checked);
    let statusText = "Любой";
    if (
        selectStatus.length !== 0 &&
        selectStatus.length !== props.statusList.length
    ) {
        statusText = selectStatus.map((item) => item.name).join(", ");
    }

    let result = null;
    if (props.showForm) {
        result = [
            <div className="filter-bar__form">
                <div className="filter-bar__form__period">
                    <Input
                        className={"filter-bar__form__period__start"}
                        label={"Дата оформления"}
                        maskText={"с"}
                        value={props.startDate}
                        placeholder={"Введите..."}
                        validateType={"date"}
                        onChange={props.onChangeStartDate}
                    />
                    <Input
                        className={"filter-bar__form__period__end"}
                        label="&nbsp;"
                        maskText={"по"}
                        value={props.endDate}
                        placeholder={"Введите..."}
                        validateType={"date"}
                        onChange={props.onChangeEndDate}
                    />
                </div>
                <Input
                    className={"filter-bar__form__status"}
                    combobox
                    label={"Статус заказа"}
                    value={statusText}
                    placeholder={"Введите..."}
                    onClick={onShowHideStatusList}
                />
                <div key={"fbfs"} className="filter-bar__form__summa">
                    <Input
                        className={"filter-bar__form__summa__start"}
                        label={"Сумма заказа"}
                        maskText={"от"}
                        value={props.startSumma}
                        placeholder={"Введите.."}
                        validateType={"int"}
                        onChange={props.onChangeStartSumma}
                    />
                    <Input
                        className={"filter-bar__form__summa__end"}
                        label="&nbsp;"
                        maskText={"до"}
                        value={props.endSumma}
                        placeholder={"Введите..."}
                        validateType={"int"}
                        onChange={props.onChangeEndSumma}
                    />
                </div>
                <Button
                    className={"filter-bar__form__apply"}
                    reverse
                    text={"Применить"}
                    onClick={props.onClickBtApply}
                />
            </div>,
            dlgEdStatus,
        ];
    }
    return result;
};
