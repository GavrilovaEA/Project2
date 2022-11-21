import { useEffect, useState } from "react";
import { Button } from "../../../../shared/Button/Button";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import styles from "./PageHeader.module.css";

const html = document.getElementsByTagName("html")[0];

export const PageHeader = () => {
  const [theme, setTheme] = useState(html.getAttribute("theme") || "light");
  const [isShowDialogTheme, setShowDialogTheme] = useState(false);

  // Установка темы
  useEffect(() => {
    html.setAttribute("theme", theme);
  }, [theme]);

  // Содержимое формы выбора темы
  const dialogTheme = (
    <>
      <div className={styles.dialogCaption}>Выберите тему</div>
      <Button
        key="sun"
        iconName="sun"
        size="small"
        theme={theme === "dark" ? "reverse" : ""}
        onClick={() => {
          setTheme("light");
          setShowDialogTheme(false);
        }}
      >
        Светлая
      </Button>
      <Button
        key="moon"
        iconName="moon"
        size="small"
        theme={theme === "light" ? "reverse" : ""}
        onClick={() => {
          setTheme("dark");
          setShowDialogTheme(false);
        }}
      >
        Темная
      </Button>
    </>
  );

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
        overlay={dialogTheme}
        isShowExt={isShowDialogTheme}
        className={styles.dialogTheme}
        onClose={() => {
          setShowDialogTheme(false);
        }}
        onClick={() => setShowDialogTheme(!isShowDialogTheme)}
      />
    </div>
  );
};
