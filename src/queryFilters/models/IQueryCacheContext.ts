
export interface IQueryCacheContext {
    applyQueryCache: (page: string) => string;
    updateQueryCache: (page: string, query: string) => void;
}