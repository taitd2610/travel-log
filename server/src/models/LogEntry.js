/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable quotes */
const mongoose = require("mongoose");

const { Schema } = mongoose;

// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating- scale of 1 - 10
// * Image - Text - URL
// * Start Date - DateTime
// * End Date - DateTime
// * Latitude - Number
// * Longitude - Number
// * Created At - DateTime
// * Updated At - DateTime
const requiredString = {
  type: String,
  required: true,
};
const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  comments: String,
  rating: {
      type: Number,
      min: [0, "Two few eggs"],
      max: [10, ""]
  } 
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
