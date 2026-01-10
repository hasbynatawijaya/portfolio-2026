import type { ServiceInterface } from '@/types/global';

export class ServiceContainer {
  private services: Map<string, ServiceInterface> = new Map();
  private initialized: Set<string> = new Set();

  register<T extends ServiceInterface>(name: string, service: T): void {
    this.services.set(name, service);
  }

  get<T extends ServiceInterface>(name: string): T {
    const service = this.services.get(name);

    if (!service) {
      throw new Error(`Service "${name}" not found`);
    }

    if (!this.initialized.has(name) && service.init) {
      void service.init();
      this.initialized.add(name);
    }

    return service as T;
  }

  has(name: string): boolean {
    return this.services.has(name);
  }

  async initAll(): Promise<void> {
    const initPromises: Promise<void>[] = [];

    for (const [name, service] of this.services.entries()) {
      if (!this.initialized.has(name) && service.init) {
        const result = service.init();
        if (result instanceof Promise) {
          initPromises.push(result);
        }
        this.initialized.add(name);
      }
    }

    await Promise.all(initPromises);
  }

  destroyAll(): void {
    for (const service of this.services.values()) {
      if (service.destroy) {
        service.destroy();
      }
    }
    this.services.clear();
    this.initialized.clear();
  }

  remove(name: string): void {
    const service = this.services.get(name);
    if (service && service.destroy) {
      service.destroy();
    }
    this.services.delete(name);
    this.initialized.delete(name);
  }
}

export const container = new ServiceContainer();
