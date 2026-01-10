import { Component } from '@/core/Component';
import { themeService } from '@/services/ThemeService';
import { eventBus } from '@/core/EventBus';
import type { ComponentState } from '@/types/global';

interface ThemeToggleState extends ComponentState {
  isDark: boolean;
  isSystemPreference: boolean;
}

export class ThemeToggle extends Component<ThemeToggleState> {
  constructor() {
    super(
      {},
      {
        isDark: themeService.isDark(),
        isSystemPreference: themeService.isSystemPreferenceEnabled(),
      }
    );

    eventBus.on('theme:change', () => {
      this.setState({
        isDark: themeService.isDark(),
        isSystemPreference: themeService.isSystemPreferenceEnabled(),
      });
    });
  }

  render(): string {
    const { isDark, isSystemPreference } = this.state;

    return `
      <div class="theme-toggle inline-flex items-center gap-2">
        <button
          data-click="handleToggle"
          class="btn-brutalist text-sm px-4 py-2 flex items-center gap-2"
          aria-label="Toggle theme"
          title="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
        >
          <span class="font-mono">${isDark ? '[DARK]' : '[LIGHT]'}</span>
          <span class="text-xs opacity-60">${isSystemPreference ? 'AUTO' : 'MANUAL'}</span>
        </button>
      </div>
    `;
  }

  private handleToggle = (): void => {
    themeService.toggle();
  };

  onMount(): void {
    void this.handleToggle;
  }
}
