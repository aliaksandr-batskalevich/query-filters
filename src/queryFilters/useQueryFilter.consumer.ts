
// CONTEXT CONSUMER
import {useContext} from "react";
import {QueryFilterContext} from "./queryFilterContext";
import {IFilterContext} from "./models/IFilterContext";

export const useQueryFilter = () => useContext(QueryFilterContext) as IFilterContext;