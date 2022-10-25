import "./check.css";
import { CheckIndicator } from "./CheckIndicator/CheckIndicator";
import { CheckText } from "./CheckText/CheckText";

export const Check = (props) => {
    let result = null;
    result = (
        <label className="check">
            <input
                className="check__input"
                type={props.type}
                name={props.name}
                id={props.id}
                defaultChecked={props.checked}
                onChange={() => props.onSelect(props.id)}
            />
            <CheckIndicator type={props.type} noindicator={props.noindicator} />
            <CheckText text={props.text} />
        </label>
    );
    return result;
};
