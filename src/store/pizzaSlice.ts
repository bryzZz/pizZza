import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaData } from "../types";

type PizzasState = {
    list: PizzaData[];
    loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: PizzasState = {
    list: [],
    loading: "idle",
};

export const fetchPizzas = createAsyncThunk<PizzaData[]>(
    "pizzas/fetchPizzas",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:5000/pizzas");

            if (!res.ok) {
                throw new Error("Server error");
            }

            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const pizzaSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.list = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.loading = "failed";
            });
    },
});

// export const { addTodo, toggleComplete, removeTodo } = pizzaSlice.actions;

export default pizzaSlice.reducer;
