export class ParallaxEffect {
  private elements: Map<Element, ParallaxConfig> = new Map();
  private ticking = false;
  private scrollY = 0;

  constructor() {
    this.init();
  }

  private init(): void {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.scrollY = window.pageYOffset;
  }

  private handleScroll = (): void => {
    this.scrollY = window.pageYOffset;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });

      this.ticking = true;
    }
  };

  private update(): void {
    this.elements.forEach((config, element) => {
      this.updateElement(element as HTMLElement, config);
    });
  }

  private updateElement(element: HTMLElement, config: ParallaxConfig): void {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + this.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    const isInViewport =
      this.scrollY + windowHeight > elementTop && this.scrollY < elementTop + elementHeight;

    if (!isInViewport && !config.continuous) {
      return;
    }

    const scrolled = this.scrollY - elementTop + windowHeight;
    const parallaxSpeed = config.speed;
    const offset = scrolled * parallaxSpeed;

    switch (config.direction) {
      case 'vertical':
        element.style.transform = `translate3d(0, ${offset}px, 0)`;
        break;
      case 'horizontal':
        element.style.transform = `translate3d(${offset}px, 0, 0)`;
        break;
      case 'scale':
        const scale = 1 + offset * 0.001;
        element.style.transform = `scale(${Math.max(0.8, Math.min(1.2, scale))})`;
        break;
      case 'rotate':
        element.style.transform = `rotate(${offset * 0.1}deg)`;
        break;
      case 'opacity':
        const opacity = 1 - Math.abs(offset) * 0.001;
        element.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
        break;
    }
  }

  add(
    element: Element,
    config: Partial<ParallaxConfig> = {}
  ): void {
    const fullConfig: ParallaxConfig = {
      speed: -0.5,
      direction: 'vertical',
      continuous: false,
      ...config,
    };

    this.elements.set(element, fullConfig);

    this.updateElement(element as HTMLElement, fullConfig);
  }

  addAll(selector: string, config: Partial<ParallaxConfig> = {}): void {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => this.add(element, config));
  }

  remove(element: Element): void {
    this.elements.delete(element);

    if (element instanceof HTMLElement) {
      element.style.transform = '';
      element.style.opacity = '';
    }
  }

  removeAll(): void {
    this.elements.forEach((_, element) => {
      if (element instanceof HTMLElement) {
        element.style.transform = '';
        element.style.opacity = '';
      }
    });
    this.elements.clear();
  }

  updateConfig(element: Element, config: Partial<ParallaxConfig>): void {
    const currentConfig = this.elements.get(element);
    if (currentConfig) {
      this.elements.set(element, { ...currentConfig, ...config });
    }
  }

  refresh(): void {
    this.update();
  }

  destroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    this.removeAll();
  }
}

export interface ParallaxConfig {
  speed: number;
  direction: 'vertical' | 'horizontal' | 'scale' | 'rotate' | 'opacity';
  continuous: boolean;
}

export const parallax = new ParallaxEffect();
