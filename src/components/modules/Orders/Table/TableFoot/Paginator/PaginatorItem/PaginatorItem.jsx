import cn from "classnames";
import styles from "./PaginatorItem.module.css";
export const PaginatorItem = ({ className, link, active, text }) => {
  const componentClass = cn(styles._, {
    [styles.link]: link,
    [styles.active]: active,
  });
  return <div className={componentClass}>{text}</div>;
};
