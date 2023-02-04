import { IActionStoreAdapter } from '@/core/common/interfaces/action-store';
import { ADD_COUNTER, SUB_COUNTER } from '@/core/common/types/type-actions';

export function addCounter(value: number): IActionStoreAdapter<number> {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
}

export function subCounter(value: number): IActionStoreAdapter<number> {
  return {
    type: SUB_COUNTER,
    payload: value,
  };
}
