import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../counter.action";


export const inistialState = 0;

export const counterReducer = createReducer(
  inistialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => inistialState)
);
