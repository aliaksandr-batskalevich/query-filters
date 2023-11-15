import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import s from './Preloader.module.scss';
import preloader from '../../../assets/images/spinnerPreloader.gif';

type DefaultDivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Preloader: React.FC<DefaultDivPropsType> = (props) => {

    return (
        <div {...props}>
            <img className={s.img} src={preloader} alt="preloader"/>
        </div>
    );
};