const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("videoSchema", videoSchema);
