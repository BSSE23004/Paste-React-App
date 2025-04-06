import { configureStore } from "@reduxjs/toolkit";
import { pasteSlice } from "./redux/pasteSlice";
export const store = configureStore({
  reducer: {
    paste: pasteSlice.reducer,
  },
});
