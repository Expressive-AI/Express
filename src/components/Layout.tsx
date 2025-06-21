import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen gradient-bg transition-colors duration-300 overflow-x-hidden mobile-container">
      <Navigation />
      <main className="pt-16 lg:pt-20 overflow-x-hidden mobile-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;