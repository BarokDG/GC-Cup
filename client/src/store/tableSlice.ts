import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

import { teams, Team } from "../utils/data-placeholder/team.data";

type TableState = {
  conference: number;
  teamData: Team[];
};

const initialState: TableState = {
  conference: 1,
  teamData: teams,
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
export const teamDataState = (state: RootState) => state.table.teamData;

export default tableSlice.reducer;
