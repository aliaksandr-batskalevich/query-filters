import React, {ReactNode} from "react";
import {QueryFilterContext, useFilterValueContext} from "./queryFilterContext";


interface IFilterProvider {
    children: ReactNode;
}

export const FilterProvider = ({children}: IFilterProvider) => {

    const queryContextValue = useFilterValueContext();

    return (
        <QueryFilterContext.Provider value={queryContextValue}>
            {children}
        </QueryFilterContext.Provider>
    );
};
