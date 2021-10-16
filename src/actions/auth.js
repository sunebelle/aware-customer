import api from "../axios";
import { authActions } from "../store/auth";

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/user/register", formData, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch(authActions.auth(data));
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/user/login", formData, {
      withCredentials: true,
      credentials: "include",
    });
    // console.log(data);
    dispatch(authActions.auth(data));
  } catch (error) {
    console.log(error);
  }
};
export const logout = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/user/logout", {
      withCredentials: true,
      credentials: "include",
    });
    // console.log(data);
    dispatch(authActions.auth(data));
  } catch (error) {
    console.log(error);
  }
};
