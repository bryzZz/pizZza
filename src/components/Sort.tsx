import React from "react";
import Select, { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../store";
import { changeActiveSort } from "../store/sortSlice";
import { SelectOption } from "../types";
import { capitalize } from "../utils";

interface SortProps {}

export const Sort: React.FC<SortProps> = () => {
    const { sortTypes, activeSort } = useAppSelector((state) => state.sort);
    const dispatch = useAppDispatch();

    const handleChange = (newValue: SingleValue<SelectOption>) => {
        dispatch(changeActiveSort(options.findIndex((v) => v === newValue)));
    };

    const options = sortTypes.map((sortType) => ({
        value: sortType,
        label: capitalize(sortType),
    }));

    return (
        <div className='sort'>
            <div className='sort__label'>
                <b>Sort by:</b>
            </div>
            <Select
                options={options}
                defaultValue={options[activeSort]}
                classNamePrefix='sort__select'
                onChange={handleChange}
            />
        </div>
    );
};
