import type { RouteConfig, RouteMatch } from '@/types/global';
import { eventBus } from './EventBus';

export class Router {
  private routes: RouteConfig[] = [];
  private currentRoute: RouteMatch | null = null;
  private container: HTMLElement | null = null;

  constructor() {
    // Listen to browser navigation events
    window.addEventListener('popstate', () => this.handleNavigation());

    // Intercept link clicks for SPA navigation
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[data-link]');

      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          this.navigate(href);
        }
      }
    });
  }

  register(path: string, component: () => Promise<any>, meta?: RouteConfig['meta']): void {
    this.routes.push({
      path,
      component,
      meta,
    });
  }

  setContainer(container: HTMLElement | string): void {
    this.container =
      typeof container === 'string' ? document.querySelector<HTMLElement>(container) : container;

    if (!this.container) {
      throw new Error(`Cannot find container: ${container}`);
    }
  }

  navigate(path: string, pushState = true): void {
    const match = this.matchRoute(path);

    if (!match) {
      const notFoundRoute = this.matchRoute('/404');
      if (notFoundRoute) {
        this.renderRoute(notFoundRoute);
      }
      return;
    }

    if (pushState) {
      window.history.pushState({ path }, '', path);
    }

    this.currentRoute = match;
    this.renderRoute(match);

    eventBus.emit('route:change', { path, params: match.params });
    this.updateMeta(match.route);
    window.scrollTo(0, 0);
  }

  private handleNavigation(): void {
    const path = window.location.pathname;
    this.navigate(path, false);
  }

  private matchRoute(path: string): RouteMatch | null {
    for (const route of this.routes) {
      const params = this.extractParams(route.path, path);
      if (params !== null) {
        return { route, params };
      }
    }
    return null;
  }

  private extractParams(pattern: string, path: string): Record<string, string> | null {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);

    if (patternParts.length !== pathParts.length) {
      return null;
    }

    const params: Record<string, string> = {};

    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i];

      if (patternPart && pathPart) {
        if (patternPart.startsWith(':')) {
          const paramName = patternPart.slice(1);
          params[paramName] = pathPart;
        } else if (patternPart !== pathPart) {
          return null;
        }
      }
    }

    return params;
  }

  private async renderRoute(match: RouteMatch): Promise<void> {
    if (!this.container) {
      throw new Error('Router container not set');
    }

    try {
      this.container.innerHTML = '<div class="loading">Loading...</div>';

      const ComponentModule = await match.route.component();
      const ComponentClass = ComponentModule.default || ComponentModule;
      const component = new ComponentClass({ params: match.params });

      this.container.innerHTML = '';
      component.mount(this.container);
    } catch {
      this.container.innerHTML = '<div class="error">Error loading page</div>';
    }
  }

  private updateMeta(route: RouteConfig): void {
    if (route.meta) {
      Object.entries(route.meta).forEach(([name, content]) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);

        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }

        metaTag.setAttribute('content', content);
      });
    }

    if (route.title) {
      document.title = route.title;
    }
  }

  getCurrentRoute(): RouteMatch | null {
    return this.currentRoute;
  }

  getCurrentPath(): string {
    return window.location.pathname;
  }

  init(): void {
    const currentPath = this.getCurrentPath();
    this.navigate(currentPath, false);
  }
}

export const router = new Router();
