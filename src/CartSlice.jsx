import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(item => item.name === itemToRemove.name);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrement quantity if item exists and quantity is greater than 1
        } else {
          state.items = state.items.filter(item => item.name !== itemToRemove.name); // Remove item if quantity is 1
        }
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity of the existing item
      } 
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
