const User = require("../models/user.model");

export const getTasksForColumn = async (req, res) => {
  try {
    const { boardId, columnId } = req.params;
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

    const tasks = column.tasks;
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const createTaskForColumn = async (req, res) => {
  try {
    const { boardId, columnId } = req.params;
    const { title, details } = req.body;

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

    const newTask = { title, details };
    column.tasks.push(newTask);
    await user.save();

    res.status(201).json(newTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const updateTask = async (req, res) => {
  try {
    const { boardId, columnId, taskId } = req.params;
    const { title, details } = req.body;

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

    task.title = title;
    task.details = details;
    await user.save();

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { boardId, columnId, taskId } = req.params;

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

    const taskIndex = column.tasks.findIndex(
      (task) => task._id.toString() === taskId
    );
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found." });
    }

    column.tasks.splice(taskIndex, 1);
    await user.save();

    res.json({ message: "Task deleted successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
