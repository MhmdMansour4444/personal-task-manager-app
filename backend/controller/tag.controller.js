const User = require("../models/user.model");

export const addTagToTask = async (req, res) => {
  try {
    const { boardId, columnId, taskId } = req.params;
    const { tag } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const board = user.boards.id(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found." });
    }

    const column = board.columns.id(columnId);
    if (!column) {
      return res.status(404).json({ error: "Column not found." });
    }

    const task = column.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }

    task.tags.push(tag);
    await user.save();

    res.status(201).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

export const removeTagFromTask = async (req, res) => {
  try {
    const { boardId, columnId, taskId, tagId } = req.params;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const board = user.boards.id(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found." });
    }

    const column = board.columns.id(columnId);
    if (!column) {
      return res.status(404).json({ error: "Column not found." });
    }

    const task = column.tasks.id(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }

    const tagIndex = task.tags.findIndex((tag) => tag._id.toString() === tagId);
    if (tagIndex === -1) {
      return res.status(404).json({ error: "Tag not found." });
    }

    task.tags.splice(tagIndex, 1);
    await user.save();

    res.json({ message: "Tag removed successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
