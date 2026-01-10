import type { EventCallback, EventPayload } from '@/types/global';

export class EventBus {
  private events: Map<string, Set<EventCallback>>;

  constructor() {
    this.events = new Map();
  }

  on(event: string, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    const callbacks = this.events.get(event)!;
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.events.delete(event);
      }
    };
  }

  once(event: string, callback: EventCallback): void {
    const wrappedCallback: EventCallback = (payload?: EventPayload) => {
      callback(payload);
      this.off(event, wrappedCallback);
    };

    this.on(event, wrappedCallback);
  }

  off(event: string, callback: EventCallback): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.events.delete(event);
      }
    }
  }

  emit(event: string, payload?: EventPayload): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => {
        try {
          callback(payload);
        } catch {}
      });
    }
  }

  clear(): void {
    this.events.clear();
  }

  getEvents(): string[] {
    return Array.from(this.events.keys());
  }

  hasListeners(event: string): boolean {
    const callbacks = this.events.get(event);
    return callbacks !== undefined && callbacks.size > 0;
  }
}

export const eventBus = new EventBus();
