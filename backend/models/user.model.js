const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
});

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  tasks: [taskSchema],
});

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  columns: [columnSchema],
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
  boards: [boardSchema],
});

module.exports = mongoose.model("User", userSchema);
