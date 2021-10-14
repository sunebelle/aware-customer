import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import uiReducer from "./ui";
import authReducer from "./auth";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    auth: authReducer,
  },
});
export default store;
