export const createQueryCache = (
    searchParamsCache: Record<string, string>,
    page: string,
    searchParams: string
): Record<string, string> => {
    searchParamsCache[page] = searchParams;
    return searchParamsCache;
};