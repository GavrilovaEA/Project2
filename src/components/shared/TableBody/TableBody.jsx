import cn from "classnames";
import styles from "./TableBody.module.css";

export const TableBody = ({ className, children }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
