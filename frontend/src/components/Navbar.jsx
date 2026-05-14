import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#064e3b] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo from image_cbd05b.png */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
              {/* Replace with your local apple-mountain logo asset */}
              <img src="/logo-apple.png" alt="Pearl of Prespa Logo" className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-tight">Pearl of Prespa</span>
              <span className="text-green-200 text-sm font-medium">Regional Hub</span>
            </div>
          </Link>

          {/* All Pages from image_cbd099.png */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/about" className="hover:text-green-300 transition-colors">About Us</Link>
            <Link to="/activities" className="hover:text-green-300 transition-colors">Activities</Link>
            <Link to="/community" className="hover:text-green-300 transition-colors">Community</Link>
            <Link to="/library" className="hover:text-green-300 transition-colors">Library Hub</Link>
            <Link to="/blog" className="hover:text-green-300 transition-colors">Guardians of Prespa</Link>
            <Link to="/contact" className="ml-4 bg-white text-[#064e3b] px-5 py-2 rounded font-bold hover:bg-green-50 transition-all">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#064e3b] border-t border-green-800 px-4 py-6 space-y-4">
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg">About Us</Link>
          <Link to="/activities" onClick={() => setIsOpen(false)} className="block text-lg">Activities</Link>
          <Link to="/community" onClick={() => setIsOpen(false)} className="block text-lg">Community</Link>
          <Link to="/library" onClick={() => setIsOpen(false)} className="block text-lg">Library Hub</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-lg">Guardians of Prespa</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block font-bold text-green-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
