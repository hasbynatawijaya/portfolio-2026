export class ScrollReveal {
  private observer: IntersectionObserver | null = null;
  private elements: Set<Element> = new Set();
  private options: IntersectionObserverInit;

  constructor(options: IntersectionObserverInit = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      ...options,
    };

    this.init();
  }

  private init(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.reveal(entry.target);
        }
      });
    }, this.options);
  }

  observe(element: Element): void {
    if (!this.observer) return;

    this.elements.add(element);
    this.observer.observe(element);
  }

  observeAll(selector: string): void {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => this.observe(element));
  }

  private reveal(element: Element): void {
    element.classList.add('revealed');

    const children = element.querySelectorAll('[data-stagger]');
    if (children.length > 0) {
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('revealed');
        }, index * 100);
      });
    }

    if (this.observer) {
      this.observer.unobserve(element);
    }
    this.elements.delete(element);
  }

  unobserve(element: Element): void {
    if (!this.observer) return;

    this.observer.unobserve(element);
    this.elements.delete(element);
  }

  revealAll(): void {
    this.elements.forEach((element) => {
      this.reveal(element);
    });
  }

  reset(element: Element): void {
    element.classList.remove('revealed');
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.elements.clear();
  }

  refresh(): void {
    const elementsArray = Array.from(this.elements);
    this.destroy();
    this.init();
    elementsArray.forEach((element) => this.observe(element));
  }
}

export const scrollReveal = new ScrollReveal();
