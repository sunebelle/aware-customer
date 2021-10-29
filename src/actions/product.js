import api from "../axios";
import { productActions } from "../store/product";
import { uiActions } from "../store/ui";

export const getAllSubCategories = (categoryId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get(`categories/${categoryId}`);
    dispatch(productActions.getSubCategories(data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get("/categories");
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
  (categoryId, category, size, color, brand, price, available, page, sort) =>
  async (dispatch) => {
    const url = `/categories/${categoryId}/products?${
      category && `category=${category._id}&`
    }${brand && `brand=${brand}&`}${size && `size=${size}&`}${
      color && `color=${color}&`
    }${price && `price=${price[0]}-${price[1]}&`}${
      available && `available=${available}&`
    }${page && `page=${page}&`}${sort && `sort=${sort}`} `;
    console.log(url);

    try {
      dispatch(uiActions.showLoader());
      const {
        data: { data },
      } = await api.get(url);
      dispatch(productActions.getProducts(data));
      dispatch(uiActions.hideLoader());
    } catch (error) {
      console.log(error);
    }
  };
