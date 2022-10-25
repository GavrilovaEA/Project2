import "./dropdown.css";
import { DropdownChkList } from "./DropdownChkList/DropdownChkList";
import { DropdownRadio } from "./DropdownRadio/DropdownRadio";
import { DropdownNumPage } from "./DropdownNumPage/DropdownNumPage";
import { DropdownDelRecs } from "./DropdownDelRecs/DropdownDelRecs";
import { DropdownTheme } from "./DropdownTheme/DropdownTheme";

export const Dropdown = (props) => {
    let result = null;
    let stylePosition = {
        position: "absolute",
        top: props.top,
        left: props.left,
    };
    switch (props.type) {
        case "ChkList":
            result = <DropdownChkList {...props} style={stylePosition} />;
            break;
        case "Radio":
            result = <DropdownRadio {...props} style={stylePosition} />;
            break;
        case "NumPage":
            result = <DropdownNumPage {...props} style={stylePosition} />;
            break;
        case "DelRecs":
            result = <DropdownDelRecs {...props} style={stylePosition} />;
            break;
        case "Theme":
            result = <DropdownTheme {...props} style={stylePosition} />;
            break;
        default:
            result = null;
            break;
    }
    return result;
};
