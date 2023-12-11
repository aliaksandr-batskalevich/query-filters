import {filterKeys} from "../models/FilterKeys";


export const createFilterEntries = (searchParams: URLSearchParams): string[][] =>
    Array.from(searchParams.entries())
        .filter(f => (filterKeys as string[]).includes(f[0]));