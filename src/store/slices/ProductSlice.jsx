import {createSlice} from "@reduxjs/toolkit";
import { products } from "../../data";

const productSlice = createSlice({
    name: 'productList',
    initialState: { 
      productItems: products,
      searchQuery: '',
    },
    reducers: {
      addProduct: (state, action) => {
        const newProduct = action.payload;
        const maxId = state.productItems.reduce((max, item) => Math.max(max, item.id), 0);
        newProduct.id = maxId + 1;
        state.productItems.unshift(newProduct);       
      },
      updateIds: (state) => {
        state.productItems.forEach((item, index) => {
          item.id = index + 1;
        });
      },
      removeProduct: (state, action) => {
        state.productItems = state.productItems.filter(item => item.id !== action.payload.id); 
      },
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload || ''; 
      },
    },
  });
  
export const { addProduct, removeProduct, updateIds, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;