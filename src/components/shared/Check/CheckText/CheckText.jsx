export const CheckText = ({ text }) => {
    let result = null;
    if (text) {
        result = <span className="check__text">{text}</span>;
    }
    return result;
};
