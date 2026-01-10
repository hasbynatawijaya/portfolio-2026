// Global type definitions

export interface ComponentProps {
  [key: string]: unknown;
}

export interface ComponentState {
  [key: string]: unknown;
}

export interface RouteConfig {
  path: string;
  component: () => Promise<Component>;
  title?: string;
  meta?: Record<string, string>;
}

export interface RouteMatch {
  route: RouteConfig;
  params: Record<string, string>;
}

export interface EventPayload {
  [key: string]: unknown;
}

export type EventCallback = (payload?: EventPayload) => void;

export interface PerformanceMetrics extends EventPayload {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  domReady: number;
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  systemPreference: boolean;
}

export type ThemeMode = 'light' | 'dark';

export interface ServiceInterface {
  init?(): void | Promise<void>;
  destroy?(): void;
}
