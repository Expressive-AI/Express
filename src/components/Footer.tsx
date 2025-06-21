import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  ChevronUp,
  Heart
} from 'lucide-react';
import Map from '../components/Map';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass border-t border-white/20 dark:border-white/10 text-cool-slate-900 dark:text-white relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Expressive AI Logo"
                  className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                />
                <span className="text-lg sm:text-xl font-bold text-cool-slate-900 dark:text-white">
                  Expressive AI
                </span>
              </div>


              <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Empowering creators, thinkers, educators & strategists with ethical, expressive AI tools for Business, Humanities & Thought.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="h-3 sm:h-4 w-3 sm:w-4 text-accent-blue-600 dark:text-accent-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-cool-slate-600 dark:text-cool-slate-300">
                    Bengaluru, India
                  </span>
                  <button 
                    onClick={() => setShowMap(!showMap)}
                    className="text-xs text-accent-blue-600 dark:text-accent-blue-400 hover:underline whitespace-nowrap"
                  >
                    {showMap ? 'Hide Map' : 'Show Map'}
                  </button>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="h-3 sm:h-4 w-3 sm:w-4 text-accent-blue-600 dark:text-accent-blue-400 flex-shrink-0" />
                  <a href="mailto:expressiveai2025@gmail.com" className="text-xs sm:text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 break-all">
                    expressiveai2025@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="h-3 sm:h-4 w-3 sm:w-4 text-accent-blue-600 dark:text-accent-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-cool-slate-600 dark:text-cool-slate-300">
                    +91 7356711236
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Clock className="h-3 sm:h-4 w-3 sm:w-4 text-accent-blue-600 dark:text-accent-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-cool-slate-600 dark:text-cool-slate-300">
                    Mon-Fri 9:00 AM - 6:00 PM IST
                  </span>
                </div>
              </div>

              {/* Map Section */}
              {showMap && (
                <div className="mb-4 sm:mb-6">
                  <Map 
                    center={[12.9716, 77.5946]} 
                    zoom={12}
                    className="h-24 sm:h-32 w-full rounded-lg"
                    showMarker={true}
                    markerPopup="ExpressiveAI - Bengaluru, India"
                  />
                </div>
              )}

              {/* Social Links */}
              <div className="flex space-x-2">
                <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">
                  <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">
                  <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">
                  <Github className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a href="mailto:hello@expressiveai.com" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">
                  <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link to="/products" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">AI Writing Tools</Link></li>
                <li><Link to="/products" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Research Assistant</Link></li>
                <li><Link to="/products" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Content Analytics</Link></li>
                <li><Link to="/products" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link to="/services" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Consulting</Link></li>
                <li><Link to="/services" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Implementation</Link></li>
                <li><Link to="/services" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Training</Link></li>
                <li><Link to="/services" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link to="/contact" className="text-sm text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Early Access</Link></li>
                <li><Link to="/about" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Blog</Link></li>
                <li><Link to="/*" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/*" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        

        {/* Certifications */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 dark:border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cool-slate-600 dark:text-cool-slate-400 text-sm">
              © 2025 Expressive AI. All rights reserved.
            </p>
            <p className="text-cool-slate-600 dark:text-cool-slate-400 text-sm flex items-center">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> for the minds that move society.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;