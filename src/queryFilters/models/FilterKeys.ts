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
    FAKE = 'fake',
}

export const filterTypes = {
    [FilterKeys.CATEGORY]: FilterKeyTypes.MULTIPLE_STR,
    [FilterKeys.LIST]: FilterKeyTypes.SINGLE_STR,
    [FilterKeys.TAG]: FilterKeyTypes.MULTIPLE_STR,
    [FilterKeys.NAME]: FilterKeyTypes.MULTIPLE_STR,
    [FilterKeys.FAKE]: FilterKeyTypes.SINGLE_STR,
} as Record<FilterKeys, FilterKeyTypes>;


export const filterKeys = Object.values(FilterKeys) as FilterKeys[];