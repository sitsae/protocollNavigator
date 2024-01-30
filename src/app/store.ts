import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../modules/filters/filtersSlice";
import protocolReducer from "../modules/protocols/protocolSlice";
export default configureStore({
  reducer: {
    filters: filtersReducer,
    protocols: protocolReducer,
  },
});
