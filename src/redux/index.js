import { configureStore } from "@reduxjs/toolkit";
import PolicySlice from "./slices/PrivacyPolicy";
import QrTextSlice from "./slices/QrTextSlice";

const store = configureStore({
  reducer: {
    QrTextSlice: QrTextSlice.reducer,
    PolicySlice: PolicySlice.reducer,
  },
});

export default store;
