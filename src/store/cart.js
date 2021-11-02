import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // items: [],
  items: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: " cart_slice",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existItemIndex = state.items.findIndex(
        (item) =>
          item._id === newItem._id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );
      if (existItemIndex !== -1) {
        const existItem = state.items[existItemIndex];
        existItem.amount += newItem.amount;
        // localStorage.setItem("cart", JSON.stringify({ ...action?.payload }));
      } else {
        state.items.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    remove(state, action) {
      const removeItem = action.payload;
      const itemIndexFound = state.items.findIndex(
        (item) =>
          item._id === removeItem._id &&
          item.color === removeItem.color &&
          item.size === removeItem.size
      );
      const itemFound = state.items[itemIndexFound];
      if (itemFound.amount === removeItem.amount) {
        state.items.splice(itemIndexFound, 1);
      } else {
        itemFound.amount -= removeItem.amount;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    checkout(state) {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
