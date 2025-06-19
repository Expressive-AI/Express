import { useEffect } from 'react';

export const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now();
      
      return () => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        
        if (renderTime > 100) { // Log if component takes more than 100ms to render
          console.warn(`Performance warning: ${componentName} took ${renderTime.toFixed(2)}ms to render`);
        }
      };
    }
  }, [componentName]);
};
