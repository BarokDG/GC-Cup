import { configureStore } from "@reduxjs/toolkit";

import tableSliceReducer from "./tableSlice";

const store = configureStore({
  reducer: {
    table: tableSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
