import cn from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Radio.module.css";

export const Radio = ({
  className,
  name,
  checked,
  noindicator,
  text,
  onChange,
}) => {
  const componentClass = cn(styles._, className);

  return (
    <label className={componentClass}>
      <input
        type="radio"
        className={styles.input}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {!noindicator && <Icon className={styles.ico} iconName="radio" />}
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};
