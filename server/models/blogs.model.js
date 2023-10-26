// Blog model using mongoose - not in use
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});
module.exports = mongoose.model("Blog", BlogSchema);
