import { ReactComponent as SvgSun } from "../../../assets/sun.svg";
import { ReactComponent as SvgMoon } from "../../../assets/moon.svg";
import { ReactComponent as SvgLoad } from "../../../assets/load.svg";
import { ReactComponent as SvgFilter } from "../../../assets/filter.svg";
import { ReactComponent as SvgEdit } from "../../../assets/edit.svg";
import { ReactComponent as SvgRecycle } from "../../../assets/recycle.svg";
import { ReactComponent as SvgXLarge } from "../../../assets/xLarge.svg";
import { ReactComponent as SvgApply } from "../../../assets/apply.svg";
import { ReactComponent as SvgFind } from "../../../assets/find.svg";
import { ReactComponent as SvgLock } from "../../../assets/lock.svg";
import { ReactComponent as SvgX } from "../../../assets/x.svg";
import { ReactComponent as SvgDown } from "../../../assets/down.svg";
import { ReactComponent as SvgRadio } from "../../../assets/radio.svg";
import { ReactComponent as SvgCheckbox } from "../../../assets/checkbox.svg";

export const Icon = ({ iconName, className }) => {
  switch (iconName) {
    case "sun":
      return <SvgSun className={className} />;

    case "moon":
      return <SvgMoon className={className} />;

    case "load":
      return <SvgLoad className={className} />;

    case "filter":
      return <SvgFilter className={className} />;

    case "edit":
      return <SvgEdit className={className} />;

    case "recycle":
      return <SvgRecycle className={className} />;

    case "xLarge":
      return <SvgXLarge className={className} />;

    case "apply":
      return <SvgApply className={className} />;

    case "find":
      return <SvgFind className={className} />;

    case "lock":
      return <SvgLock className={className} />;

    case "x":
      return <SvgX className={className} />;

    case "down":
      return <SvgDown className={className} />;

    case "radio":
      return <SvgRadio className={className} />;

    case "checkbox":
      return <SvgCheckbox className={className} />;

    default:
      return null;
  }
};
