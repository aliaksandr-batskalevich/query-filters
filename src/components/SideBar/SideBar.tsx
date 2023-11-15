import React from 'react';
import s from './SideBar.module.scss';
import {Navigation} from "./Navigation/Navigation";
import {FilterBar} from "./FilterBar/FilterBar";
import {useLocation} from "react-router-dom";

export const SideBar = () => {

    const location = useLocation();

    return (
        <div className={s.SideBarWrapper}>
            <Navigation/>
            {location.pathname.indexOf('/users') > -1 && <FilterBar/>}
        </div>
    );
};