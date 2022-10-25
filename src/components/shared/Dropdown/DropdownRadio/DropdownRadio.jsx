import { Check } from "../../Check/Check";

export const DropdownRadio = (props) => {
    let list = [];
    for (let i = 0; i < props.data.length; i++) {
        list.push(
            <Check
                key={"chk" + i}
                type={"radio"}
                text={props.data[i].name}
                noindicator
                name={props.name}
                id={props.data[i].id}
                checked={props.data[i].selected}
            />
        );
    }
    return (
        <div className="dropdown dropdown_list" style={props.style}>
            {list}
        </div>
    );
};
