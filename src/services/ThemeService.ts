import type { ServiceInterface, ThemeMode, ThemeConfig } from '@/types/global';
import { storage } from './StorageService';
import { eventBus } from '@/core/EventBus';

export class ThemeService implements ServiceInterface {
  private config: ThemeConfig;
  private mediaQuery: MediaQueryList;
  private readonly STORAGE_KEY = 'theme_config';

  constructor() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.config = this.loadConfig();
  }

  init(): void {
    this.applyTheme();

    this.watchSystemPreference();

    eventBus.emit('theme:change', { mode: this.config.mode });
  }

  private loadConfig(): ThemeConfig {
    const saved = storage.get<ThemeConfig>(this.STORAGE_KEY);

    if (saved) {
      return saved;
    }

    return {
      mode: this.getSystemPreference(),
      systemPreference: true,
    };
  }

  private saveConfig(): void {
    storage.set(this.STORAGE_KEY, this.config);
  }

  private getSystemPreference(): ThemeMode {
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  private watchSystemPreference(): void {
    this.mediaQuery.addEventListener('change', (e) => {
      if (this.config.systemPreference) {
        this.config.mode = e.matches ? 'dark' : 'light';
        this.applyTheme();
        eventBus.emit('theme:change', { mode: this.config.mode });
      }
    });
  }

  private applyTheme(): void {
    const root = document.documentElement;

    if (this.config.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        this.config.mode === 'dark' ? '#000000' : '#FFFFFF'
      );
    }
  }

  toggle(): void {
    this.config.mode = this.config.mode === 'dark' ? 'light' : 'dark';
    this.config.systemPreference = false;
    this.applyTheme();
    this.saveConfig();
    eventBus.emit('theme:change', { mode: this.config.mode });
  }

  setMode(mode: ThemeMode): void {
    if (this.config.mode === mode) return;

    this.config.mode = mode;
    this.config.systemPreference = false;
    this.applyTheme();
    this.saveConfig();
    eventBus.emit('theme:change', { mode: this.config.mode });
  }

  enableSystemPreference(): void {
    this.config.systemPreference = true;
    this.config.mode = this.getSystemPreference();
    this.applyTheme();
    this.saveConfig();
    eventBus.emit('theme:change', { mode: this.config.mode });
  }

  getMode(): ThemeMode {
    return this.config.mode;
  }

  isDark(): boolean {
    return this.config.mode === 'dark';
  }

  isSystemPreferenceEnabled(): boolean {
    return this.config.systemPreference;
  }

  getConfig(): ThemeConfig {
    return { ...this.config };
  }

  destroy(): void {
  }
}

export const themeService = new ThemeService();
