import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  private observer: PerformanceObserver | null = null;

  constructor() {
    this.setupPerformanceObserver();
    this.captureLoadTime();
  }

  private setupPerformanceObserver() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                this.metrics.firstContentfulPaint = entry.startTime;
              }
              break;
            case 'largest-contentful-paint':
              this.metrics.largestContentfulPaint = entry.startTime;
              break;
            case 'layout-shift':
              if (!entry.hadRecentInput) {
                this.metrics.cumulativeLayoutShift += entry.value;
              }
              break;
          }
        }
      });

      this.observer.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'],
      });
    }
  }

  private captureLoadTime() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        this.metrics.loadTime = performance.now();
        this.reportMetrics();
      });
    }
  }

  private reportMetrics() {
    // Send metrics to your analytics service
    console.log('Performance Metrics:', this.metrics);
  }

  public getMetrics(): PerformanceMetrics {
    return this.metrics;
  }

  public cleanup() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export const performanceMonitor = new PerformanceMonitor();

export function usePerformanceMonitoring() {
  useEffect(() => {
    return () => {
      performanceMonitor.cleanup();
    };
  }, []);
} 