// src/components/products/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { addToCart } from '../../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative overflow-hidden h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Quick Add to Cart */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors"
          >
            <ShoppingCart className="text-green-600" size={20} />
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <div className="flex items-center">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            <span className={`text-sm ${product.stock > 5 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 5 ? 'In Stock' : `Only ${product.stock} left`}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;