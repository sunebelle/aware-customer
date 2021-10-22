import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patterns: [],
  categories: [],
  products: [],
};

const productSlice = createSlice({
  name: " products",
  initialState,
  reducers: {
    getPatterns(state, action) {
      state.patterns = action.payload;
    },
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
