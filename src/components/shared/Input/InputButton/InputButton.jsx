import { Icon } from "../../Icon/Icon";
import cn from "classnames";
import styles from "../Input.module.css";

export const InputButton = ({ className, iconName, onClick }) => {
  const iconClass = cn(styles.icoRight, {
    [styles.icoRightLocked]: iconName === "lock",
    [styles.icoRightX]: iconName === "x",
    [styles.icoRightDown]: iconName === "down",
  });
  return (
    <button className={styles.button} tabIndex="-1" onClick={onClick}>
      <Icon className={iconClass} iconName={iconName} />
    </button>
  );
};
