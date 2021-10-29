import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryLocation: null,
  subCategories: [],
  categories: [],
  products: [],
};

const productSlice = createSlice({
  name: " products",
  initialState,
  reducers: {
    getCategoryId(state, action) {
      state.categoryLocation = {
        categoryId: action.payload.categoryId,
        title: action.payload.title,
        pathname: action.payload.pathname,
      };
    },
    getSubCategories(state, action) {
      state.subCategories = action.payload;
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
