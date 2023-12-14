import React, {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import {FilterPart, FilterState} from "./models/FilterState";
import {compareFilterPart, createFilterPart, createFilterState, updateFilterState} from "./utils/filterState.utils";
import {FilterKeys, filterKeys} from "./models/FilterKeys";
import {createFilterEntriesState, updateFilterEntriesState} from "./utils/filterEntries.utils";
import {FilterAction} from "./models/FilterAction";
import {IFilterContext} from "./models/IFilterContext";
import {FilterEntriesState} from "./models/FilterEntriesState";


// CREATE CONTEXT
export const QueryFilterContext = React.createContext<null | IFilterContext>(null);

// CONTEXT VALUE
export const useFilterValueContext = (): IFilterContext => {

    const {pathname} = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const [filterState, setFilterState] = useState<FilterState>(
        createFilterState(pathname, searchParams)
    );
    const [filterEntriesState, setFilterEntriesState] = useState<FilterEntriesState>(
        createFilterEntriesState(pathname, searchParams)
    );

    useEffect(() => {

        const nextFilterPart = createFilterPart(searchParams);

        if (!compareFilterPart(filterState[pathname] || {} as FilterPart, nextFilterPart)) {

            setFilterState(updateFilterState(pathname, filterState, nextFilterPart));
            setFilterEntriesState(updateFilterEntriesState(pathname, filterEntriesState, searchParams));

        }

    }, [pathname, searchParams, setFilterState, filterState]);

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

    const addQueryToPath = (path: string): string => filterEntriesState[path]
        ? path + '?' + new URLSearchParams(filterEntriesState[path]).toString()
        : path;

    return {
        filterPart: filterState[pathname],
        filterEntries: filterEntriesState[pathname],
        filterActions,
        clearFilter,
        addQueryToPath,
    };
};




