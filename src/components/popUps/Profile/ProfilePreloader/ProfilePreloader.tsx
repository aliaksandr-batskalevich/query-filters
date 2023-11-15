import React from "react";
import profileStyle from '../Profile.module.scss';
import s from "./ProfilePreloader.module.scss";
import {Preloader} from "../../../commons/Preloader/Preloader";


export const ProfilePreloader = () => {
    return (
        <div className={profileStyle.profileWrapper}>
            <Preloader className={s.preloader}/>
        </div>
    );
};