import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useQueryCache} from "./useQueryCache.consumer";

export const useUpdateQueryCache = () => {

    const location = useLocation();
    const {updateQueryCache} = useQueryCache();

    useEffect(() => () => updateQueryCache(location.pathname, location.search), []);

};