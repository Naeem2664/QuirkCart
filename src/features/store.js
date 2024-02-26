import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/slices/productSlice'; 

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
