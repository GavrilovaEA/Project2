import { Button } from "../../Button/Button";

export const DropdownDelRecs = (props) => {
    return (
        <div className="dropdown" style={props.style}>
            <div className="dropdown__caption">
                Удалить {props.kolRec} записей?
            </div>
            <Button text={"Удалить"} small reverse />
            <Button text={"Отмена"} small />
        </div>
    );
};
