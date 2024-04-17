const express = require("express");
const router = express.Router();
const taskController = require("../controller/tasks.controller");

router.post(
  "/boards/:boardId/columns/:columnId/tasks",
  authMiddleware,
  taskController.createTask
);
router.put(
  "/boards/:boardId/columns/:columnId/tasks/:taskId",
  authMiddleware,
  taskController.updateTask
);
router.delete(
  "/boards/:boardId/columns/:columnId/tasks/:taskId",
  authMiddleware,
  taskController.deleteTask
);
