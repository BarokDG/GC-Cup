import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "Table",
  initialState: {
    conference: 1,
  },
  reducers: {
    setConference(state, action) {
      state.conference = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;

export default tableSlice;
