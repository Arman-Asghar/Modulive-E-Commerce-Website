// src/components/home/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Palette, Clock, Play } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Sustainability',
    description: 'Eco-friendly materials and sustainable manufacturing processes.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Check,
    title: 'Unrivaled quality',
    description: 'Unrivaled quality defines everything we create, from the careful selection of premium materials.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Palette,
    title: 'Unmatched variety',
    description: 'Wide range of designs and styles to match every taste and space.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Legacy of excellence',
    description: 'Decades of craftsmanship and customer satisfaction.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are the reasons why Modulive stands out as the ultimate choice in furniture solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative bg-linear-to-r from-green-600 to-blue-600 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Watch the video and learn more about Modulive
                </h3>
                <p className="text-green-100">
                  Discover our story, our process, and what makes us different
                </p>
              </div>
              <button className="group relative bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2 cursor-pointer">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;