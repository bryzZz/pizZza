import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchPizzas } from '../store/pizzaSlice';
import { fetchPizzaTypes } from '../store/pizzaTypesSlice';
import { PizzaData } from '../types';
import { Pizza } from './Pizza';

interface PizzasProps {}

export const Pizzas: React.FC<PizzasProps> = () => {
    const { list, loading } = useAppSelector((state) => state.pizzas);
    const { activeCategory } = useAppSelector((state) => state.categories);
    const { pizzaTypes, loading: pizzaTypesLoading } = useAppSelector(
        (state) => state.pizzaTypes
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPizzaTypes());
        dispatch(fetchPizzas());
    }, []);

    const filterPizzas = (pizzas: PizzaData[], category: number) => {
        if (category === 0) {
            return pizzas;
        }
        return pizzas.filter((pizza) => pizza.category === category);
    };

    if (loading === 'pending' && pizzaTypesLoading === 'pending') {
        return <p>"Loading..."</p>;
    }

    return (
        <div className="content__items">
            {list &&
                filterPizzas(list, activeCategory).map((pizza) => (
                    <Pizza
                        key={pizza.id}
                        {...pizza}
                        typesAnnotations={pizzaTypes}
                    />
                ))}
        </div>
    );
};
