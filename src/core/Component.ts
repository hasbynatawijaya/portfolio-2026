import type { ComponentProps, ComponentState } from '@/types/global';

export abstract class Component<
  TState extends ComponentState = ComponentState,
  TProps extends ComponentProps = ComponentProps
> {
  protected element: HTMLElement | null = null;
  protected state: TState;
  protected props: TProps;
  protected subscribers: Set<(state: TState) => void>;
  protected mounted = false;

  constructor(props: TProps = {} as TProps, initialState: TState = {} as TState) {
    this.props = props;
    this.state = initialState;
    this.subscribers = new Set();
  }

  abstract render(): string;

  onMount?(): void | Promise<void>;
  onUpdate?(prevState: TState): void;
  onDestroy?(): void;

  mount(container: HTMLElement | string): void {
    const target =
      typeof container === 'string' ? document.querySelector<HTMLElement>(container) : container;

    if (!target) {
      throw new Error(`Cannot find container: ${container}`);
    }

    target.innerHTML = this.render();
    this.element = target.firstElementChild as HTMLElement;

    if (!this.element) {
      throw new Error('Component render() must return valid HTML');
    }

    this.attachEventListeners();
    this.mounted = true;
    this.onMount?.();
  }

  setState(newState: Partial<TState>): void {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...newState };

    if (this.mounted) {
      this.update();
      this.notify();
      this.onUpdate?.(prevState);
    }
  }

  getState(): TState {
    return { ...this.state };
  }

  protected update(): void {
    if (!this.element || !this.element.parentElement) return;

    const parent = this.element.parentElement;
    const newHTML = this.render();
    const temp = document.createElement('div');
    temp.innerHTML = newHTML;
    const newElement = temp.firstElementChild as HTMLElement;

    if (newElement) {
      parent.replaceChild(newElement, this.element);
      this.element = newElement;
      this.attachEventListeners();
    }
  }

  protected attachEventListeners(): void {
    if (!this.element) return;

    const clickElements = this.element.querySelectorAll('[data-click]');
    clickElements.forEach((el) => {
      const handlerName = el.getAttribute('data-click');
      if (handlerName && typeof this[handlerName as keyof this] === 'function') {
        el.addEventListener('click', (e) => {
          (this[handlerName as keyof this] as unknown as (e: Event) => void).call(this, e);
        });
      }
    });

    const inputElements = this.element.querySelectorAll('[data-input]');
    inputElements.forEach((el) => {
      const handlerName = el.getAttribute('data-input');
      if (handlerName && typeof this[handlerName as keyof this] === 'function') {
        el.addEventListener('input', (e) => {
          (this[handlerName as keyof this] as unknown as (e: Event) => void).call(this, e);
        });
      }
    });
  }

  subscribe(callback: (state: TState) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  protected notify(): void {
    this.subscribers.forEach((callback) => callback(this.state));
  }

  destroy(): void {
    this.onDestroy?.();
    this.subscribers.clear();
    this.mounted = false;

    if (this.element && this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }

    this.element = null;
  }

  protected $(selector: string): HTMLElement | null {
    return this.element?.querySelector(selector) ?? null;
  }

  protected $$(selector: string): NodeListOf<HTMLElement> {
    return this.element?.querySelectorAll(selector) ?? ([] as unknown as NodeListOf<HTMLElement>);
  }
}
