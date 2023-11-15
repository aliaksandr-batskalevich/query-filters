import {IUser} from "../../../../models/IUser";
import React from "react";
import s from "./ProfileStatistics.module.scss";

type StatisticsProps = Pick<IUser, 'gamesJuniorCount'
    | 'gamesJuniorWinsCount'
    | 'gamesMiddleCount'
    | 'gamesMiddleWinsCount'
    | 'gamesSeniorCount'
    | 'gamesSeniorWinsCount'
    | 'sparringCount'
    | 'sparringWinsCount'>;

export const ProfileStatistics: React.FC<StatisticsProps> = (props) => {

    const {
        gamesJuniorCount,
        gamesJuniorWinsCount,
        gamesMiddleCount,
        gamesMiddleWinsCount,
        gamesSeniorCount,
        gamesSeniorWinsCount,
        sparringCount,
        sparringWinsCount
    } = props;

    return (
        <div className={s.statisticsWrapper}>
            <h3>Statistics</h3>
            <div className={s.statisticsElementsWrapper}>
                <p><span>gamesJuniorCount/gamesJuniorWinsCount: </span>{gamesJuniorCount}/{gamesJuniorWinsCount}</p>
                <p><span>gamesMiddleCount/gamesMiddleWinsCount: </span>{gamesMiddleCount}/{gamesMiddleWinsCount}</p>
                <p><span>gamesSeniorCount/gamesSeniorWinsCount: </span>{gamesSeniorCount}/{gamesSeniorWinsCount}</p>
                <p><span>sparringCount/sparringWinsCount: </span>{sparringCount}/{sparringWinsCount}</p>
            </div>
        </div>
    );
};