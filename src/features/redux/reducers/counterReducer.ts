import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, incrementValue, decrementValue } from "../actions/counterActions";

const initialState = 0;

export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increment, state => state + 1)
    .addCase(decrement, state => state - 1)
    .addCase(incrementValue, (state, action) => state + action.payload)
    .addCase(decrementValue, (state, action) => state - action.payload);
});
