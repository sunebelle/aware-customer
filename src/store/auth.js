import { createSlice } from "@reduxjs/toolkit";

const authInitial = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("profile")),
  // error: null,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitial,
  reducers: {
    auth(state, action) {
      state.isAuthenticated = true;
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.user = action.payload;
    },
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("profile");
      state.user = null;
    },
    // updateUser(state, action) {
    //   state.isAuthenticated = true;
    //   localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
    //   state.user = action.payload;
    //
    // },
    // updatePassword(state, action) {
    //   state.isAuthenticated = true;
    //   localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
    //   state.user = action.payload;
    // },
    // showError(state, action) {
    //   state.error = action.payload;
    // },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
