import {FilterKeys, FilterKeyTypes, filterTypes} from "./FilterKeys";

export class FilterAction {
    filterKey: FilterKeys;
    searchParams: URLSearchParams;
    setSearchParams: (searchParams: URLSearchParams) => void;

    constructor(
        filterKey: FilterKeys,
        searchParams: URLSearchParams,
        setSearchParams: (searchParams: URLSearchParams) => void
    ) {
        this.filterKey = filterKey;
        this.searchParams = searchParams;
        this.setSearchParams = setSearchParams;
    }

    addItem(value: string) {

        if (
            filterTypes[this.filterKey] === FilterKeyTypes.SINGLE_STR
            || filterTypes[this.filterKey] === FilterKeyTypes.SINGLE_NUM
            || filterTypes[this.filterKey] === FilterKeyTypes.BOOLEAN
        ) {
            this.searchParams.delete(this.filterKey);
            this.searchParams.append(this.filterKey, value);
            this.setSearchParams(this.searchParams);
        }

        if (
            filterTypes[this.filterKey] === FilterKeyTypes.MULTIPLE_STR
            || filterTypes[this.filterKey] === FilterKeyTypes.MULTIPLE_NUM
        ) {
            const values = this.searchParams.getAll(this.filterKey);
            if (values.includes(value)) return;

            this.searchParams.append(this.filterKey, value);
            this.setSearchParams(this.searchParams);
        }

    }

    removeItem(value: string) {
        let filterEntries = Array.from(this.searchParams.entries());
        filterEntries = filterEntries.filter(f => !(f[0] === this.filterKey && f[1] === value));
        this.setSearchParams(new URLSearchParams(filterEntries));
    }

}