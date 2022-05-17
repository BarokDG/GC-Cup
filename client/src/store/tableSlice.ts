import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

type TableState = {
  conference: number;
};

const initialState: TableState = {
  conference: 1,
};

const tableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    setConference(state, action: PayloadAction<number>) {
      state.conference = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;

export const conferenceState = (state: RootState) => state.table.conference;

export default tableSlice.reducer;
