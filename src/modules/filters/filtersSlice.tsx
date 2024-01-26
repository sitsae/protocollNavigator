import { createSlice, CaseReducer } from "@reduxjs/toolkit";
import { Action } from "../../types";

export const filters = ["Abdomen", "TØK", "MS", "Barn", "Nevro"];

const initialState: any[] = [];

const addFilterReducer: CaseReducer<any[], Action> = (
  state: any[] = initialState,
  action: Action
) => {
  state.push(action.payload);
};

const removeFilterReducer: CaseReducer<any[], Action> = (
  state: any[] = initialState,
  action: Action
) => {
  state = state.filter((filter) => filter !== action.payload);
  return state;
};

const options = {
  name: "filters",
  initialState: initialState,
  reducers: {
    addFilter: addFilterReducer,
    removeFilter: removeFilterReducer,
  },
};
export const selectFilter = (state: any) => state.filters.value;
export const filtersSlice = createSlice(options);
console.log(filtersSlice);

export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
