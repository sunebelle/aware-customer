import { createSlice } from "@reduxjs/toolkit";

const authInitial = {
  isAuthenticated: false,
  userData: null,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitial,
  reducers: {
    auth(state, action) {
      state.isAuthenticated = true;
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.userData = action.payload;
    },
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.clear();
      state.userData = null;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
