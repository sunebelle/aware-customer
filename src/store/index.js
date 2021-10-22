import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import uiReducer from "./ui";
import authReducer from "./auth";
import productReducer from "./product";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    auth: authReducer,
    product: productReducer,
  },
});
export default store;
