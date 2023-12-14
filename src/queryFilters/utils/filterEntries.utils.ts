import {filterKeys} from "../models/FilterKeys";
import {FilterEntriesState} from "../models/FilterEntriesState";


const createFilterEntries = (searchParams: URLSearchParams): string[][] =>
    Array.from(searchParams.entries())
        .filter(f => (filterKeys as string[]).includes(f[0]));

export const createFilterEntriesState = (pathname: string, searchParams: URLSearchParams): FilterEntriesState => ({[pathname]: createFilterEntries(searchParams)});

export const updateFilterEntriesState = (pathname: string, filterEntriesState: FilterEntriesState, searchParams: URLSearchParams): FilterEntriesState =>
    ({...filterEntriesState, [pathname]: createFilterEntries(searchParams)});