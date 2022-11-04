import classnames from "classnames";
import { InputButton } from "./InputButton/InputButton";
import { Icon } from "../Icon/Icon";
import styles from "./Input.module.css";

export const Input = ({
  className,
  disabled,
  value,
  incorrect,
  combobox,
  onClickButton,
  label,
  iconName,
  maskText,
  placeholder,
  onChange,
}) => {
  const componentClass = classnames(
    styles._,
    {
      [styles.disabled]: disabled,
      [styles.empty]: value === "",
      [styles.incorrect]: incorrect,
      [styles.combobox]: combobox,
      [styles.nolabel]: !label,
    },
    className
  );

  let buttonIconName = "";
  if (value) {
    buttonIconName = "x";
  }
  if (disabled) {
    buttonIconName = "lock";
  }
  if (combobox) {
    buttonIconName = "down";
  }

  return (
    <div className={componentClass}>
      <label className={styles.label}>
        {label}
        <div className={styles.field}>
          {iconName && <Icon className={styles.icoLeft} iconName={iconName} />}
          {maskText && <span className={styles.mask}>{maskText}</span>}
          <input
            className={styles.input}
            type="text"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
          />
          {buttonIconName && (
            <InputButton iconName={buttonIconName} onClick={onClickButton} />
          )}
        </div>
      </label>
    </div>
  );
};
