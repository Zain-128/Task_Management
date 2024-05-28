import express from "express";
import {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
} from "../controllers/Task.controller.js";
const router = express.Router();

router.route("/").get(getAllTasks).post(addTask);

router.route("/:id").patch(updateTask).delete(deleteTask);

export default router;
