import React, {useCallback, useEffect} from 'react';
import s from './UsersPage.module.scss';
import {FilterMonitor} from "../../components/commons/FilterMonitor/FilterMonitor";
import {UsersList} from "../../components/Main/users/UsersList/UsersList";
import {PopUpType} from "../../models/queryKeys/PopUp";
import {usePopUp} from "../../utils/hooks/usePopUp";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {fetchUsers} from "../../store/asyncActions/users.action";
import {useQueryFilter} from "../../queryFilters/useQueryFilter.consumer";
import {useUpdateQueryCache} from "../../queryFilters/useUpdateQueryCache";

export const UsersPage = () => {

    console.log('USERS');

    const dispatch = useAppDispatch();
    const {openPopUp} = usePopUp();

    const {filterState} = useQueryFilter();
    useUpdateQueryCache();

    useEffect(() => {
        dispatch(fetchUsers(filterState));
        console.log('FETCH!')
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