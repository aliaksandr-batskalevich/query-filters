import {useContext} from "react";
import {QueryCacheContext} from "./queryCacheContext";
import {IQueryCacheContext} from "./models/IQueryCacheContext";

// CONTEXT CONSUMER
export const useQueryCache = () => useContext(QueryCacheContext) as IQueryCacheContext;