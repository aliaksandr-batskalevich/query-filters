import React from 'react';
import s from './FilterSelector.module.scss';
import {IFilterSelector} from "../../../../models/IFilterSelector";
import {FilterOption} from "./FilterOption/FilterOption";

interface FilterSelectorProps extends IFilterSelector {
    activeValues: string[];
    addFilter: (value: string) => void;
}

export const FilterSelector: React.FC<FilterSelectorProps> = ({
                                                                  title,
                                                                  values,
                                                                  activeValues,
                                                                  addFilter,
                                                              }) => {

    const optionsToRender = values.map(value =>
        <FilterOption
            key={value}
            filterValue={value}
            isActive={activeValues.includes(value)}
            addFilter={addFilter}
        />)

    return (
        <div className={s.filterSelector}>
            <h3>{title}</h3>
            <div className={s.optionsWrapper}>
                {optionsToRender}
            </div>
        </div>
    );
};