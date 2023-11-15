import {FilterKeys} from "./queryKeys/FilterKeys";

export interface IFilterSelector {
    title: string;
    filterKey: FilterKeys;
    values: string[];
}