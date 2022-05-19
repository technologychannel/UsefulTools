import { configureStore } from "@reduxjs/toolkit";
import QrTextSlice from "./slices/QrTextSlice";

const store = configureStore({
  reducer: {
    QrTextSlice: QrTextSlice.reducer,
  },
});

export default store;
