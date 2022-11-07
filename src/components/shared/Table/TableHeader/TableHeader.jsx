import cn from "classnames";
import styles from "./TableHeader.module.css";

export const TableHeader = ({ className, children }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
