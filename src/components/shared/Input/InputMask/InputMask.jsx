export const InputMask = ({ text }) => {
    let result = null;
    if (text) {
        result = <span className="input__mask">{text}</span>;
    }
    return result;
};
