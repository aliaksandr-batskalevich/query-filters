import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {UsersPage} from "../pages/UsersPage/UsersPage";
import {SettingsPage} from "../pages/SettingsPage/SettingsPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/users'/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    );
};