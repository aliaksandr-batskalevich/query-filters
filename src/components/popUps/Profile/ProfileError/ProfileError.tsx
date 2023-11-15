import React from 'react';
import profileStyle from '../Profile.module.scss';
import s from './ProfileError.module.scss';

interface ProfileErrorProps {
    error: string
}

export const ProfileError: React.FC<ProfileErrorProps> = ({error}) => {
    return (
        <div className={profileStyle.profileWrapper}>
            <p className={s.error}>{error}</p>
        </div>
    );
};