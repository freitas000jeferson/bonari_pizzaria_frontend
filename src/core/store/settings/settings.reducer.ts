import { IActionStore } from '@/core/common/interfaces/action-store';
import {
  initialState,
  ISettingsStore,
} from '@/core/common/interfaces/i-settings-store';
import { ReducerMapper } from '@/core/common/interfaces/reducer-mapper';
import { ADD_COUNTER, SUB_COUNTER } from '@/core/common/types/type-actions';

import { addCounter, subCounter } from './settings.selector';
const reducerMapper: ReducerMapper<ISettingsStore> = {
  [ADD_COUNTER]: addCounter,
  [SUB_COUNTER]: subCounter,
};
async function SettingsReducer(
  state: ISettingsStore = initialState,
  action: IActionStore
) {
  if (reducerMapper[action.type]) {
    return await reducerMapper[action.type]!(state, action);
  }
  return state;
}
export default SettingsReducer;
