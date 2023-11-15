import React from 'react';
import s from './FilterOption.module.scss';

interface FilterOptionProps {
    filterValue: string;
    isActive: boolean
    addFilter: (value: string) => void;
}

export const FilterOption: React.FC<FilterOptionProps> = ({filterValue, isActive, addFilter}) => {

    const addFilterHandler = () => {
        addFilter(filterValue);
    };

    const itemClassName = isActive ? s.filterOption : `${s.filterOption} ${s.availableOption}`;

    return (
        <button
            className={itemClassName}
            onClick={addFilterHandler}
            disabled={isActive}
        >
            {filterValue}
        </button>
    );
};