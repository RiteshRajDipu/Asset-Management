import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/UsersSlice";
import productReducer from "./slices/ProductSlice";
import userReducer from "./slices/userSlice";


const store = configureStore({
   reducer: {
    users: usersReducer,
    products: productReducer,
    user: userReducer
   }
});

export default store;

