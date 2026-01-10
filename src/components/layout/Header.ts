import { Component } from '@/core/Component';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { ComponentState } from '@/types/global';

interface HeaderState extends ComponentState {
  isScrolled: boolean;
}

export class Header extends Component<HeaderState> {
  private themeToggle: ThemeToggle | null = null;

  constructor() {
    super({}, { isScrolled: false });
    window.addEventListener('scroll', this.handleScroll);
  }

  render(): string {
    const { isScrolled } = this.state;

    return `
      <header class="header fixed top-0 left-0 right-0 z-40 transition-all ${
        isScrolled ? 'shadow-brutalist-sm' : ''
      }">
        <nav class="nav-brutalist">
          <div class="container">
            <div class="flex items-center justify-between py-4">
              <a href="/" data-link class="logo flex items-center gap-2 group">
                <span class="font-display font-black text-2xl">
                  <span class="text-brutalist-black dark:text-brutalist-white">HASBY</span>
                  <span class="text-brutalist-accent">_</span>
                </span>
              </a>

              <div class="hidden md:flex items-center gap-6">
                <a href="/#about" data-link class="nav-brutalist-item">About</a>
                <a href="/#experience" data-link class="nav-brutalist-item">Experience</a>
                <a href="/#projects" data-link class="nav-brutalist-item">Projects</a>
                <a href="/#contact" data-link class="nav-brutalist-item">Contact</a>
                <div id="theme-toggle-container"></div>
              </div>

              <button
                data-click="handleMobileMenuToggle"
                class="md:hidden btn-brutalist text-sm px-3 py-2"
                aria-label="Toggle menu"
              >
                [MENU]
              </button>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  onMount(): void {
    this.mountThemeToggle();
  }

  onUpdate(): void {
    this.mountThemeToggle();
  }

  private mountThemeToggle(): void {
    const themeToggleContainer = this.element?.querySelector('#theme-toggle-container');
    if (themeToggleContainer) {
      if (this.themeToggle) {
        this.themeToggle.destroy();
      }
      this.themeToggle = new ThemeToggle();
      this.themeToggle.mount(themeToggleContainer as HTMLElement);
    }
  }

  private handleScroll = (): void => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== this.state.isScrolled) {
      this.setState({ isScrolled: scrolled });
    }
  };

  onDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    this.themeToggle?.destroy();
  }
}
