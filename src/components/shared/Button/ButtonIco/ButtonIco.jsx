import { ReactComponent as SvgSun } from "../../../../assets/sun.svg";
import { ReactComponent as SvgMoon } from "../../../../assets/moon.svg";
import { ReactComponent as SvgLoad } from "../../../../assets/load.svg";
import { ReactComponent as SvgFilter } from "../../../../assets/filter.svg";
import { ReactComponent as SvgEdit } from "../../../../assets/edit.svg";
import { ReactComponent as SvgRecycle } from "../../../../assets/recycle.svg";
import { ReactComponent as SvgXLarge } from "../../../../assets/xLarge.svg";
import { ReactComponent as SvgApply } from "../../../../assets/apply.svg";

export const ButtonIco = ({ icoName }) => {
    let result = null;
    switch (icoName) {
        case "sun":
            result = <SvgSun className={"button__ico"} />;
            break;
        case "moon":
            result = <SvgMoon className={"button__ico"} />;
            break;
        case "load":
            result = <SvgLoad className={"button__ico"} />;
            break;
        case "filter":
            result = <SvgFilter className={"button__ico"} />;
            break;
        case "edit":
            result = <SvgEdit className={"button__ico"} />;
            break;
        case "recycle":
            result = <SvgRecycle className={"button__ico"} />;
            break;
        case "xLarge":
            result = <SvgXLarge className={"button__ico"} />;
            break;
        case "apply":
            result = <SvgApply className={"button__ico"} />;
            break;
        default:
            result = null;
            break;
    }
    return result;
};
