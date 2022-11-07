import { useEffect, useState } from "react";
import { Button } from "../../../shared/Button/Button";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import styles from "./PageHeader.module.css";

export const PageHeader = () => {
  const html = document.getElementsByTagName("html")[0];

  const [theme, setTheme] = useState(html.getAttribute("theme") || "light");

  // Установка темы
  useEffect(() => {
    html.setAttribute("theme", theme);
    // eslint-disable-next-line
  }, [theme]);

  // Содержимое формы выбора темы
  const dlgTheme = [
    <div className={styles.dlgCaption}>Выберите тему</div>,
    <Button
      key="sun"
      iconName="sun"
      size="small"
      theme={theme === "dark" ? "reverse" : ""}
      onClick={() => setTheme("light")}
    >
      Светлая
    </Button>,
    <Button
      key="moon"
      iconName="moon"
      size="small"
      theme={theme === "light" ? "reverse" : ""}
      onClick={() => setTheme("dark")}
    >
      Темная
    </Button>,
  ];

  return (
    <div className={styles._}>
      <div className={styles.title}>Список заказов</div>
      <Dropdown
        trigger={
          <Button
            className={styles.buttonTheme}
            iconName={theme === "light" ? "sun" : "moon"}
            theme="reverse"
          >
            {theme === "light" ? "Светлая" : "Темная"}
          </Button>
        }
        overlay={dlgTheme}
        className={styles.dlgTheme}
      />
    </div>
  );
};
