import { Check } from "../../Check/Check";

export const DropdownChkList = (props) => {
    let list = [];
    for (let i = 0; i < props.data.length; i++) {
        list.push(
            <Check
                key={"chk" + i}
                type={"checkbox"}
                name={"exCheckBox"}
                text={props.data[i].name}
                id={props.data[i].id}
                checked={props.data[i].checked}
                onSelect={props.onSelect}
            />
        );
    }
    return (
        <div className="dropdown dropdown_list" style={props.style}>
            {list}
        </div>
    );
};
