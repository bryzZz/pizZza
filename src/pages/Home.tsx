import React from 'react';
import { Categories, Header, Pizzas, Sort } from '../components';

export const Home: React.FC = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">All pizzas</h2>
                        <Pizzas />
                    </div>
                </div>
            </div>
        </>
    );
};
