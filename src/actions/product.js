import api from "../axios";
import { productActions } from "../store/product";
import { uiActions } from "../store/ui";

export const getAllPatterns = () => async (dispatch) => {
  try {
    const { data } = await api.get("/products/ladies/patterns");
    dispatch(productActions.getPatterns(data));
  } catch (error) {
    console.log(error);
    // dispatch(
    //   uiActions.showNotification({
    //     status: "error",
    //     message: error?.response?.data?.message,
    //   })
    // );
  }
};
export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await api.get("/products/ladies/dresses/categories");
    dispatch(productActions.getCategories(data));
  } catch (error) {
    console.log(error);
    // dispatch(
    //   uiActions.showNotification({
    //     status: "error",
    //     message: error?.response?.data?.message,
    //   })
    // );
  }
};
export const getAllProducts =
  (category, size, color, brand, price, available, page, sort) =>
  async (dispatch) => {
    const url = `/products?for=Ladies&type=Dresses${
      category && `&category=${category}`
    }${brand && `&brand=${brand}`}${size && `&size=${size}`}${
      color && `&color=${color}`
    }${price && `&price=${price[0]}-${price[1]}`}${
      available && `&available=${available}`
    }${page && `&page=${page}`}${sort && `&sort=${sort}`} `;

    try {
      dispatch(uiActions.showLoader());

      const { data } = await api.get(url);
      dispatch(productActions.getProducts(data));
      dispatch(uiActions.hideLoader());
    } catch (error) {
      console.log(error);
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     message: error?.response?.data?.message,
      //   })
      // );
    }
  };
