import { useEffect, useRef, useState } from "react";
import { InputIcoLeft } from "./InputIcoLeft/InputIcoLeft";
import { InputMask } from "./InputMask/InputMask";
import { InputButton } from "./InputButton/InputButton";
import "./input.css";

export const Input = (props) => {
    const [value, setValue] = useState(props.value);
    const [isIncorrect, setIncorrect] = useState(props.incorrect);

    useEffect(() => setValue(props.value));

    const edValue = useRef();

    const validateDate = (value) => {
        let result = true;
        let aTmp = value.split(".");
        if (aTmp.length !== 3) {
            result = false;
        }

        var sTmp = aTmp[2] + "-" + aTmp[1] + "-" + aTmp[0];
        if (new Date(sTmp) === "Invalid Date") {
            result = false;
        }
        return result;
    };

    const validateInt = (value) => {
        let result = !isNaN(Number(value));
        if (value.indexOf(".") !== -1) result = false;
        return result;
    };

    const validateFloat = (value) => {
        return !isNaN(Number(value));
    };

    let handleValidate = null;
    if (props.onValidate) {
        handleValidate = props.onValidate;
    } else {
        switch (props.validateType) {
            case "int":
                handleValidate = validateInt;
                break;
            case "float":
                handleValidate = validateFloat;
                break;
            case "date":
                handleValidate = validateDate;
                break;
            default:
                handleValidate = null;
        }
    }

    const onReset = () => {
        setValue("");
        edValue.current.focus();
        if (props.onChange) {
            props.onChange("");
        }
    };

    const onChange = (e) => {
        setValue(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
        if (handleValidate) {
            setIncorrect(!handleValidate(e.target.value));
        }
    };

    let mixin = "";
    let readOnly = false;
    let buttonIcoName = "";
    let onClick = onReset;
    if (value) {
        buttonIcoName = "x";
    }
    if (props.disabled) {
        mixin += " input_disabled";
        readOnly = true;
        buttonIcoName = "lock";
        onClick = null;
    }
    if (value === "") {
        mixin += " input_empty";
    }
    if (isIncorrect) {
        mixin += " input_incorrect";
    }
    if (props.combobox) {
        mixin += " input_combo-box";
        readOnly = true;
        buttonIcoName = "down";
        onClick = props.onClick || null;
    }

    let result = null;
    result = (
        <div className={"input" + mixin + " " + props.className}>
            <label className={"input__label"}>
                {props.label}
                <div className="input__field">
                    <InputIcoLeft icoName={props.icoName} />
                    <InputMask text={props.maskText} />
                    <input
                        ref={edValue}
                        className="input__input"
                        type="text"
                        value={props.combobox ? props.value : value}
                        placeholder={props.placeholder}
                        readOnly={readOnly}
                        onChange={onChange}
                    />
                    <InputButton icoName={buttonIcoName} onClick={onClick} />
                </div>
            </label>
        </div>
    );
    return result;
};
