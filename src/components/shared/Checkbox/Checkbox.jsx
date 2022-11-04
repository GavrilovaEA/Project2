import cn from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  className,
  checked,
  noindicator,
  text,
  onChange,
}) => {
  const componentClass = cn(styles._, className);

  return (
    <label className={componentClass}>
      <input
        type={"checkbox"}
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      {!noindicator && <Icon className={styles.ico} iconName={"checkbox"} />}
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};
