import api from "../axios";
import { authActions } from "../store/auth";
import { uiActions } from "../store/ui";

export const updateUser = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.patch("/user/update-user", formData, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(authActions.auth(data));
    history.push("/user/account-setting");
    dispatch(
      uiActions.showNotification({
        status: "success",
        message: "Successfully update your information!",
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: "error",
        message: error?.response?.data?.message,
      })
    );
  }
};
export const updatePassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.patch("/user/update-password", formData, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(authActions.auth(data));
    // history.push("/user/account-setting");
    dispatch(
      uiActions.showNotification({
        status: "success",
        message: "Successfully update your password!",
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: "error",
        message: error?.response?.data?.message,
      })
    );
  }
};
