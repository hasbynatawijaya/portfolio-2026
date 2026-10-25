import { router } from './Router';
import { container } from './ServiceContainer';
import { themeService } from '@/services/ThemeService';
import { performanceMonitor } from '@/services/PerformanceMonitor';
import { storage } from '@/services/StorageService';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PerformanceMetrics } from '@/components/ui/PerformanceMetrics';

export class App {
  private header: Header | null = null;
  private footer: Footer | null = null;
  private performanceMetrics: PerformanceMetrics | null = null;

  async init(): Promise<void> {
    this.registerServices();
    await container.initAll();
    this.setupRoutes();
    this.mountCoreComponents();
    router.init();
  }

  private registerServices(): void {
    container.register('storage', storage);
    container.register('theme', themeService);
    container.register('performance', performanceMonitor);
  }

  private setupRoutes(): void {
    router.setContainer('#app');

    router.register(
      '/',
      () => import('@/pages/home'),
      {
        title: 'Hasby Natawijaya - Senior Frontend Engineer',
        description:
          'Senior Frontend Engineer with 9 years of experience building B2B web products',
      }
    );

    router.register(
      '/404',
      () => import('@/pages/404'),
      {
        title: '404 - Page Not Found',
        description: 'Page not found',
      }
    );
  }

  private mountCoreComponents(): void {
    const headerContainer = document.querySelector('#header');
    if (headerContainer) {
      this.header = new Header();
      this.header.mount(headerContainer as HTMLElement);
    }

    const footerContainer = document.querySelector('#footer');
    if (footerContainer) {
      this.footer = new Footer();
      this.footer.mount(footerContainer as HTMLElement);
    }

    const perfContainer = document.querySelector('#performance-metrics');
    if (perfContainer) {
      this.performanceMetrics = new PerformanceMetrics();
      this.performanceMetrics.mount(perfContainer as HTMLElement);
    }
  }

  destroy(): void {
    this.header?.destroy();
    this.footer?.destroy();
    this.performanceMetrics?.destroy();
    container.destroyAll();
  }
}
