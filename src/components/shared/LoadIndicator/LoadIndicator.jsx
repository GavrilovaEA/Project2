import { Icon } from "../Icon/Icon";
import cn from "classnames";
import styles from "./LoadIndicator.module.css";

export const LoadIndicator = ({ loading }) => {
  return (
    <div className={styles._}>
      <Icon
        iconName="load"
        className={cn(styles.ico, { [styles.loading]: loading })}
      />
      Загрузка
    </div>
  );
};
