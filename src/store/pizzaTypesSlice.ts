import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type PizzaTypesState = {
    pizzaTypes: string[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: PizzaTypesState = {
    pizzaTypes: [],
    loading: 'idle',
};

export const fetchPizzaTypes = createAsyncThunk<string[]>(
    'pizzaTypes/fetchPizzaTypes',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:5000/types');

            if (!res.ok) {
                throw new Error('Server error');
            }

            const data = await res.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzaTypes.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPizzaTypes.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.pizzaTypes = action.payload;
            })
            .addCase(fetchPizzaTypes.rejected, (state) => {
                state.loading = 'failed';
            });
    },
});

export default sortSlice.reducer;
