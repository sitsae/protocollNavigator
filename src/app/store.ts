import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../modules/filters/filtersSlice";

export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
});


