const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  state: { type: String, default: "Scheduled" },
  GWID: { type: Number, required: true },
  matchID: { type: Number, required: true },
  teams: { type: [String], required: true },
  schedule: { type: Date, required: true },
  score: { type: String, required: true, default: null },
  scorers: {
    team1: { type: [goalsSchema], required: true, default: [] },
    team2: { type: [goalsSchema], required: true, default: [] },
  },
});

const goalsSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  assist: { type: String, required: true, default: null },
});

const Match = mongoose.model("Match", matchesSchema);

module.exports = Match;
