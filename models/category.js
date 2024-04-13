const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String, required: true },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports.Category = mongoose.model("Category", CategorySchema);
