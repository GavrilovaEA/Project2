import { Input } from "../../Input/Input";

export const DropdownNumPage = (props) => {
    return (
        <div className="dropdown" style={props.style}>
            <Input label={"Номер страницы"} placeholder={"Введите номер"} />
        </div>
    );
};
