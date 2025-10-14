import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/pasteslice.jsx";

export const store = configureStore({
  reducer: {
    paste : pasteReducer,
  },
});
