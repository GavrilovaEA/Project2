import { useState } from "react";
import { Button } from "../../../shared/Button/Button";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import styles from "./PageHeader.module.css";

export const PageHeader = () => {
  const html = document.getElementsByTagName("html")[0];

  const [themeName, setThemeName] = useState(
    html.getAttribute("theme") || "light"
  );

  // Установка темы
  const setTheme = (theme) => {
    switch (theme) {
      case "light":
        html.removeAttribute("theme");
        setThemeName(theme);
        break;
      case "dark":
        html.setAttribute("theme", "dark");
        setThemeName(theme);
        break;
      default:
    }
  };

  // Содержимое формы выбора темы
  const dlgTheme = [
    <div className="dropdown__caption">Выберите тему</div>,
    <Button
      iconName={"sun"}
      small
      reverse={themeName === "dark"}
      onClick={() => setTheme("light")}
    >
      Светлая
    </Button>,
    <Button
      iconName={"moon"}
      small
      reverse={themeName === "light"}
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
            iconName={themeName === "light" ? "sun" : "moon"}
            reverse
          >
            {themeName === "light" ? "Светлая" : "Темная"}
          </Button>
        }
        overlay={dlgTheme}
        className={styles.dlgTheme}
      />
    </div>
  );
};
