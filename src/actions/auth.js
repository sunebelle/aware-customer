import api from "../axios";
import { authActions } from "../store/auth";

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/api/aware/v1/users/register", formData, {
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
    const { data } = await api.post("/api/aware/v1/users/login", formData, {
      withCredentials: true,
      credentials: "include",
    });
    // console.log(data);
    dispatch(authActions.auth(data));
  } catch (error) {
    console.log(error);
  }
};
