import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { RootState, rootReducer } from "./rootReducer";

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer as RootState,
    devTools: process.env.NODE_ENV === "development",
  });
  return store;
};

const storeDispatch = makeStore().dispatch;
export type AppDispatch = typeof storeDispatch;

const wrapper = createWrapper(makeStore);
export default wrapper;
