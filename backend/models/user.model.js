const mongoose = require("mongoose");

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
  boards: [boardSchema],
});

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  columns: [columnSchema],
});

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  tasks: [taskSchema],
});

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
