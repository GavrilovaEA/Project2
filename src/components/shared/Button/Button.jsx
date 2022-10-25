import "./button.css";
import { ButtonIco } from "./ButtonIco/ButtonIco";
import { ButtonText } from "./ButtonText/ButtonText";

export const Button = (props) => {
    let mixin = "";
    if (props.small) {
        mixin += " button_small";
    }
    if (props["black-reverse"]) {
        mixin += " button_black-reverse";
    } else if (props.reverse) {
        mixin += " button_reverse";
    }
    if (props["width-all"]) {
        mixin += " button_width-all";
    }

    return (
        <button
            className={"button" + mixin + " " + props.className}
            onClick={props.onClick}
        >
            <ButtonIco icoName={props.icoName} />
            <ButtonText text={props.text} />
        </button>
    );
};
