import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Community', path: '/community' },
    { name: 'Art', path: '/art' },
    { name: 'Library', path: '/library' },
    { name: 'Gradians of Prespa', path: '/blog' }, // Typo corrected from Gradians
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_regional-hub-1/artifacts/vt4twy86_Adobe%20Express%20-%20file.png" 
              alt="Pearl of Prespa Logo" 
              className="h-14 w-14 transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-green-800 tracking-tight">Pearl of Prespa</h1>
              <p className="text-xs text-green-600 font-medium">Regional Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Standard Links (Excluding Contact) */}
            {navLinks.filter(link => link.name !== 'Contact').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* The Specific Contact Button */}
            <Link to="/contact" className="ml-4">
              <Button className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-full transition-all shadow-md">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-green-700 bg-green-50'
                    : link.name === 'Contact' 
                      ? 'text-white bg-green-700 mt-4 text-center' 
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
