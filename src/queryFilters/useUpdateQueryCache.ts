import {useEffect} from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import {useQueryCache} from "./useQueryCache.consumer";

export const useUpdateQueryCache = () => {

    const location = useLocation();
    // const [searchParams] = useSearchParams();
    const {updateQueryCache} = useQueryCache();

    useEffect(() => () => {
        updateQueryCache(location.pathname, location.search)
    }, [location]);

};