import React, {ReactNode} from 'react';
import {PopUpKeys, PopUpType} from "../../models/queryKeys/PopUp";
import {WithPopUp} from "../../utils/hocs/WithPopUp/WithPopUp";
import {Profile} from "../popUps/Profile/Profile";
import {usePopUp} from "../../utils/hooks/usePopUp";

export const PopUp = () => {
    let PopUpComponent: ReactNode | null = null;

    const {searchParams, closePopUp} = usePopUp();

    const popUp = searchParams.get(PopUpKeys.POP_UP);
    if (!popUp) return null;

    switch (popUp) {
        case PopUpType.PROFILE: {
            const userId = searchParams.get(PopUpKeys.PAYLOAD);
            if (!userId) break;

            PopUpComponent = <Profile userId={+userId}/>;
            break;
        }
    }

    return PopUpComponent
        && <WithPopUp close={closePopUp}>{PopUpComponent}</WithPopUp>;
};
