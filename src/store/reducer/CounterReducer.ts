import { COUNT_DECREMENT, COUNT_INCREMENT } from "../actions/counterAction";
import { type IAction } from "../store";

const initialState = { counter: 0 };

export interface ICounterReducerState {
  counter: number;
}

export const counterReducer = (
  state: ICounterReducerState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNT_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
