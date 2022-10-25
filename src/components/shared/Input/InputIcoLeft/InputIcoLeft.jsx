import { ReactComponent as SvgFind } from "../../../../assets/find.svg";

export const InputIcoLeft = ({ icoName }) => {
    let result = null;
    switch (icoName) {
        case "find":
            result = <SvgFind className={"input__icoLeft"} />;
            break;
        default:
            result = null;
    }
    return result;
};
