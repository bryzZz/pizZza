import React from "react";
import { Categories, Header, Sort, Pizzas } from "./components";
import "./scss/app.scss";

export const App: React.FC = () => {
    return (
        <div className='App'>
            <div className='wrapper'>
                <Header />
                <div className='content'>
                    <div className='container'>
                        <div className='content__top'>
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className='content__title'>All pizzas</h2>
                        <Pizzas />
                    </div>
                </div>
            </div>
        </div>
    );
};
