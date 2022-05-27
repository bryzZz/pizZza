export type SelectOption = {
    value: string;
    label: string;
};

export type PizzaData = {
    id: number;
    name: string;
    img: string;
    price: {
        min: number;
        medium: number;
        big: number;
    };
};
