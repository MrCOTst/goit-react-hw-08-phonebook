import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from "./constants";

const filterInitialState = {
  filter: '',
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter, setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
