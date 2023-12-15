import React from 'react';
import s from './FilterBar.module.scss';
import {IFilterSelector} from "../../../queryFilters/models/IFilterSelector";
import {FilterKeys} from "../../../queryFilters/models/FilterKeys";
import {FilterSelector} from "./FilterSelector/FilterSelector";
import {useQueryFilter} from "../../../queryFilters/useQueryFilter.consumer";

const filters: IFilterSelector[] = [
    {title: 'Tags', filterKey: FilterKeys.TAG, values: ['summer', 'hot', 'holiday', 'friends']},
    {title: 'Category', filterKey: FilterKeys.CATEGORY, values: ['home', 'work', 'car']},
    {title: 'List', filterKey: FilterKeys.LIST, values: ['myWorkspace', 'SecretList']},
    {title: 'Name', filterKey: FilterKeys.NAME, values: ['Alex', 'Marry']},
    {title: 'Fake', filterKey: FilterKeys.FAKE, values: ['Fake1', 'Fake2']},
];

export const FilterBar = () => {

    const {filterActions, filterEntries} = useQueryFilter();

    const filterSelectorsToRender = filters.map(filter => {

        const addFilterHandler = (value: string) => {
            filterActions[filter.filterKey].addItem(value);
        };

        const activeValues = filterEntries?.reduce(
            (acc, el) =>
                el[0] === filter.filterKey
                    ? [...acc, el[1]]
                    : acc,
            []) || [];

        return <FilterSelector
            key={filter.filterKey}
            activeValues={activeValues}
            addFilter={addFilterHandler}
            {...filter}
        />;
    });

    return (
        <div className={s.filterBarWrapper}>
            <h2>FilterBar</h2>
            <div className={s.selectorsWrapper}>
                {filterSelectorsToRender}
            </div>
        </div>
    );
};