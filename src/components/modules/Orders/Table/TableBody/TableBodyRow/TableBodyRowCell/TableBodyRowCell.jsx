import cn from "classnames";
import styles from "./TableBodyRowCell.module.css";
import stylesColumn from "../../../TableColumn.module.css";

export const TableBodyRowCell = ({ text }) => {
  return <div className={cn(styles._, stylesColumn._)}>{text}</div>;
};
