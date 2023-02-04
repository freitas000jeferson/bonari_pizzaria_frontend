import { LocalStorageAdapter } from './local-storage-adapter';

export const makeLocalStorage = () => new LocalStorageAdapter();
