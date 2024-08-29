import {createSlice} from "@reduxjs/toolkit";
import { userRows } from "../../data";

const usersSlice = createSlice({
    name: 'userList',
    initialState: {
      items: userRows || [],
    },
    reducers: {
      addItem: (state, action) => {
        const newItem = action.payload;
        const maxId = state.items.reduce((max, item) => Math.max(max, item.id), 0);
        newItem.id = maxId + 1;   
        state.items.unshift(newItem);       
      },
      updateIds: (state) => {
        state.items.forEach((item, index) => {
          item.id = index + 1;
        });
      },
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
    },
  });
  
export const { addItem, removeItem, updateIds, setSearchQuery } = usersSlice.actions;
export default usersSlice.reducer;