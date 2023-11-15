import React from 'react';
import s from './UsersList.module.scss';
import {UserItem} from "./UserItem/UserItem";
import {useSelector} from "react-redux";
import {getIsUsersFetching, getUsers} from "../../../../store/selectors/users.selector";
import {Preloader} from "../../../commons/Preloader/Preloader";

interface UsersListProps {
    openProfile: (userId: number) => void;
}

export const UsersList = React.memo(({openProfile}: UsersListProps) => {

    // console.log('users rendered!');

    const users = useSelector(getUsers);
    const isUsersFetching = useSelector(getIsUsersFetching);

    const usersToRender = users.map(user => <UserItem
        key={user.id}
        user={user}
        openProfile={openProfile}
    />);

    return (
        <div className={s.usersListWrapper}>
            {isUsersFetching && <Preloader className={s.preloader}/>}
            {usersToRender}
        </div>
    );
});