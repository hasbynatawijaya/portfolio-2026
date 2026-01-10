import { Component } from '@/core/Component';
import { performanceMonitor } from '@/services/PerformanceMonitor';
import { eventBus } from '@/core/EventBus';
import type { PerformanceMetrics as Metrics, ComponentState } from '@/types/global';

interface PerformanceMetricsState extends ComponentState {
  metrics: Metrics;
  isVisible: boolean;
  score: number;
}

export class PerformanceMetrics extends Component<PerformanceMetricsState> {
  private updateInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    super(
      {},
      {
        metrics: performanceMonitor.getMetrics(),
        isVisible: false,
        score: 0,
      }
    );

    eventBus.on('performance:update', () => {
      this.updateMetrics();
    });

    this.initKonamiCode();
  }

  render(): string {
    const { metrics, isVisible, score } = this.state;

    if (!isVisible) {
      return `
        <div class="performance-metrics fixed bottom-4 right-4 z-50">
          <button
            data-click="handleToggle"
            class="btn-brutalist text-xs px-3 py-2 font-mono"
            title="Show performance metrics (or use Konami code)"
          >
            [PERF]
          </button>
        </div>
      `;
    }

    return `
      <div class="performance-metrics fixed bottom-4 right-4 z-50 w-80">
        <div class="terminal-brutalist">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-mono font-bold text-sm">PERFORMANCE METRICS</h3>
            <button
              data-click="handleToggle"
              class="text-brutalist-accent hover:text-brutalist-white transition-colors"
              aria-label="Close"
            >
              [X]
            </button>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between">
              <span>Overall Score:</span>
              <span class="${this.getScoreColor(score)}">${score}/100</span>
            </div>

            <div class="divider-brutalist my-2"></div>

            ${this.renderMetric('FCP', metrics.fcp, 'ms', 1800, 3000)}
            ${this.renderMetric('LCP', metrics.lcp, 'ms', 2500, 4000)}
            ${this.renderMetric('FID', metrics.fid, 'ms', 100, 300)}
            ${this.renderMetric('CLS', metrics.cls, '', 0.1, 0.25)}
            ${this.renderMetric('TTFB', metrics.ttfb, 'ms', 800, 1800)}

            <div class="divider-brutalist my-2"></div>

            <div class="flex justify-between">
              <span>Load Time:</span>
              <span>${this.formatTime(metrics.loadTime)}</span>
            </div>
            <div class="flex justify-between">
              <span>DOM Ready:</span>
              <span>${this.formatTime(metrics.domReady)}</span>
            </div>
          </div>

          <div class="mt-4 text-xs opacity-60">
            <p>Updates every 5s</p>
            <p class="terminal-brutalist-line mt-1">Performance monitored in real-time</p>
          </div>
        </div>
      </div>
    `;
  }

  private renderMetric(
    name: string,
    value: number,
    unit: string,
    good: number,
    poor: number
  ): string {
    const rating = this.getRating(value, good, poor);
    const color = this.getRatingColor(rating);
    const displayValue = unit ? `${Math.round(value)}${unit}` : value.toFixed(3);

    return `
      <div class="flex justify-between">
        <span>${name}:</span>
        <span class="${color}">${displayValue} <span class="text-xs">[${rating.toUpperCase()}]</span></span>
      </div>
    `;
  }

  private getRating(value: number, good: number, poor: number): string {
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }

  private getRatingColor(rating: string): string {
    switch (rating) {
      case 'good':
        return 'text-brutalist-green';
      case 'needs-improvement':
        return 'text-brutalist-yellow';
      case 'poor':
        return 'text-brutalist-accent';
      default:
        return '';
    }
  }

  private getScoreColor(score: number): string {
    if (score >= 90) return 'text-brutalist-green';
    if (score >= 50) return 'text-brutalist-yellow';
    return 'text-brutalist-accent';
  }

  private formatTime(ms: number): string {
    if (ms < 1000) {
      return `${Math.round(ms)}ms`;
    }
    return `${(ms / 1000).toFixed(2)}s`;
  }

  private handleToggle = (): void => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  private updateMetrics(): void {
    this.setState({
      metrics: performanceMonitor.getMetrics(),
      score: performanceMonitor.getScore(),
    });
  }

  private initKonamiCode(): void {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
          this.setState({ isVisible: true });
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  onMount(): void {
    void this.handleToggle;

    this.updateInterval = setInterval(() => {
      this.updateMetrics();
    }, 5000);

    setTimeout(() => {
      this.updateMetrics();
    }, 1000);
  }

  onDestroy(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }
}
