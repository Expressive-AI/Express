import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'glass-nav backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-2xl border-b border-white/20 dark:border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-14">
          {/* Logo - Mobile Optimized */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Expressive AI"
              className="h-16 w-16 sm:h-14 sm:w-14 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent-blue-600 via-soft-coral-500 to-accent-blue-600 bg-clip-text text-transparent hidden xs:inline">
              Expressive AI
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-accent-blue-600 via-soft-coral-500 to-accent-blue-600 bg-clip-text text-transparent xs:hidden">
              ExpressiveAI
            </span>
          </Link>

          {/* Desktop Navigation - More Compact */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? 'text-accent-blue-600 dark:text-accent-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-500/10 to-soft-coral-500/10 rounded-lg animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-500/0 to-soft-coral-500/0 group-hover:from-accent-blue-500/10 group-hover:to-soft-coral-500/10 rounded-lg transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            <Link
              to="/join"
              className="hidden md:inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 rounded-full hover:from-accent-blue-700 hover:to-soft-coral-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <span className="hidden lg:inline">Join Early Access</span>
              <span className="lg:hidden">Join</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors duration-300 relative z-50"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced & Fixed */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 transition-all duration-300 ease-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      } overflow-hidden z-40`}>
        <div className="px-4 py-4 glass backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border-b border-white/20 dark:border-white/10 shadow-xl">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:translate-x-2 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-accent-blue-500/20 to-soft-coral-500/20 text-accent-blue-700 dark:text-accent-blue-300 shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-accent-blue-500/10 hover:to-soft-coral-500/10'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 space-y-3 border-t border-white/20 dark:border-white/10">
              <div className="flex justify-center sm:hidden">
                <ThemeToggle />
              </div>
              
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center text-white font-medium bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 rounded-xl hover:from-accent-blue-700 hover:to-soft-coral-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join Early Access
              </Link>
            </div>
          </div>
        </div>
        {/* Backdrop to close menu */}
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navigation;