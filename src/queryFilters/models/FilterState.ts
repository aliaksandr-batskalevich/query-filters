import {FilterKeys} from "./FilterKeys";

export type FilterPart = Record<FilterKeys, string[]>;

export type FilterState = Record<string, FilterPart>;