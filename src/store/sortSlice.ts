import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortState = {
    sortTypes: ['popularity', 'price', 'alphabetically'];
    activeSort: number;
};

const initialState: SortState = {
    sortTypes: ['popularity', 'price', 'alphabetically'],
    activeSort: 0,
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        changeActiveSort(state, action: PayloadAction<number>) {
            state.activeSort = action.payload;
        },
    },
});

export const { changeActiveSort } = sortSlice.actions;

export default sortSlice.reducer;
