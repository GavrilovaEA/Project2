import cn from "classnames";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
