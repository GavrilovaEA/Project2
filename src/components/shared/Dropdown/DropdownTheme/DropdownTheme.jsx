import { Button } from "../../Button/Button";

export const DropdownTheme = (props) => {
    return (
        <div className="dropdown" style={props.style}>
            <div className="dropdown__caption">Выберите тему</div>
            <Button
                icoName={"sun"}
                text={"Светлая"}
                small
                reverse
                onClick={props.onSetLight}
            />
            <Button
                icoName={"moon"}
                text={"Темная"}
                small
                onClick={props.onSetDark}
            />
        </div>
    );
};
