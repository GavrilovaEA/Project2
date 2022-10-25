import { InputButtonIco } from "./InputButtonIco/InputButtonIco";

export const InputButton = ({ icoName, onClick }) => {
    let result = null;
    if (icoName) {
        result = (
            <button className="input__button" tabIndex="-1" onClick={onClick}>
                <InputButtonIco icoName={icoName} />
            </button>
        );
    }
    return result;
};
