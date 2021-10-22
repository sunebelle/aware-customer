import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: true,
  isLoggedIn: true,
  isForgotPassword: true,
  notification: null,
  isLoading: false,
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
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
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
