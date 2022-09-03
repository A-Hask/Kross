const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  gamename: [
    {
      type: String,
      trim: true,
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Game = model("Game", gameSchema);

module.exports = Game;
