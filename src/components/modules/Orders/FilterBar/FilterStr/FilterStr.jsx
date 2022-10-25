import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";

export const FilterStr = (props) => {
    let result = null;
    let mixin = "";
    if (!props.showForm) {
        mixin = " button_reverse";
    }
    let renderForm = [];
    renderForm.push(
        <Input
            className={"filter-bar__str__group-item__input-find"}
            icoName={"find"}
            placeholder={"Номер заказа или ФИО"}
            onChange={props.onChangeFind}
            value={props.find}
        />
    );
    renderForm.push(
        <Button
            className={"filter-bar__str__group-item__button-show" + mixin}
            icoName={"filter"}
            text={"Фильтры"}
            onClick={props.onClickBtFilter}
        />
    );
    if (props.showForm)
        renderForm.push(
            <Button
                className={"filter-bar__str__group-item__button-reset"}
                text={"Сбросить фильтры"}
                reverse
                onClick={props.onResetFilter}
            />
        );
    result = (
        <div className="filter-bar__str">
            <div className="filter-bar__str__group-item">{renderForm}</div>
            <Button
                className={"filter-bar__str__button-load"}
                icoName={"load"}
                text={"Загрузка"}
                reverse
            />
        </div>
    );
    return result;
};
