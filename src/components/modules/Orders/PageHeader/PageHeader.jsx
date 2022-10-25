import { useState } from "react";
import { Button } from "../../../shared/Button/Button";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import "./pageHeader.css";

export const PageHeader = (props) => {
    const [showDlgTheme, setShowDlgTheme] = useState({
        isShow: false,
        top: 0,
        left: 0,
    });

    // Отображение скрытие диалога выбора тем
    const onShowTheme = (e) => {
        let newShowDlgTheme = { isShow: false, top: 0, left: 0 };
        if (!showDlgTheme.isShow) {
            let el = e.currentTarget;
            let coords = el.getBoundingClientRect();
            newShowDlgTheme.top = coords.bottom + window.pageYOffset;
            newShowDlgTheme.left = coords.left + window.pageXOffset;
            newShowDlgTheme.isShow = true;
        }
        setShowDlgTheme(newShowDlgTheme);
    };

    // Установка темы
    const setTheme = (theme) => {
        let html = document.getElementsByTagName("html")[0];
        switch (theme) {
            case "light":
                html.removeAttribute("theme");
                break;
            case "dark":
                html.setAttribute("theme", "dark");
                break;
            default:
        }
        setShowDlgTheme({ isShow: false, top: 0, left: 0 });
    };

    let dlgTheme = null;
    if (showDlgTheme.isShow) {
        dlgTheme = (
            <Dropdown
                type={"Theme"}
                top={showDlgTheme.top}
                left={showDlgTheme.left}
                onSetLight={() => setTheme("light")}
                onSetDark={() => setTheme("dark")}
            />
        );
    }
    return [
        <div className="page-header">
            <div className="page-header__title">Список заказов</div>
            <Button
                icoName={props.themeIco}
                text={props.themeText}
                reverse
                onClick={onShowTheme}
            />
        </div>,
        dlgTheme,
    ];
};
