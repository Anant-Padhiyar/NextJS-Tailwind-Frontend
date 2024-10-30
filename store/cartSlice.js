// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return []; // Return empty array if on server
};

const initialState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex >= 0) {
        // If the item already exists in the cart, increase the quantity
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add it to the cart
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }

      // Update local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify([]));
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
