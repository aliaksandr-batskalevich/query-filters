export enum FilterKeyTypes {
    SINGLE_STR = "SINGLE_STR",
    MULTIPLE_STR = "MULTIPLE_STR",
    SINGLE_NUM = "SINGLE_NUM",
    MULTIPLE_NUM = "MULTIPLE_NUM",
    BOOLEAN = "BOOLEAN",
}

export enum FilterKeys {
    CATEGORY = 'category',
    LIST = 'list',
    TAG = 'tag',
    NAME = 'name',
    PAGE = 'page',
    STRICT = 'strict',
}

export const filterTypes = {
    [FilterKeys.CATEGORY]: FilterKeyTypes.MULTIPLE_STR,
    [FilterKeys.LIST]: FilterKeyTypes.SINGLE_STR,
    [FilterKeys.TAG]: FilterKeyTypes.MULTIPLE_STR,
    [FilterKeys.NAME]: FilterKeyTypes.SINGLE_STR,
    [FilterKeys.PAGE]: FilterKeyTypes.SINGLE_NUM,
    [FilterKeys.STRICT]: FilterKeyTypes.BOOLEAN,
} as const;


export const filterKeys = Object.values(FilterKeys) as FilterKeys[];