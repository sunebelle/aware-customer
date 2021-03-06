import api from "../axios";
import { authActions } from "../store/auth";
import { uiActions } from "../store/ui";

// export const register = (formData, history) => async (dispatch) => {
//   try {
//     const { data } = await api.post("/user/register", formData, {
//       withCredentials: true,
//       credentials: "include",
//     });
//     dispatch(authActions.auth(data));
//     history.push("/");
//   } catch (error) {
//     // setError(error?.response?.data?.message);
//     dispatch(authActions.showError(error.response.data));

//   }
// };
// export const login = (formData) => async (dispatch) => {
//   try {
//     const { data } = await api.post("/user/login", formData, {
//       withCredentials: true,
//       credentials: "include",
//     });
//     // console.log(data);
//     dispatch(authActions.auth(data));
//   } catch (error) {
//     // console.log(error);
//     dispatch(authActions.showError(error.response.data));
//   }
// };
export const logUserOut = () => async (dispatch) => {
  try {
    const { data } = await api.get("/user/logout", {
      withCredentials: true,
      credentials: "include",
    });
    // console.log(data);
    dispatch(authActions.logOut(data));
    dispatch(
      uiActions.showNotification({
        status: "success",
        message: "Successfully logged out!",
      })
    );
  } catch (error) {
    uiActions.showNotification({
      status: "error",
      message: error?.response?.data?.message,
    });
  }
};
