/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart } from 'lucide-react';

const BookAppointment = () => {
  return (
    <section className="py-16 bg-linear-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-2 mb-6">
                  <Award className="text-yellow-500" size={24} />
                  <span className="text-sm font-semibold text-yellow-600">Premium Quality</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  When We Create Furniture, We Strive For{' '}
                  <span className="text-green-600">The Finest Quality.</span>
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Every piece of furniture we create undergoes rigorous quality checks and 
                  is crafted with attention to detail that sets us apart in the industry.
                </p>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <Heart className="text-red-500" size={20} />
                    <span className="text-gray-700">100% Customer Satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="text-blue-500" size={20} />
                    <span className="text-gray-700">5-Year Warranty</span>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium group"
                >
                  <span>See Products</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Quality Furniture Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <p className="text-sm text-gray-600">Customer Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointment;