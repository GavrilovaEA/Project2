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
      <label className={styles.label}>
        {label}
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
      </label>
    </div>
  );
};
