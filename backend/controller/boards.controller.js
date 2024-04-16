const User = require("../models/user.model");

const createBoard = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ error: "Please provide a title for the board." });
    }

    const newBoard = {
      title,
      columns: [],
    };

    req.user.boards.push(newBoard);
    await req.user.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Board created successfully.",
        board: newBoard,
      });
  } catch (err) {
    console.error("Error creating board:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const getUserBoards = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const boards = user.boards;

    res
      .status(200)
      .json({
        success: true,
        message: "User boards retrieved successfully.",
        boards,
      });
  } catch (err) {
    console.error("Error fetching user boards:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = { createBoard, getUserBoards };
