/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Transform Space with{' '}
              <span className="text-green-600">Sustainable</span>{' '}
              Furniture
            </h1>
            
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
              ))}
              <span className="text-gray-600 ml-2">Check reviews</span>
            </div>

            <div className="w-full h-px bg-gray-300"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Elite Chair</h3>
                  <p className="text-gray-600">Premium comfort & design</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">$150.00</p>
                  <Link
                    to="/products"
                    className="inline-block mt-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-64 md:h-96 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-50 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-50 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;