import {useEffect, useState} from "react";
import {useSearchParams} from 'react-router-dom';
import {filterKeys, FilterKeys} from "../../models/queryKeys/FilterKeys";
import {FilterState} from "../../models/FilterState";
import {filterStateApi} from "../../dal/filterStorage.api";


const createFilterState = (filterKeys: FilterKeys[], searchParams: URLSearchParams): FilterState => {
    const initialFilterState = {} as FilterState;
    filterKeys.forEach(fk => {
        const filterValue = searchParams.getAll(fk);
        if (!filterValue.length) return;

        initialFilterState[fk] = filterValue;
    });

    return initialFilterState;
};

const createFilterEntries = (searchParams: URLSearchParams): string[][] =>
    Array.from(searchParams.entries())
        .filter(f => filterKeys.includes(f[0] as FilterKeys));

const compareFilterState = (prevFilterState: FilterState, nextFilterState: FilterState): boolean => {
    const prevFilterKeys = Object.keys(prevFilterState) as FilterKeys[];
    const nextFilterKeys = Object.keys(nextFilterState) as FilterKeys[];
    if (prevFilterKeys.length !== nextFilterKeys.length) return false;

    for (let key of prevFilterKeys) {
        if (!nextFilterKeys.includes(key)) return false;

        const prevValues = prevFilterState[key];
        const nextValues = nextFilterState[key];
        if (prevValues.length !== nextValues.length) return false;

        if (!prevValues.every(value => nextValues.includes(value))) return false;
    }

    return true;
};

class FilterAction {
    filterKey: string;
    searchParams: URLSearchParams;
    setSearchParams: (searchParams: URLSearchParams) => void;

    constructor(
        filterKey: FilterKeys,
        searchParams: URLSearchParams,
        setSearchParams: (searchParams: URLSearchParams) => void
    ) {
        this.filterKey = filterKey;
        this.searchParams = searchParams;
        this.setSearchParams = setSearchParams;
    }

    addItem(value: string) {
        const values = this.searchParams.getAll(this.filterKey);
        if (values.includes(value)) return;

        this.searchParams.append(this.filterKey, value);
        this.setSearchParams(this.searchParams);
    }

    removeItem(value: string) {
        let filterEntries = Array.from(this.searchParams.entries());
        filterEntries = filterEntries.filter(f => !(f[0] === this.filterKey && f[1] === value));
        this.setSearchParams(new URLSearchParams(filterEntries));
    }

}

export const useQueryFilter = (pages: string[]) => {

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