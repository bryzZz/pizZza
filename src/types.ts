export type SelectOption = {
    value: string;
    label: string;
};

export type PizzaData = {
    id: number;
    name: string;
    img: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};
