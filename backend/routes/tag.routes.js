const express = require("express");
const router = express.Router();
const tagController = require("../controller/tag.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/boards/:boardId/columns/:columnId/tasks/:taskId/tags", authMiddleware, tagController.addTagToTask);
router.delete("/boards/:boardId/columns/:columnId/tasks/:taskId/tags/:tagId", authMiddleware, tagController.removeTagFromTask);
