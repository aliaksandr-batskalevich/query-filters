import {filterKeys, FilterKeys, FilterKeyTypes, filterTypes} from "../models/FilterKeys";
import {FilterPart, FilterPartValueType, FilterState} from "../models/FilterState";


export const createFilterPart = (searchParams: URLSearchParams): FilterPart => {
    const initialFilterPart = {} as FilterPart;

    filterKeys.forEach(fk => {
        let filterValue: FilterPartValueType | null = null;

        switch (filterTypes[fk]) {
            case FilterKeyTypes.SINGLE_STR:
                filterValue = searchParams.get(fk);
                break;
            case FilterKeyTypes.MULTIPLE_STR:
                filterValue = searchParams.getAll(fk);
                break;
            case FilterKeyTypes.SINGLE_NUM: {
                const tempValue = searchParams.get(fk);
                if (tempValue && Number.isFinite(+tempValue)) {
                    filterValue = +tempValue;
                }
                break;
            }
            case FilterKeyTypes.MULTIPLE_NUM: {
                const tempValue = searchParams.getAll(fk);
                filterValue = tempValue?.reduce(
                    (acc, fv) =>
                        Number.isFinite(+fv)
                            ? [...acc, +fv]
                            : acc,
                    [] as number[]
                );
                break;
            }
            case FilterKeyTypes.BOOLEAN: {
                const tempValue = searchParams.get(fk);

                switch (tempValue) {
                    case 'true':
                        filterValue = true;
                        break;
                    case 'false':
                        filterValue = false;
                        break;
                }
                break;
            }
        }

        if (
            filterValue === null
            || (Array.isArray(filterValue) && !filterValue.length)
        ) return;

        initialFilterPart[fk] = filterValue;
    });

    return initialFilterPart;
};

export const createFilterState = (pathname: string, searchParams: URLSearchParams): FilterState =>
    ({[pathname]: createFilterPart(searchParams)} as FilterState);

export const compareFilterPart = (prevFilterPart: FilterPart, nextFilterPart: FilterPart): boolean => {

    const prevFilterKeys = Object.keys(prevFilterPart) as FilterKeys[];
    const nextFilterKeys = Object.keys(nextFilterPart) as FilterKeys[];
    if (prevFilterKeys.length !== nextFilterKeys.length) return false;

    for (let key of prevFilterKeys) {

        if (!nextFilterKeys.includes(key)) return false;

        const prevValues = prevFilterPart[key];
        const nextValues = nextFilterPart[key];

        switch (filterTypes[key]) {
            case FilterKeyTypes.BOOLEAN:
            case FilterKeyTypes.SINGLE_STR:
            case FilterKeyTypes.SINGLE_NUM:
                if (prevValues !== nextValues) return false;
                break;
            case FilterKeyTypes.MULTIPLE_STR:
            case FilterKeyTypes.MULTIPLE_NUM:
                if (JSON.stringify(prevValues) !== JSON.stringify(nextValues)) return false;
                break;
        }
    }

    return true;
};

export const updateFilterState = (pathname: string, filterState: FilterState, nextFilterPart: FilterPart): FilterState => ({
    ...filterState,
    [pathname]: nextFilterPart
});