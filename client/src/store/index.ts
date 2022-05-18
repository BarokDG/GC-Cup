import { configureStore } from "@reduxjs/toolkit";

import centralSliceReducer from "./centralStoreSlice";

const store = configureStore({
  reducer: {
    central: centralSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
