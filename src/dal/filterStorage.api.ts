import {SessionStorageKeys} from "../models/SessionStorageKeys";
import {filterKeys, FilterKeys} from "../models/queryKeys/FilterKeys";

class FilterStorageApi {

    _filterKeys: FilterKeys[];

    constructor(filterKeys: FilterKeys[]) {
        this._filterKeys = filterKeys;

        const filterString = this._createFilterString(window.location.search);
        sessionStorage.setItem(SessionStorageKeys.FILTER_STATE, filterString);
    }

    _createFilterString(searchStr: string) {
        return searchStr
            .replace('?', '')
            .split('&')
            .filter(f => this._filterKeys.some(fk => !f.indexOf(fk)))
            .join('&');
    }

    getFilterString() {
        return sessionStorage.getItem(SessionStorageKeys.FILTER_STATE);
    }

    setFilterState(searchString: string) {
        const filterString = this._createFilterString(searchString);
        sessionStorage.setItem(SessionStorageKeys.FILTER_STATE, filterString);
    }
}

export const filterStateApi = new FilterStorageApi(filterKeys);