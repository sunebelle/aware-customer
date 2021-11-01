import api from "../axios";
import { reviewActions } from "../store/review";

export const createAReview = (review, productId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.post(`/products/${productId}/reviews`, review, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(reviewActions.createReview(data));
    console.log("createReview", data);
  } catch (error) {
    console.log(error);
  }
};
export const getAllReviews = (productId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get(`/products/${productId}/reviews`);
    dispatch(reviewActions.getReviews(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAReview = (reviewId) => async (dispatch) => {
  try {
    await api.delete(`/reviews/${reviewId}`, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(reviewActions.deleteReview(reviewId));
  } catch (error) {
    console.log(error);
  }
};
export const updateAReview = (review, reviewId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.patch(`/reviews/${reviewId}`, review, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(reviewActions.deleteReview(reviewId));
  } catch (error) {
    console.log(error);
  }
};
