const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    gamename: {
      type: String,
      required: true,
      trim: true,
    },
    users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
  }
);

const Game = model("Game", gameSchema);

module.exports = Game;