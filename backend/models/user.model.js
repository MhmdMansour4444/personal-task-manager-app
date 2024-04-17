const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
