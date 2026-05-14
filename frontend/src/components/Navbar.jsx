import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="h-8 w-8 text-green-600 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-2xl text-green-900 tracking-tight">Prespa-1</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Home</Link>
            <Link to="/activities" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Activities</Link>
            <Link to="/blog" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Guardians of Prespa</Link>
            <Link to="/contact" className="bg-green-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-800 transition-all shadow-md">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-green-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-medium text-gray-700 border-b border-gray-50">Home</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-medium text-gray-700 border-b border-gray-50">Activities</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-medium text-gray-700 border-b border-gray-50">Guardians of Prespa</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-green-700">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
