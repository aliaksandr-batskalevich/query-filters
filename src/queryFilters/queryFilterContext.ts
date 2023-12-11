import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FilterState} from "../models/FilterState";
import {filterStateApi} from "../dal/filterStorage.api";
import {compareFilterState, createFilterState} from "./utils/filterState.utils";
import {FilterKeys, filterKeys} from "./models/FilterKeys";
import {createFilterEntries} from "./utils/searchParams.utils";
import {FilterAction} from "./models/FilterAction";
import {IFilterContext} from "./models/IFilterContext";


// CREATE CONTEXT
export const QueryFilterContext = React.createContext<null | IFilterContext>(null);

// CONTEXT VALUE
export const useFilterValueContext = (pages: string[]): IFilterContext => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [filterState, setFilterState] = useState<FilterState | undefined>();
    const [filterEntries, setFilterEntries] = useState<string[][]>([]);

    useEffect(() => {

        const filterStringInit = filterStateApi.getFilterString();

        if (filterStringInit) {
            searchParams = new URLSearchParams(filterStringInit);
            setSearchParams(searchParams);
        }

        setFilterState(createFilterState(filterKeys, searchParams));
        setFilterEntries(createFilterEntries(searchParams));

    }, []);

    useEffect(() => {
        const nextFilterState = createFilterState(filterKeys, searchParams);

        if (
            filterState
            && !compareFilterState(filterState, nextFilterState)
            && pages.some(page => window.location.href.indexOf(page) > -1)
        ) {
            setFilterState(nextFilterState);
            setFilterEntries(createFilterEntries(searchParams));
            filterStateApi.setFilterState(window.location.search);
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




