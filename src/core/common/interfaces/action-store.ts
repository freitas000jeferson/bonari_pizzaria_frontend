export interface IActionStore {
  type: string;
  payload: any;
}
export interface IActionStoreAdapter<T> extends IActionStore {
  payload: T;
}
