import {FilterKeys} from "./FilterKeys";

export type FilterPartValueType =
    string
    | string[]
    | number
    | number[]
    | boolean;

export type FilterPart = Record<FilterKeys, FilterPartValueType>;

export type FilterState = Record<string, FilterPart>;