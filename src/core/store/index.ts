import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SettingsReducer from './settings/settings.reducer';

const rootReducer = combineReducers({
  settingsStore: SettingsReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persisetdStore = persistStore(store);
