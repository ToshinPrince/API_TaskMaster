const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("Get All tasks");
};

const createTask = async (req, res) => {
  // res.send("Create Task");
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getTask = (req, res) => {
  // res.send("Get Task");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
