import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: true,
  isLoggedIn: true,
  isForgotPassword: true,
};

const uiSlice = createSlice({
  name: " show modal",
  initialState,
  reducers: {
    showRegisteredModal(state) {
      state.isRegistered = true;
    },
    hideRegisteredModal(state) {
      state.isRegistered = false;
    },
    showLoggedInModal(state) {
      state.isLoggedIn = true;
    },
    hideLoggedInModal(state) {
      state.isLoggedIn = false;
    },
    showForgotPasswordModal(state) {
      state.isForgotPassword = false;
    },
    hideForgotPasswordModal(state) {
      state.isForgotPassword = false;
    },

    // showNotification(state, action) {
    //   state.notification = {
    //     status: action.payload.status,
    //     title: action.payload.title,
    //     message: action.payload.message,
    //   };
    // },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
