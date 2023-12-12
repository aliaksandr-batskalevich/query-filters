import {useContext} from "react";
import {QueryFilterContext} from "./queryFilterContext";
import {IFilterContext} from "./models/IFilterContext";

// CONTEXT CONSUMER
export const useQueryFilter = () => useContext(QueryFilterContext) as IFilterContext;