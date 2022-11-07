import cn from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.css";

export const Button = ({
  className,
  size,
  theme,
  widthAll,
  iconName,
  iconClass,
  onClick,
  children,
}) => {
  const componentClass = cn(
    styles._,
    {
      [styles["size_" + size]]: size,
      [styles[theme]]: theme,
      [styles.widthAll]: widthAll,
    },
    className
  );

  return (
    <button className={componentClass} onClick={onClick}>
      <Icon iconName={iconName} className={cn(styles.ico, iconClass)} />
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
