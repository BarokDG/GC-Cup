import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

import { teams, Team } from "../utils/data-placeholder/team.data";
import { players, Player } from "../utils/data-placeholder/players.data";

type CentralStoreState = {
  conference: number;
  teamData: Team[];
  allPlayers: Player[];
};

const initialState: CentralStoreState = {
  conference: 1,
  teamData: teams,
  allPlayers: players,
};

const CentralStoreSlice = createSlice({
  name: "Base",
  initialState,
  reducers: {
    setConference(state, action: PayloadAction<number>) {
      state.conference = action.payload;
    },
  },
});

export const tableActions = CentralStoreSlice.actions;

export const conferenceState = (state: RootState) => state.central.conference;
export const teamDataState = (state: RootState) => state.central.teamData;
export const playerDataState = (state: RootState) => state.central.allPlayers;

export default CentralStoreSlice.reducer;
