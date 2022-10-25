import { PageHeader } from "./PageHeader/PageHeader";
import { FilterBar } from "./FilterBar/FilterBar";
import { useState } from "react";

export const Orders = () => {
    let [isShowFilter, setShowFilter] = useState(false);
    return (
        <div className={"App"}>
            <PageHeader themeIco={"sun"} themeText={"Светлая"} />
            <FilterBar
                showForm={isShowFilter}
                onClickBtFilter={() => setShowFilter(!isShowFilter)}
            />
        </div>
    );
};
