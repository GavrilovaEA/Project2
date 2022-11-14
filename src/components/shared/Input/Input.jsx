import classnames from "classnames";
import styles from "./Input.module.css";
import { Icon } from "../Icon/Icon";

export const Input = ({
  className,
  disabled,
  value,
  incorrect,
  onReset,
  label,
  prefix,
  postfix,
  placeholder,
  onChange,
  onKeyDown,
}) => {
  const componentClass = classnames(
    styles._,
    {
      [styles.disabled]: disabled,
      [styles.empty]: value === "",
      [styles.incorrect]: incorrect,
      [styles.nolabel]: !label,
    },
    className
  );

  return (
    <div className={componentClass}>
      <div className={styles.label}>{label}</div>
      <div className={styles.field}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={styles.input}
          type="text"
          value={value}
          readOnly={!onChange}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className={styles.postfix} onClick={onReset}>
          {postfix ? (
            postfix
          ) : disabled ? (
            <Icon className={styles.icoRight} iconName="lock" />
          ) : (
            onReset &&
            value && (
              <Icon
                className={styles.icoRight}
                iconName="x"
                onClick={onReset}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
