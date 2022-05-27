import React from "react";
import { PizzaData } from "../types";
import { Button } from "./Button";

export const Pizza: React.FC<PizzaData> = ({ name, img, price }) => {
    return (
        <div className='pizza-block'>
            <img className='pizza-block__image' src={img} alt={name} />
            <h4 className='pizza-block__title'>{name}</h4>
            <div className='pizza-block__selector'>
                <ul>
                    <li className='active'>thin</li>
                    <li>traditional</li>
                </ul>
                <ul>
                    <li className='active'>26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
            <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>от {price.min} ₽</div>
                <Button
                    variant='add'
                    count={1}
                    styleVariant='outline'
                    onClick={() => console.log("click")}
                />
            </div>
        </div>
    );
};
