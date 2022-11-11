import cn from "classnames";
import styles from "./TableCell.module.css";

export const TableCell = ({ className, children }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
