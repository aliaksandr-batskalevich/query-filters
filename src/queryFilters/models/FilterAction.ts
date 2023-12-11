import {FilterKeys} from "./FilterKeys";

export class FilterAction {
    filterKey: string;
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
        const values = this.searchParams.getAll(this.filterKey);
        if (values.includes(value)) return;

        this.searchParams.append(this.filterKey, value);
        this.setSearchParams(this.searchParams);
    }

    removeItem(value: string) {
        let filterEntries = Array.from(this.searchParams.entries());
        filterEntries = filterEntries.filter(f => !(f[0] === this.filterKey && f[1] === value));
        this.setSearchParams(new URLSearchParams(filterEntries));
    }

}