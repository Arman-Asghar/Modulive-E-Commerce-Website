// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Enter Email Address</label>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="grow px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:info@modulive.com"
                className="hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-start space-x-2 mb-3">
              <MapPin size={20} className="mt-1" />
              <span>Railway Station, Lahore.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <a href="mailto:info@modulive.com" className="hover:text-white transition-colors">
                info@Modulive.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-bold text-xl">Modulive</span>
            <p className="text-sm mt-1">© Copyright 2025. Modulive All Rights Reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;