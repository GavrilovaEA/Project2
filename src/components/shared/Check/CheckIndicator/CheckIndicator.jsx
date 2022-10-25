import { ReactComponent as SvgRadio } from "../../../../assets/radio.svg";
import { ReactComponent as SvgCheckbox } from "../../../../assets/checkbox.svg";

export const CheckIndicator = ({ noindicator, type }) => {
    let result = null;
    if (!noindicator) {
        switch (type) {
            case "radio":
                result = <SvgRadio className={"check__ico"} />;
                break;
            case "checkbox":
                result = <SvgCheckbox className={"check__ico"} />;
                break;
            default:
                result = null;
                break;
        }
    }
    return result;
};
