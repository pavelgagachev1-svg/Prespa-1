import React from 'react';
import { Mail, Globe, MapPin, Send, Phone } from 'lucide-react';
import { siteInfo } from '../data/mockData';

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 tracking-tight">
            Contact Us
          </h2>
          <div className="mt-2 h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to get involved? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Our Location</h4>
                <p className="text-gray-600 mt-1">{siteInfo.contact.organization}</p>
                <p className="text-gray-500 text-sm">{siteInfo.contact.address}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-600 mt-1">{siteInfo.contact.email}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Visit Website</h4>
                <p className="text-gray-600 mt-1">{siteInfo.contact.website}</p>
              </div>
            </div>

            {/* Visual Branding Element */}
            <div className="hidden lg:block relative mt-8 rounded-2xl overflow-hidden h-40 bg-green-900">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
               <div className="relative p-8 flex flex-col justify-center h-full">
                  <p className="text-green-100 italic text-lg font-medium">
                    "Preserving the natural beauty and community spirit of Prespa."
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form 
              action="https://formspree.io/f/mjgznqbg" 
              method="POST" 
              className="space-y-5"
            >
              {/* Full Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Submit Message
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                By clicking submit, your message will be sent directly to the ECTER team via Formspree.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
