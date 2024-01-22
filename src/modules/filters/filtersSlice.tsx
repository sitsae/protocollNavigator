import { createSlice } from "@reduxjs/toolkit";
import { Action } from "../../types";

export const filters = ["Abdomen", "TØK", "MS", "Barn", "Nevro"];

const initialState: any[] = [];

const addFilterReducer = (state = initialState, action: Action) => {
  state.push(action.payload);
  return state;
};

const removeFilterReducer = (state = initialState, action: Action) => {
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

const filtersSlice = createSlice(options);
