import store from "../store";

const state = store.getState();
const teams = state.central.teams;

export const getTeamNameFromTeamId = (queryTeamId: number): string =>
  teams.find((team) => team.teamID === queryTeamId)?.teamName || "TBD";
