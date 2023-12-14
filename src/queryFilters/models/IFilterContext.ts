import {FilterPart} from "./FilterState";
import {FilterKeys} from "./FilterKeys";
import {FilterAction} from "./FilterAction";


export interface IFilterContext {
    filterPart: FilterPart;
    filterEntries: string[][];
    filterActions: Record<FilterKeys, FilterAction>;
    clearFilter: () => void;
    addQueryToPath: (path: string) => string;
}