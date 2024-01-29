import { createSlice, CaseReducer } from "@reduxjs/toolkit";
import { Action, Protocol } from "../../types";

const initialState: Protocol | {} = {};

const setChosenProtocolReducer: CaseReducer<any, Action> = (
  state = initialState,
  action: Action
) => {
  return (state = action.payload);
};

const options = {
  name: "chosenProtocol",
  initialState: initialState,
  reducers: {
    setChosenProtocol: setChosenProtocolReducer,
  },
};

export const protocolSlice = createSlice(options);
console.log(protocolSlice);

export const { setChosenProtocol } = protocolSlice.actions;
export default protocolSlice.reducer;
