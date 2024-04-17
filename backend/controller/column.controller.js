const User = require("../models/user.model");
export const createColumn = async (req, res) => {
  try {
    const { userId, boardId } = req.params;
    const { title } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const board = user.boards.id(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }

    const newColumn = {
      title,
      tasks: [],
    };

    board.columns.push(newColumn);

    await user.save();

    res
      .status(201)
      .json({ message: "Column created successfully", column: newColumn });
  } catch (error) {
    console.error("Error creating column:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateColumn = async (req, res) => {
  try {
    const { userId, boardId, columnId } = req.params;
    const { title } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const board = user.boards.id(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }

    const columnIndex = board.columns.findIndex(
      (col) => col._id.toString() === columnId
    );
    if (columnIndex === -1) {
      return res.status(404).json({ error: "Column not found" });
    }

    board.columns[columnIndex].title = title;

    await user.save();

    res.status(200).json({
      message: "Column updated successfully",
      column: board.columns[columnIndex],
    });
  } catch (error) {
    console.error("Error updating column:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteColumn = async (req, res) => {
  try {
    const { userId, boardId, columnId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const board = user.boards.id(boardId);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }

    const columnIndex = board.columns.findIndex(
      (col) => col._id.toString() === columnId
    );
    if (columnIndex === -1) {
      return res.status(404).json({ error: "Column not found" });
    }

    board.columns.splice(columnIndex, 1);

    await user.save();

    res.status(200).json({ message: "Column deleted successfully" });
  } catch (error) {
    console.error("Error deleting column:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


