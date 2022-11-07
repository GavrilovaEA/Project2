import { Icon } from "../../../Icon/Icon";
import cn from "classnames";
import styles from "./TableHeaderCell.module.css";

export const TableHeaderCell = ({
  className,
  onSort,
  sorting,
  children,
  icon = "down",
}) => {
  const componentClass = cn(styles._, className, {
    [styles.sorting]: sorting,
  });

  return (
    <div className={componentClass}>
      <div className={styles.text}>{children}</div>
      {onSort && (
        <div className={styles.iconWrapper} onClick={onSort}>
          <Icon className={styles.icon} iconName={icon} />
        </div>
      )}
    </div>
  );
};
