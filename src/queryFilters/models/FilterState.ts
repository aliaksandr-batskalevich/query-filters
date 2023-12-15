import {FilterKeys} from "./FilterKeys";

type FilterPartValueType = string | string[] | number | number[] | boolean;

export type FilterPart = Record<FilterKeys, string[]>;

export type FilterState = Record<string, FilterPart>;