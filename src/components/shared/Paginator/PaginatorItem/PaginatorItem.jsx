import cn from "classnames";
import styles from "./PaginatorItem.module.css";
export const PaginatorItem = ({ className, link, active, text, onClick }) => {
  const componentClass = cn(styles._, {
    [styles.link]: link,
    [styles.active]: active,
  });
  return (
    <div className={componentClass} onClick={onClick}>
      {text}
    </div>
  );
};
