import {FilterKeys} from "../queryFilters/models/FilterKeys";

export interface IFilterSelector {
    title: string;
    filterKey: FilterKeys;
    values: string[];
}