import {useSearchParams} from "react-router-dom";
import {useCallback} from "react";
import {PopUpKeys, PopUpType} from "../../models/queryKeys/PopUp";

export const usePopUp = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const openPopUp = useCallback((popUpType: PopUpType, popUpPayload?: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(PopUpKeys.POP_UP, popUpType);
        popUpPayload && searchParams.set(PopUpKeys.PAYLOAD, popUpPayload);
        setSearchParams(searchParams);
    }, []);

    const closePopUp = useCallback(() => {
        const searchParams = new URLSearchParams(window.location.search);

        const queryKeys = Object.values(PopUpKeys);

        queryKeys.forEach((key) => {
            searchParams.delete(key);
        });

        setSearchParams(searchParams);
    }, []);


    return {searchParams, openPopUp, closePopUp};
};