import React from 'react';
import s from './ProfileError.module.scss';

interface ProfileErrorProps {
    error: string
}

export const ProfileError: React.FC<ProfileErrorProps> = ({error}) => {
    return (
        <div className={s.profileWrapper}>
            <p className={s.error}>{error}</p>
        </div>
    );
};