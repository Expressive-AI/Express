import React, { Suspense } from 'react';
import { MapProps } from '../types/contact';

// Lazy load the actual Map component
const LazyMap = React.lazy(() => import('./Map'));

const MapLoader: React.FC<MapProps> = (props) => {
  return (
    <Suspense 
      fallback={
        <div className={`${props.className || 'h-64 w-full rounded-lg'} bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-500 dark:text-gray-400">Loading map...</div>
        </div>
      }
    >
      <LazyMap {...props} />
    </Suspense>
  );
};

export default MapLoader;
