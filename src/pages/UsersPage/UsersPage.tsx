import React, {useCallback, useEffect} from 'react';
import s from './UsersPage.module.scss';
import {useQueryFilter} from "../../utils/hooks/useQueryFilter";
import {FilterMonitor} from "../../components/commons/FilterMonitor/FilterMonitor";
import {UsersList} from "../../components/Main/users/UsersList/UsersList";
import {PopUpType} from "../../models/queryKeys/PopUp";
import {usePopUp} from "../../utils/hooks/usePopUp";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {fetchUsers} from "../../store/asyncActions/users.action";

export const UsersPage = () => {

    // console.log('render');

    const dispatch = useAppDispatch();
    const {filterState} = useQueryFilter(['/users']);
    const {openPopUp} = usePopUp();

    useEffect(() => {
        filterState && dispatch(fetchUsers(filterState));
    }, [filterState]);

    const openProfileHandler = useCallback((userId: number) => {
        openPopUp(PopUpType.PROFILE, String(userId));
    }, []);

    return (
        <div className={s.usersPageWrapper}>
            <FilterMonitor pages={['/users']}/>
            <UsersList openProfile={openProfileHandler}/>
        </div>
    );
};