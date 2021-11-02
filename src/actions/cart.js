import api from "../axios";
import { cartActions } from "../store/cart";
import { uiActions } from "../store/ui";

export const checkoutProduct =
  (products, totalAmount, discount, shippingFree) => async (dispatch) => {
    try {
      await api.post(
        "/cart/checkout",
        { products, totalAmount, discount, shippingFree },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Successfully checkout. Please check your email!",
        })
      );
      dispatch(cartActions.checkout());
    } catch (error) {
      console.log(error);
    }
  };
