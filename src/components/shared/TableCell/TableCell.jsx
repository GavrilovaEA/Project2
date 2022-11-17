import cn from "classnames";
import styles from "./TableCell.module.css";

export const TableCell = ({ className, children, onClick, onDoubleClick }) => {
  return (
    <div
      className={cn(styles._, className)}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </div>
  );
};
