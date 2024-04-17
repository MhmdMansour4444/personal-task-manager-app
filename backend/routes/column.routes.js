const express = require("express");
const router = express.Router();
const columnController = require("../controller/column.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/boards/:boardId/columns", authMiddleware, columnController.createColumn);
router.put("/boards/:boardId/columns/:columnId", authMiddleware, columnController.updateColumn);
router.delete("/boards/:boardId/columns/:columnId", authMiddleware, columnController.deleteColumn);
