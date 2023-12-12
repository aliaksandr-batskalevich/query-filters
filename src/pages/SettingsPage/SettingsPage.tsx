import React from 'react';
import s from './SettingsPage.module.scss';
import {useUpdateQueryCache} from "../../queryFilters/useUpdateQueryCache";

export const SettingsPage = () => {

    useUpdateQueryCache();

    return (
        <div className={s.settingsWrapper}>
            SETTINGS
        </div>
    );
};