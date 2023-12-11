import React, {ReactNode} from "react";
import {QueryFilterContext, useFilterValueContext} from "./queryFilterContext";


interface IFilterProvider {
    children: ReactNode;
}

export const FilterProvider = ({children}: IFilterProvider) => {

    const contextValue = useFilterValueContext(['/users']);

    return (
        <QueryFilterContext.Provider value={contextValue}>
            {children}
        </QueryFilterContext.Provider>
    );
};
