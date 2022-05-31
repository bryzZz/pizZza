import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import './scss/app.scss';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    );
};
