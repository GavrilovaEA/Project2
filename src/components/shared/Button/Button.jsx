import cn from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.css";

export const Button = ({
  className,
  small,
  blackReverse,
  reverse,
  widthAll,
  iconName,
  iconClass,
  onClick,
  children,
}) => {
  const componentClass = cn(
    styles._,
    {
      [styles.size_small]: small,
      [styles.blackReverse]: blackReverse,
      [styles.reverse]: reverse,
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
