import React, { useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.css";
import { useState } from "react";

export const Dropdown = ({ trigger, overlay, className }) => {
  const [isShow, setShow] = useState(false);
  const refDropdown = useRef();

  // По нажатию вне Dropdown скрыть overlay
  useEffect(() => {
    const onClick = (e) => {
      if (!refDropdown.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Добавление управляющему элементу события onClick
  const newTrigger = React.cloneElement(trigger, {
    onClick: (e) => {
      setShow(!isShow);
    },
  });

  return (
    <div className={styles._} ref={refDropdown}>
      {newTrigger}
      {isShow && <div className={cn(styles.overlay, className)}>{overlay}</div>}
    </div>
  );
};
