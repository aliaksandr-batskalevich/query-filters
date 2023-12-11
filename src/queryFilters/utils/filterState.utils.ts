import {FilterKeys} from "../models/FilterKeys";
import {FilterState} from "../../models/FilterState";


export const createFilterState = (filterKeys: FilterKeys[], searchParams: URLSearchParams): FilterState => {
    const initialFilterState = {} as FilterState;
    filterKeys.forEach(fk => {
        const filterValue = searchParams.getAll(fk);
        if (!filterValue.length) return;

        initialFilterState[fk] = filterValue;
    });

    return initialFilterState;
};

export const compareFilterState = (prevFilterState: FilterState, nextFilterState: FilterState): boolean => {
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