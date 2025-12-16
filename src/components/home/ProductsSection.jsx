/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import ProductCard from '../products/ProductCard';
import { motion } from 'framer-motion';
import { products } from '../../data/products';

const categories = ['All', 'Chair', 'Cabinet', 'Sofa', 'Bed'];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products.slice(0, visibleCount);
    } else {
      return products
        .filter(product => product.category === selectedCategory.toLowerCase())
        .slice(0, visibleCount);
    }
  }, [selectedCategory, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Best Quality Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of premium furniture pieces
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Show More Button */}
      {visibleCount < products.length && (
        <div className="text-center">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer"
          >
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;