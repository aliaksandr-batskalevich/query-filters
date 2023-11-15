import React from 'react';
import s from './FilterElement.module.scss';

interface FilterElementProps {
    filterKey: string;
    value: string;
    removeFilter: (title: string, value: string) => void
}

export const FilterElement: React.FC<FilterElementProps> = ({filterKey, value, removeFilter}) => {

    const removeFilterHandler = () => {
        removeFilter(filterKey, value);
    };

    return (
        <div className={s.filterElementWrapper}>
            <span>{value}</span>
            <button className={s.closeButton} onClick={removeFilterHandler}/>
        </div>
    );
};