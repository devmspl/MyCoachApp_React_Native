import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  selectedCategory: string | null;
  selectedPeriod: string;
  startDate: string;
  endDate: string;
};

const initialState: FilterState = {
  selectedCategory: null,
  selectedPeriod: 'This week',
  startDate: '',
  endDate: '',
};

const homeFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<FilterState>>) {
      return { ...state, ...action.payload };
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setFilters, clearFilters } = homeFilterSlice.actions;
export default homeFilterSlice.reducer;