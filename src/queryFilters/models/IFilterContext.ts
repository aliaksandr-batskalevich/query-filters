import {FilterState} from "../../models/FilterState";
import {FilterKeys} from "./FilterKeys";
import {FilterAction} from "./FilterAction";


export interface IFilterContext {
    filterEntries: string[][];
    filterState: FilterState | undefined;
    filterActions: Record<FilterKeys, FilterAction>;
    clearFilter: () => void;
}