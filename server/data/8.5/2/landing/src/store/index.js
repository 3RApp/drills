import { configureStore } from "@reduxjs/toolkit";
import visitorReducer from "./visitorSlice";

const store = configureStore({
  reducer: {
    visitor: visitorReducer,
  },
});

export default store;