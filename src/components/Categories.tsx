import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { changeActiveCategory, fetchCategories } from "../store/sortSlice";

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
    const { categoryTypes, activeCategory, loading } = useAppSelector(
        (state) => state.sort
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const handleChangeCategory = (i: number) => {
        dispatch(changeActiveCategory(i));
    };

    if (loading === "pending") {
        return <p>Loading...</p>;
    }

    return (
        <div className='categories'>
            <ul>
                {categoryTypes.map((item, i) => (
                    <li
                        key={i}
                        className={i === activeCategory ? "active" : ""}
                        onClick={() => handleChangeCategory(i)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
