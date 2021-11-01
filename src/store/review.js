import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: " reviews",
  initialState,
  reducers: {
    createReview(state, action) {
      state.reviews.unshift(action.payload);
    },
    getReviews(state, action) {
      state.reviews = action.payload;
    },
    deleteReview(state, action) {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
    updateReview(state, action) {
      state.reviews = state.reviews.map((review) =>
        review._id === action.payload._id ? action.payload : review
      );
    },
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice.reducer;
