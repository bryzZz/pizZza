import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import pizzaReducer from './pizzaSlice';
import pizzaTypesReducer from './pizzaTypesSlice';
import sortReducer from './sortSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
    reducer: {
        pizzas: pizzaReducer,
        sort: sortReducer,
        categories: categoriesReducer,
        pizzaTypes: pizzaTypesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
