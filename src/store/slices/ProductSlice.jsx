import {createSlice} from "@reduxjs/toolkit";
import { products } from "../../data";
// import { setSearchQuery } from "./UsersSlice";

const productSlice = createSlice({
    name: 'productList',
    initialState: {
      productItems: products, // Initialize state with the dummy data
      searchQuery: '',
    },
    reducers: {
      // Add reducers if needed
      addProduct: (state, action) => {
        const newProduct = action.payload;
         // Assign the lowest available ID
        const maxId = state.productItems.reduce((max, item) => Math.max(max, item.id), 0);
        newProduct.id = maxId + 1;
        state.productItems.unshift(newProduct);       
      },
      updateIds: (state) => {
        state.productItems.forEach((item, index) => {
          item.id = index + 1; // Reassign IDs starting from 1
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