import { memo } from 'react';

// Memoized background components to prevent unnecessary re-renders
export const FloatingShapes = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-300/20 dark:to-purple-300/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 dark:from-pink-300/20 dark:to-orange-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-green-400/10 dark:from-cyan-300/20 dark:to-green-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
    <div className="absolute bottom-40 right-40 w-28 h-28 bg-gradient-to-br from-yellow-400/10 to-red-400/10 dark:from-yellow-300/20 dark:to-red-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    
    {/* Geometric Shapes */}
    <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-blue-300/20 dark:border-blue-400/30 rotate-45 animate-spin-slow"></div>
    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-purple-300/20 dark:border-purple-400/30 rotate-12 animate-bounce"></div>
    <div className="absolute top-2/3 left-1/3 w-20 h-20 border-2 border-pink-300/20 dark:border-pink-400/30 rounded-lg rotate-12 animate-float"></div>
  </div>
));

export const HybridModelBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Circuit-like patterns */}
    <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" viewBox="0 0 400 400">
      <defs>
        <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25 0v50M0 25h50" stroke="url(#gradient)" strokeWidth="1" fill="none"/>
          <circle cx="25" cy="25" r="3" fill="url(#gradient)"/>
        </pattern>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </svg>
    
    {/* Floating tech elements */}
    <div className="absolute top-16 left-16 w-8 h-8 bg-blue-500/20 dark:bg-blue-400/30 rounded-sm rotate-45 animate-float"></div>
    <div className="absolute top-32 right-24 w-6 h-6 bg-purple-500/20 dark:bg-purple-400/30 rounded-full animate-pulse"></div>
    <div className="absolute bottom-24 left-32 w-10 h-10 bg-cyan-500/20 dark:bg-cyan-400/30 rounded-lg rotate-12 animate-bounce"></div>
    <div className="absolute bottom-16 right-16 w-12 h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full animate-pulse"></div>
  </div>
));

export const LoveBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Heart-like flowing lines */}
    <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B"/>
          <stop offset="50%" stopColor="#FF8E8E"/>
          <stop offset="100%" stopColor="#FFA8A8"/>
        </linearGradient>
      </defs>
      <path d="M200 350 C100 250, 50 150, 100 100 C150 50, 200 75, 200 125 C200 75, 250 50, 300 100 C350 150, 300 250, 200 350 Z" 
            fill="none" 
            stroke="url(#loveGradient)" 
            strokeWidth="2"/>
    </svg>
    
    {/* Floating hearts and warm elements */}
    <div className="absolute top-20 left-20 w-6 h-6 bg-red-400/20 dark:bg-red-300/30 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-30 w-8 h-8 bg-pink-400/20 dark:bg-pink-300/30 rounded-full animate-float"></div>
    <div className="absolute bottom-30 left-40 w-4 h-4 bg-orange-400/20 dark:bg-orange-300/30 rounded-full animate-bounce"></div>
  </div>
));

FloatingShapes.displayName = 'FloatingShapes';
HybridModelBackground.displayName = 'HybridModelBackground';
LoveBackground.displayName = 'LoveBackground';
