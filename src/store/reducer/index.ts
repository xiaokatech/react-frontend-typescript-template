import { combineReducers } from "redux";

import { type ICounterReducerState, counterReducer } from "./CounterReducer";

export interface IReduxRootState {
  counterInfo: ICounterReducerState;
}

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
  });
