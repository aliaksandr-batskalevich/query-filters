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

        switch (filterTypes[this.filterKey]) {
            case FilterKeyTypes.SINGLE_STR:
            case FilterKeyTypes.SINGLE_NUM:
            case FilterKeyTypes.BOOLEAN:
                this.searchParams.delete(this.filterKey);
                this.searchParams.append(this.filterKey, value);
                this.setSearchParams(this.searchParams);
                break;
            case FilterKeyTypes.MULTIPLE_STR:
            case FilterKeyTypes.MULTIPLE_NUM:
                const values = this.searchParams.getAll(this.filterKey);
                if (values.includes(value)) return;
                this.searchParams.append(this.filterKey, value);
                this.setSearchParams(this.searchParams);
                break;
        }

    }

    removeItem(value: string) {
        let filterEntries = Array.from(this.searchParams.entries());
        filterEntries = filterEntries.filter(f => !(f[0] === this.filterKey && f[1] === value));
        this.setSearchParams(new URLSearchParams(filterEntries));
    }

}