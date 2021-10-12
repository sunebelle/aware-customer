import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
  isChanged: false,
};
//newItem = {id, title, price, description}   added: quantity, totalPrice
const cartSlice = createSlice({
  name: " cart_slice",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
      state.isChanged = true;
    },
    remove(state, action) {
      const id = action.payload;
      const removedItem = state.items.find((item) => item.id === id);
      if (removedItem.quantity > 1) {
        removedItem.quantity--;
        removedItem.totalPrice -= removedItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalQuantity--;
      state.isChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
