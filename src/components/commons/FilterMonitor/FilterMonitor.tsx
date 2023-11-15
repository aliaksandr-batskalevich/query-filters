import React from 'react';
import s from './FilterMonitor.module.scss';
import {useQueryFilter} from "../../../utils/hooks/useQueryFilter";
import {FilterKeys} from "../../../models/queryKeys/FilterKeys";
import {FilterElement} from "./FilterElement/FilterElement";

interface FilterMonitorProps {
    pages: string[];
}

export const FilterMonitor: React.FC<FilterMonitorProps> = ({pages}) => {

    const {filterEntries, filterActions, clearFilter} = useQueryFilter(pages);

    const removeFilterHandler = (title: string, value: string) => {
        filterActions[title as FilterKeys].removeItem(value);
    };

    const filtersToRender = filterEntries.map(f =>
        <FilterElement
            key={Math.random()}
            filterKey={f[0]}
            value={f[1]}
            removeFilter={removeFilterHandler}
        />);

    return (
        <div className={s.filterMonitor}>
            <div className={s.filterLabel}/>
            {filtersToRender.length
                ? <>
                    {filtersToRender}
                    <button
                        className={s.clearAllButton}
                        data-title='Clear all'
                        onClick={clearFilter}
                    />
                </>
                : 'No active filters.'}
        </div>
    );
};