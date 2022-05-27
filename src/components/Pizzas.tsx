import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchPizzas } from "../store/pizzaSlice";
import { Pizza } from "./Pizza";

interface PizzasProps {}

export const Pizzas: React.FC<PizzasProps> = (props) => {
    const { list, loading } = useAppSelector((state) => state.pizzas);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    if (loading === "pending") {
        return <p>"Loading..."</p>;
    }

    return (
        <div className='content__items'>
            {list && list.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
        </div>
    );
};
