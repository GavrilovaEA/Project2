import cn from "classnames";
import styles from "./Table.module.css";

export const Table = ({ className, children }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
