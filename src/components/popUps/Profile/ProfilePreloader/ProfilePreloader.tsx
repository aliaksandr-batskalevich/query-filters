import React from "react";
import s from "./ProfilePreloader.module.scss";
import {Preloader} from "../../../commons/Preloader/Preloader";


export const ProfilePreloader = () => {
    return (
        <div className={s.profileWrapper}>
            <Preloader className={s.preloader}/>
        </div>
    );
};