import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type Sort = "popularity" | "price" | "alphabetically";

type SortState = {
    sortTypes: ["popularity", "price", "alphabetically"];
    activeSort: number;
    categoryTypes: string[];
    activeCategory: number;
    loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: SortState = {
    sortTypes: ["popularity", "price", "alphabetically"],
    activeSort: 0,
    activeCategory: 0,
    categoryTypes: [],
    loading: "idle",
};

export const fetchCategories = createAsyncThunk<string[]>(
    "sort/fetchCategories",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:5000/categories");

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

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        changeActiveSort(state, action: PayloadAction<number>) {
            state.activeSort = action.payload;
        },
        changeActiveCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.categoryTypes = action.payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.loading = "failed";
            });
    },
});

export const { changeActiveSort, changeActiveCategory } = sortSlice.actions;

export default sortSlice.reducer;
