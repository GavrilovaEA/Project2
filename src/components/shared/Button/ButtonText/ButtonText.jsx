export const ButtonText = ({ text }) => {
    let result = null;
    if (text) {
        result = <span className="button__text">{text}</span>;
    }
    return result;
};
