import { Category } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StatisticsState {
  currentCategory: Category;
}

const initialState: StatisticsState = {
  currentCategory: 4,
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<Category>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory } = statisticsSlice.actions;

export default statisticsSlice.reducer;
