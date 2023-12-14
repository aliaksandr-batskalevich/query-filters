import React from 'react';
import s from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';
import usersLogo from '../../../assets/images/logo-users.png';
import settingsLogo from '../../../assets/images/logo-settings.png';
import {useQueryFilter} from "../../../queryFilters/useQueryFilter.consumer";

export const Navigation = () => {

    const {addQueryToPath} = useQueryFilter();

    return (
        <nav className={s.navigationWrapper}>
            <NavLink to={addQueryToPath('/users')}>
                <img className={s.logo} src={usersLogo} alt="usersLogo"/>
            </NavLink>
            <NavLink to={addQueryToPath('/settings')}>
                <img className={s.logo} src={settingsLogo} alt="settingsLogo"/>
            </NavLink>
        </nav>
    );
};