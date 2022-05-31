import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type CategoriesState = {
    categoryTypes: string[];
    activeCategory: number;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: CategoriesState = {
    categoryTypes: [],
    activeCategory: 0,
    loading: 'idle',
};

export const fetchCategories = createAsyncThunk<string[]>(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:5000/categories');

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

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeActiveCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.categoryTypes = action.payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.loading = 'failed';
            });
    },
});

export const { changeActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
