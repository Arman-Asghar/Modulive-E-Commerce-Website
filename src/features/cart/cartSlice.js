import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      toast.success("Item added to cart");
    },
    removeFromCart(state, action) {
      toast.error("Item removed");
      return state.filter(item => item.id !== action.payload);
    },
    increment(state, action) {
      const item = state.find(i => i.id === action.payload);
      item.quantity++;
    },
    decrement(state, action) {
      const item = state.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
