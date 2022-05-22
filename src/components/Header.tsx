import React from "react";
import logo from "../assets/img/pizza-logo.svg";
import { Button } from "./Button";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <img width='38' src={logo} alt='Pizza logo' />
                    <div>
                        <h1>PizZza</h1>
                        <p>The most delicious pizza in the universe</p>
                    </div>
                </div>
                <div className='header__cart'>
                    <Button variant='cart' price={520} goodsNumber={3} />
                </div>
            </div>
        </header>
    );
};
