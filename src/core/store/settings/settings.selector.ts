import { IActionStoreAdapter } from '@/core/common/interfaces/action-store';
import { ISettingsStore } from '@/core/common/interfaces/i-settings-store';

export const addCounter = (
  state: ISettingsStore,
  action: IActionStoreAdapter<number>
) => {
  state.count += action.payload;
  return state;
};

export const subCounter = (
  state: ISettingsStore,
  action: IActionStoreAdapter<number>
) => {
  state.count -= action.payload;
  return state;
};
