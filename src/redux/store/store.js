import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    allCart: cartReducer,

  },
});

export default store; 
