export interface ISettingsStore {
  count: number;
  name: string;
}
export const initialState: ISettingsStore = {
  count: 0,
  name: '',
};
