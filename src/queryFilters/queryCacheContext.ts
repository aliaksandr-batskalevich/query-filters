import React, {useCallback, useState} from "react";
import {IQueryCacheContext} from "./models/IQueryCacheContext";
import {createQueryCache} from "./utils/queryCache";


// CREATE CONTEXT
export const QueryCacheContext = React.createContext<null | IQueryCacheContext>(null);

// CONTEXT VALUE
export const useQueryCacheContext = (): IQueryCacheContext => {

    const [queryCache, setQueryCache] = useState<Record<string, string>>({});

    const applyQueryCache = useCallback(
        (page: string) => queryCache[page]
            ? page + queryCache[page]
            : page,
        [queryCache]);

    const updateQueryCache = useCallback((page: string, query: string) => {
        setQueryCache(queryCache => createQueryCache(queryCache, page, query));
    }, [setQueryCache]);

    return {applyQueryCache, updateQueryCache};
};
