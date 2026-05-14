import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { siteInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl tracking-wider uppercase">ECTER Bitola</span>
            </div>
            <p className="text-green-200/70 text-sm leading-relaxed">
              Empowering the local community through sustainable action and environmental preservation in the Prespa region.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-green-200/80">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/activities" className="hover:text-green-400 transition-colors">Activities</Link></li>
              <li><Link to="/blog" className="hover:text-green-400 transition-colors">Guardians of Prespa</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-green-200/80">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-400 mt-1" />
                <span>{siteInfo.contact.email}</span>
              </li>
              <li className="text-sm">
                Bitola, Macedonia<br />
                Brainster Academy Partner
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-green-900 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-900 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-green-900 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-500">
          <p>© {new Date().getFullYear()} Prespa-1. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
