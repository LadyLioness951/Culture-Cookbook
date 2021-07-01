const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const loveSchema = new Schema(
  {
    recipe: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Love", loveSchema);