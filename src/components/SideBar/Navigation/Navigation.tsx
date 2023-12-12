import React from 'react';
import s from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';
import usersLogo from '../../../assets/images/logo-users.png';
import settingsLogo from '../../../assets/images/logo-settings.png';
import {useQueryCache} from "../../../queryFilters/useQueryCache.consumer";

export const Navigation = () => {

    const {applyQueryCache} = useQueryCache();

    return (
        <nav className={s.navigationWrapper}>
            <NavLink to={applyQueryCache('/users')}>
                <img className={s.logo} src={usersLogo} alt="usersLogo"/>
            </NavLink>
            <NavLink to={applyQueryCache('/settings')}>
                <img className={s.logo} src={settingsLogo} alt="settingsLogo"/>
            </NavLink>
        </nav>
    );
};