import { fn } from '../types/fn-action-store-type';
import { IActionStore } from './action-store';

export interface ReducerMapper<State> {
  [key: string]: fn<State, IActionStore>;
}
