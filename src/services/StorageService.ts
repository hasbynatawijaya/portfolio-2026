import type { ServiceInterface } from '@/types/global';

export class StorageService implements ServiceInterface {
  private prefix: string;
  private available: boolean;

  constructor(prefix = 'hasby_portfolio_') {
    this.prefix = prefix;
    this.available = this.checkAvailability();
  }

  private checkAvailability(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  set<T>(key: string, value: T): boolean {
    if (!this.available) return false;

    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(this.getKey(key), serialized);
      return true;
    } catch {
      return false;
    }
  }

  get<T>(key: string, defaultValue?: T): T | null {
    if (!this.available) return defaultValue ?? null;

    try {
      const item = localStorage.getItem(this.getKey(key));

      if (item === null) {
        return defaultValue ?? null;
      }

      return JSON.parse(item) as T;
    } catch {
      return defaultValue ?? null;
    }
  }

  remove(key: string): boolean {
    if (!this.available) return false;

    try {
      localStorage.removeItem(this.getKey(key));
      return true;
    } catch {
      return false;
    }
  }

  has(key: string): boolean {
    if (!this.available) return false;
    return localStorage.getItem(this.getKey(key)) !== null;
  }

  clear(): boolean {
    if (!this.available) return false;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch {
      return false;
    }
  }

  keys(): string[] {
    if (!this.available) return [];

    return Object.keys(localStorage)
      .filter((key) => key.startsWith(this.prefix))
      .map((key) => key.replace(this.prefix, ''));
  }

  init(): void {}
}

export const storage = new StorageService();
