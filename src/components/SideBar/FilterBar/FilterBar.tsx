import React from 'react';
import s from './FilterBar.module.scss';
import {useQueryFilter} from "../../../utils/hooks/useQueryFilter";
import {IFilterSelector} from "../../../models/IFilterSelector";
import {FilterKeys} from "../../../models/queryKeys/FilterKeys";
import {FilterSelector} from "./FilterSelector/FilterSelector";

const filters: IFilterSelector[] = [
    {title: 'Tags', filterKey: FilterKeys.TAG, values: ['summer', 'hot', 'holiday', 'friends']},
    {title: 'Category', filterKey: FilterKeys.CATEGORY, values: ['home', 'work', 'car']},
    {title: 'List', filterKey: FilterKeys.LIST, values: ['myWorkspace', 'SecretList']},
];

export const FilterBar = () => {

    const {filterActions, filterState} = useQueryFilter(['/users']);

    const filterSelectorsToRender = filters.map(filter =>
        <FilterSelector
            key={filter.filterKey}
            activeValues={filterState?.[filter.filterKey] || []}
            addFilter={(value) => filterActions[filter.filterKey].addItem(value)}
            {...filter}
        />);

    return (
        <div className={s.filterBarWrapper}>
            <h2>FilterBar</h2>
            <div className={s.selectorsWrapper}>
                {filterSelectorsToRender}
            </div>
        </div>
    );
};