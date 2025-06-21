const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="text-center">
        {/* Standard Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading Text */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;