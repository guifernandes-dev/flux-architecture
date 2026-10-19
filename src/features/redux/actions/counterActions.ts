import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementValue = createAction<number>("counter/incrementValue");
export const decrementValue = createAction<number>("counter/decrementValue");
