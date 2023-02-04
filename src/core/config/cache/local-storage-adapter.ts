export class LocalStorageAdapter {
  set(key: string, value: object): void {
    const a = 'as';
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
      localStorage.setItem(a, a);
    }
  }
  get(key: string): any {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return undefined;
  }
}
