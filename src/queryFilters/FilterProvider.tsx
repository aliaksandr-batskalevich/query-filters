import React, {ReactNode} from "react";
import {QueryFilterContext, useFilterValueContext} from "./queryFilterContext";
import {QueryCacheContext, useQueryCacheContext} from "./queryCacheContext";


interface IFilterProvider {
    children: ReactNode;
}

export const FilterProvider = ({children}: IFilterProvider) => {

    const queryContextValue = useFilterValueContext(['/users']);
    const queryCacheContextValue = useQueryCacheContext();

    return (
        <QueryFilterContext.Provider value={queryContextValue}>
            <QueryCacheContext.Provider value={queryCacheContextValue}>
                {children}
            </QueryCacheContext.Provider>
        </QueryFilterContext.Provider>
    );
};
