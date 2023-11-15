import React, {useEffect} from 'react';
import s from './Profile.module.scss';
import defaultAvatar from '../../../assets/images/default-avatar.png';
import {useSelector} from "react-redux";
import {getIsProfileFetching, getProfile, getProfileError} from "../../../store/selectors/profile.selector";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {fetchProfile} from "../../../store/asyncActions/profile.action";
import {ProfilePreloader} from "./ProfilePreloader/ProfilePreloader";
import {ProfileError} from "./ProfileError/ProfileError";
import {ProfileStatistics} from "./ProfileStatistics/ProfileStatistics";

interface ProfileProps {
    userId: number;
}

export const Profile: React.FC<ProfileProps> = ({userId}) => {

    const dispatch = useAppDispatch();
    const profile = useSelector(getProfile);
    const isProfileFetching = useSelector(getIsProfileFetching);
    const profileError = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfile(String(userId)));
    }, [userId]);

    if (profileError) return <ProfileError error={profileError}/>;
    if (!profile || isProfileFetching) return <ProfilePreloader/>;

    const {id, username, status, rating, isFollowed, isActivated, subscribersCount, ...statistics} = profile;

    return (
        <div className={s.profileWrapper}>
            <div className={s.mainInfo}>
                <div className={s.logoWrapper}>
                    <img src={defaultAvatar} alt="avatar"/>
                </div>
                <div className={s.descriptionWrapper}>
                    <div className={s.status}>{status}</div>
                    <h2 className={s.userName}>{username}</h2>
                    <p><span>rating: </span>{rating}</p>
                    <p><span>subscribersCount: </span>{subscribersCount}</p>
                </div>
            </div>
            <ProfileStatistics {...statistics}/>
        </div>
    );
};








