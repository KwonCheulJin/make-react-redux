import { INCREASE, DECREASE, RESET } from './action-type.js';
import { actionCreater } from './redux.js';

export const increase = actionCreater(INCREASE);
export const decrease = actionCreater(DECREASE);
export const reset = actionCreater(RESET);