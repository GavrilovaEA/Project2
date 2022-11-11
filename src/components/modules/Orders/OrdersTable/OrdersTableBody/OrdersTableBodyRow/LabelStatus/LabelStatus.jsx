import cn from "classnames";
import styles from "./LabelStatus.module.css";

export const LabelStatus = ({ status }) => {
  return (
    <div className={cn(styles._, { [styles[status]]: true })}>
      <div className={styles.icon}></div>
      <div className={styles.text}></div>
    </div>
  );
};
