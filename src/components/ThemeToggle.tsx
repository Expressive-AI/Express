import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass-button p-2 text-cool-slate-700 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 min-h-11 min-w-11 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Moon className="h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;