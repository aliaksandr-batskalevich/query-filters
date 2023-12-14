import {FilterKeys} from "./FilterKeys";

export interface IFilterSelector {
    title: string;
    filterKey: FilterKeys;
    values: string[];
}