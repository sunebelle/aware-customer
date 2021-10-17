import api from "../axios";
import { authActions } from "../store/auth";

export const updateUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.patch("/user/update-user", formData, {
      withCredentials: true,
      credentials: "include",
    });
    console.log(data);
    dispatch(authActions.auth(data));
  } catch (error) {
    console.log(error);
    // console.log("error", error.response.data.message);
    // dispatch(authActions.showError(error.response.data));
  }
};
export const updatePassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.patch("/user/update-password", formData, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(authActions.updatePassword(data));
  } catch (error) {
    // console.log("error", error.response.data.message);
    dispatch(authActions.showError(error.response.data));
  }
};
