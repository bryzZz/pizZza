import React, { useState } from 'react';
import { PizzaData } from '../types';
import { Button } from './Button';

interface PizzaProps extends PizzaData {
    typesAnnotations: string[];
}

export const Pizza: React.FC<PizzaProps> = ({
    name,
    img,
    price,
    types,
    typesAnnotations,
    sizes,
}) => {
    const [activeType, setActiveType] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={img} alt={name} />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, index) => (
                        <li
                            key={index}
                            className={index === activeType ? 'active' : ''}
                            onClick={() => setActiveType(index)}
                        >
                            {typesAnnotations[type]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            className={index === activeSize ? 'active' : ''}
                            onClick={() => setActiveSize(index)}
                        >
                            {size} cm.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button
                    variant="add"
                    count={1}
                    styleVariant="outline"
                    onClick={() => console.log('click')}
                />
            </div>
        </div>
    );
};
