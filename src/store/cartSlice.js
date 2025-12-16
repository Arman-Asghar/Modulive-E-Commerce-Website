import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        toast.success(`Updated quantity for ${action.payload.name}`);
      } else {
        state.items.push(action.payload);
        toast.success(`${action.payload.name} added to cart!`);
      }
      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
    removeFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
      
      if (item) {
        toast.error(`${item.name} removed from cart`);
      }
      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        if (quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
          toast.error(`${item.name} removed from cart`);
        } else {
          item.quantity = quantity;
        }
      }
      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
      toast.success('Cart cleared successfully');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;