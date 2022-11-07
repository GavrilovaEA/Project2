import { ReactComponent as SvgSun } from "./icons/sun.svg";
import { ReactComponent as SvgMoon } from "./icons/moon.svg";
import { ReactComponent as SvgLoad } from "./icons/load.svg";
import { ReactComponent as SvgFilter } from "./icons/filter.svg";
import { ReactComponent as SvgEdit } from "./icons/edit.svg";
import { ReactComponent as SvgRecycle } from "./icons/recycle.svg";
import { ReactComponent as SvgXLarge } from "./icons/xLarge.svg";
import { ReactComponent as SvgApply } from "./icons/apply.svg";
import { ReactComponent as SvgSearch } from "./icons/search.svg";
import { ReactComponent as SvgLock } from "./icons/lock.svg";
import { ReactComponent as SvgX } from "./icons/x.svg";
import { ReactComponent as SvgDown } from "./icons/down.svg";
import { ReactComponent as SvgRadio } from "./icons/radio.svg";
import { ReactComponent as SvgCheckbox } from "./icons/checkbox.svg";

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

    case "search":
      return <SvgSearch className={className} />;

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
