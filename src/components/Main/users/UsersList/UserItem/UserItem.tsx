import React from 'react';
import s from './UserItem.module.scss';
import {IUser} from "../../../../../models/IUser";
import defaultAvatar from '../../../../../assets/images/default-avatar.png';

interface UserItemProps {
    user: IUser;
    openProfile: (userId: number) => void;
}

export const UserItem: React.FC<UserItemProps> = ({user, openProfile}) => {

    const {id, username, status, rating} = user;

    const openProfileHandler = () => {
        openProfile(id);
    };

    return (
        <div className={s.userItem} onClick={openProfileHandler}>
            <div className={s.avatarWrapper}>
                <img className={s.avatar} src={defaultAvatar} alt="avatar"/>
            </div>
            <div className={s.descriptionWrapper}>
                <h4>{username}</h4>
                <p><span>rating: </span>{rating}</p>
            </div>
            <div className={s.statusWrapper}>
                {status}
            </div>
        </div>
    );
};