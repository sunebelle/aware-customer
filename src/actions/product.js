import api from "../axios";
import { productActions } from "../store/product";
import { uiActions } from "../store/ui";

export const getAllSubCategories = (categoryId) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get(`/categories/${categoryId}`);
    dispatch(productActions.getSubCategories(data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch(uiActions.showLoader());

  try {
    const {
      data: { data },
    } = await api.get("/categories");
    dispatch(productActions.getCategories(data));
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
export const getAllProducts =
  (
    categoryId,
    subCategoryId,
    size,
    color,
    brand,
    price,
    available,
    page,
    sort
  ) =>
  async (dispatch) => {
    try {
      dispatch(uiActions.showLoader());
      const url = `/categories/${categoryId}/products?${
        subCategoryId && `category=${subCategoryId}&`
      }${brand && `brand=${brand}&`}${size && `size=${size}&`}${
        color && `color=${color}&`
      }${price && `price=${price[0]}-${price[1]}&`}${
        available && `available=${available}&`
      }${page && `page=${page}&`}${sort && `sort=${sort}`} `;

      // console.log("product action", url);

      const {
        data: { data },
      } = await api.get(url);
      dispatch(productActions.getProducts(data));
      dispatch(uiActions.hideLoader());
    } catch (error) {
      console.log(error);
    }
  };

export const getAProduct = (id) => async (dispatch) => {
  dispatch(uiActions.showLoader());
  try {
    const {
      data: { data },
    } = await api.get(`/products/${id}`);
    dispatch(uiActions.hideLoader());
    dispatch(productActions.getProduct(data));
  } catch (error) {
    console.log(error);
  }
};

// export const getSimilarProducts = (categoryId) => async (dispatch) => {
//   try {
//     const {
//       data: { data },
//     } = await api.get(`/categories/${categoryId}/products`);
//     dispatch(productActions.getProducts(data));
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getSimilarBrandProducts =
  (categoryId, product) => async (dispatch) => {
    try {
      const {
        data: { data },
      } = await api.get(
        `/categories/${categoryId}/products?${
          product && `brand=${product.brand}`
        }`
      );
      dispatch(productActions.getBrandProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

export const getAllProductsBySearch = (searchQuery) => async (dispatch) => {
  dispatch(uiActions.showLoader());

  try {
    const {
      data: { data },
    } = await api.get(`/products/search?searchQuery=${searchQuery}`);
    // dispatch(productActions.getProductsBySearch(data));
    dispatch(productActions.getProducts(data));
    dispatch(uiActions.hideLoader());
  } catch (error) {
    console.log(error);
  }
};
