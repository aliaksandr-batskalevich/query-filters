import {filterKeys, FilterKeys} from "../models/FilterKeys";
import {FilterPart, FilterState} from "../models/FilterState";


export const createFilterPart = (searchParams: URLSearchParams): FilterPart => {
    const initialFilterPart = {} as FilterPart;
    filterKeys.forEach(fk => {
        const filterValue = searchParams.getAll(fk);
        if (!filterValue.length) return;

        initialFilterPart[fk] = filterValue;
    });

    return initialFilterPart;
};

export const createFilterState = (pathname: string, searchParams: URLSearchParams): FilterState =>
({[pathname]: createFilterPart(searchParams)} as FilterState);

export const compareFilterPart = (prevFilterPart: FilterPart, nextFilterPart: FilterPart): boolean => {

    const prevFilterKeys = Object.keys(prevFilterPart) as FilterKeys[];
    const nextFilterKeys = Object.keys(nextFilterPart) as FilterKeys[];
    if (prevFilterKeys.length !== nextFilterKeys.length) return false;

    for (let key of prevFilterKeys) {
        if (!nextFilterKeys.includes(key)) return false;

        const prevValues = prevFilterPart[key];
        const nextValues = nextFilterPart[key];
        if (prevValues.length !== nextValues.length) return false;

        if (!prevValues.every(value => nextValues.includes(value))) return false;
    }

    return true;
};

export const updateFilterState = (pathname: string, filterState: FilterState, nextFilterPart: FilterPart): FilterState => ({...filterState, [pathname]: nextFilterPart});