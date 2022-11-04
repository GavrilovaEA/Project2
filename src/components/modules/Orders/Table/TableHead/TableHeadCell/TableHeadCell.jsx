import cn from "classnames";
import { Icon } from "../../../../../shared/Icon/Icon";
import styles from "./TableHeadCell.module.css";
import stylesColumn from "../../TableColumn.module.css";

export const TableHeadCell = ({ caption, sort, sorting }) => {
  const componentClass = cn(styles._, stylesColumn._, {
    [styles.sorting]: sorting,
  });
  return (
    <div className={componentClass}>
      <div className={styles.text}>{caption}</div>
      {sort && (
        <div className={styles.ico}>
          <Icon className={styles.svg} iconName={"down"} />
        </div>
      )}
    </div>
  );
};
