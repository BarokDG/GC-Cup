import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

import { teams, Team } from "../utils/data/team.data";
import { players, Player } from "../utils/data/players.data";
import { matches, Match } from "../utils/data/matches.data";

type CentralStoreState = {
  conference: number;
  teamData: Team[];
  players: Player[];
  matches: Match[];
};

const initialState: CentralStoreState = {
  conference: 3,
  teamData: teams,
  players,
  matches,
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

export const centralStoreActions = CentralStoreSlice.actions;

export const conferenceState = (state: RootState) => state.central.conference;
export const teamsDataState = (state: RootState) => state.central.teamData;
export const playersDataState = (state: RootState) => state.central.players;
export const matchesDataState = (state: RootState) => state.central.matches;

export default CentralStoreSlice.reducer;
