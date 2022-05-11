const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  state: { type: String, default: "Scheduled" },
  GWID: { type: Number, required: true },
  matchID: { type: Number, required: true },
  teams: { type: [String], required: true },
  schedule: { type: Date, required: true },
  score: { type: String, required: true, default: null },
  events: {
    team1: { type: [eventsSchema], required: true, default: [] },
    team2: { type: [eventsSchema], required: true, default: [] },
  },
});

const eventsSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["GS", "PS", "PM", "OG", "YC", "RC"], // Goal, Penalty, Penalty Missed, Own Goal, Yellow Card, Red Card
  },
  assist: { type: String, required: true, default: null },
  minute: { type: Date },
});

const Match = mongoose.model("Match", matchesSchema);

module.exports = Match;
