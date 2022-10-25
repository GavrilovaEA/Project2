import { ReactComponent as SvgLock } from "../../../../../assets/lock.svg";
import { ReactComponent as SvgX } from "../../../../../assets/x.svg";
import { ReactComponent as SvgDown } from "../../../../../assets/down.svg";

export const InputButtonIco = ({ icoName }) => {
    let result = null;
    switch (icoName) {
        case "lock":
            result = (
                <SvgLock className="input__icoRight input__icoRight-locked" />
            );
            break;
        case "x":
            result = <SvgX className="input__icoRight input__icoRight-x" />;
            break;
        case "down":
            result = (
                <SvgDown className="input__icoRight input__icoRight-down" />
            );
            break;
        default:
            result = null;
    }
    return result;
};
