import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
