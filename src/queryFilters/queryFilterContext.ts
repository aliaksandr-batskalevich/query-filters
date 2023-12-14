import React, {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import {FilterState} from "../models/FilterState";
import {compareFilterState, createFilterState} from "./utils/filterState.utils";
import {FilterKeys, filterKeys} from "./models/FilterKeys";
import {createFilterEntries} from "./utils/searchParams.utils";
import {FilterAction} from "./models/FilterAction";
import {IFilterContext} from "./models/IFilterContext";


// CREATE CONTEXT
export const QueryFilterContext = React.createContext<null | IFilterContext>(null);

// CONTEXT VALUE
export const useFilterValueContext = (): IFilterContext => {

    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const [filterState, setFilterState] = useState<FilterState>(createFilterState(filterKeys, searchParams));
    const [filterEntries, setFilterEntries] = useState<string[][]>(createFilterEntries(searchParams));

    useEffect(() => {
        const nextFilterState = createFilterState(filterKeys, searchParams);

        if (filterState && !compareFilterState(filterState, nextFilterState)) {
            console.log(filterState, nextFilterState)
            console.log('change filter state!')
            setFilterState(nextFilterState);
            setFilterEntries(createFilterEntries(searchParams));
        }

    }, [searchParams, setFilterState, filterState]);

    const filterActions = {} as Record<FilterKeys, FilterAction>;
    filterKeys.forEach(fk => {
        filterActions[fk] = new FilterAction(fk, searchParams, setSearchParams);
    });

    const clearFilter = () => {
        filterKeys.forEach(fk => {
            searchParams.delete(fk);
        });
        setSearchParams(searchParams);
    };

    return {filterEntries, filterState, filterActions, clearFilter};
};




