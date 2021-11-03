import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subCategories: [],
  categories: [],
  products: [],
  product: "",
  similarBrandProducts: [],
  // productsBySearch: [],
  similarProducts: [],
};

const productSlice = createSlice({
  name: " products",
  initialState,
  reducers: {
    getSubCategories(state, action) {
      state.subCategories = action.payload;
    },
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getProducts(state, action) {
      state.products = action.payload;
    },
    getProduct(state, action) {
      state.product = action.payload;
    },
    getBrandProducts(state, action) {
      state.similarBrandProducts = action.payload;
    },
    getSimilarProducts(state, action) {
      state.similarProducts = action.payload;
    },
    // getProductsBySearch(state, action) {
    //   state.productsBySearch = action.payload;
    // },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
