const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
<<<<<<< HEAD
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
=======
  gamename: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
>>>>>>> 5ab6d0980691350f3e497ea44bb69b9ba793d948
});

const Game = model("Game", gameSchema);

module.exports = Game;
