import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalAmount: 0, // reducer
};
//newItem = {id, title, price, description}   added: quantity, totalPrice
const cartSlice = createSlice({
  name: " cart_slice",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existItemIndex = state.items.findIndex(
        (item) => item.id === newItem._id
      );
      if (existItemIndex !== -1) {
        const existItem = state.items[existItemIndex];
        existItem.amount += newItem.amount;
      } else {
        state.items.push(newItem);
      }
      // state.totalAmount = state.totalAmount + newItem.price*newItem.amount
    },
    remove(state, action) {
      const itemId = action.payload;
      // const updatedAmount =
      //   state.totalAmount - action.item.price * action.item.amount;

      const itemIndexFound = state.items.findIndex(
        (item) => item.id === itemId
      );
      const itemFound = state.basket[itemIndexFound];
      if (itemFound.amount === action.item.amount) {
        state.items = state.items.filter(
          (item) => item.id !== itemId
        );
        // updatedItems = [...filtedItems];
      } else {
        itemFound.amount -= action.item.amount;
        // updatedItems = [...state.basket];
      }
      // return {
      //   basket: updatedItems,
      //   totalAmount: updatedAmount,
      // };
    },
    checkout(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
