import React from 'react';
import s from './Header.module.scss';

export const Header = () => {

    console.log('HEADER');

    return (
        <div className={s.headerWrapper}>
            <h1>QUERY FILTERS SANDBOX</h1>
        </div>
    );
};