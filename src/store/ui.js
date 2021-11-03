import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  isLoggedIn: false,
  isForgotPassword: false,
  notification: null,
  isLoading: false,
  isAppLoading: false,
};

const uiSlice = createSlice({
  name: " show modal",
  initialState,
  reducers: {
    showRegisteredModal(state) {
      state.isRegistered = true;
      state.isLoggedIn = false;
      state.isForgotPassword = false;
    },
    hideRegisteredModal(state) {
      state.isRegistered = false;
    },
    showLoggedInModal(state) {
      state.isLoggedIn = true;
      state.isRegistered = false;
      state.isForgotPassword = false;
    },
    hideLoggedInModal(state) {
      state.isLoggedIn = false;
    },
    showForgotPasswordModal(state) {
      state.isForgotPassword = true;
      state.isRegistered = false;
      state.isLoggedIn = false;
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
    showAppLoader(state) {
      state.isAppLoading = true;
    },
    hideAppLoader(state) {
      state.isAppLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
