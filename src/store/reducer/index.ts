import { combineReducers } from "redux";

import { type ICounterReducerState, counterReducer } from "./CounterReducer";

export interface IReduxRootState {
  counter: ICounterReducerState;
}

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
  });
