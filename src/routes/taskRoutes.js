const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });

  res.status(201).json(task);
});

// GET ONLY LOGGED-IN USER TASKS
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

module.exports = router;
