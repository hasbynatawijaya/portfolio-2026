import type { ServiceInterface, PerformanceMetrics } from '@/types/global';
import { eventBus } from '@/core/EventBus';

export class PerformanceMonitor implements ServiceInterface {
  private metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    domReady: 0,
  };

  private observers: PerformanceObserver[] = [];
  private clsValue = 0;
  private clsEntries: PerformanceEntry[] = [];

  init(): void {
    if (document.readyState === 'complete') {
      this.startMonitoring();
    } else {
      window.addEventListener('load', () => this.startMonitoring());
    }
  }

  private startMonitoring(): void {
    this.observePaint();
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.calculateBasicMetrics();

    setTimeout(() => {
      eventBus.emit('performance:update', this.getMetrics());
    }, 1000);
  }

  private observePaint(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            eventBus.emit('performance:fcp', { value: entry.startTime });
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch {}
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.metrics.lcp = lastEntry.startTime;
          eventBus.emit('performance:lcp', { value: lastEntry.startTime });
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch {}
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          eventBus.emit('performance:fid', { value: this.metrics.fid });
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch {}
  }

  private observeCLS(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as LayoutShift).hadRecentInput) {
            this.clsValue += (entry as LayoutShift).value;
            this.clsEntries.push(entry);
          }
        }

        this.metrics.cls = this.clsValue;
        eventBus.emit('performance:cls', { value: this.clsValue });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch {}
  }

  private calculateBasicMetrics(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigation) {
      this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      this.metrics.domReady = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getMetric(name: keyof PerformanceMetrics): number {
    return this.metrics[name] as number;
  }

  getScore(): number {
    const scores: number[] = [];

    if (this.metrics.fcp > 0) {
      scores.push(this.scoreMetric(this.metrics.fcp, 1800, 3000));
    }

    if (this.metrics.lcp > 0) {
      scores.push(this.scoreMetric(this.metrics.lcp, 2500, 4000));
    }

    if (this.metrics.fid > 0) {
      scores.push(this.scoreMetric(this.metrics.fid, 100, 300));
    }

    if (this.metrics.cls > 0) {
      scores.push(this.scoreMetric(this.metrics.cls, 0.1, 0.25));
    }

    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
  }

  private scoreMetric(value: number, good: number, poor: number): number {
    if (value <= good) return 100;
    if (value >= poor) return 0;
    return Math.round(((poor - value) / (poor - good)) * 100);
  }

  getRating(metric: keyof PerformanceMetrics): 'good' | 'needs-improvement' | 'poor' {
    const value = this.metrics[metric] as number;

    const thresholds: Record<keyof PerformanceMetrics, [number, number]> = {
      fcp: [1800, 3000],
      lcp: [2500, 4000],
      fid: [100, 300],
      cls: [0.1, 0.25],
      ttfb: [800, 1800],
      loadTime: [3000, 5000],
      domReady: [1500, 3000],
    };

    const [good, poor] = thresholds[metric] ?? [0, 0];

    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }

  destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export const performanceMonitor = new PerformanceMonitor();
