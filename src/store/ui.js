import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpened: false,
  // notification: null,
};

const uiSlice = createSlice({
  name: " show modal",
  initialState,
  reducers: {
    showModal(state) {
      state.isModalOpened = true;
    },
    hideModal(state) {
      state.isModalOpened = false;
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
