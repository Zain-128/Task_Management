import TaskModel from "../models/Task.model.js";

const getAllTasks = async () => {
  try {
  } catch (error) {}
};
const addTask = async (req, res, next) => {
  try {
    // Check if both title and description are present
    if (Object.keys(req.body).some((ele) => !ele)) {
      return next({
        status: 400,
        message: `Please fill all the Feilds !`,
      });
    }

    console.log(req, req.body, req.body?.title, req.body?.description);

    // Saving the Data into Db

    const task = await TaskModel.create({
      title: req.body?.title,
      description: req.body?.description,
    });

    // Returning the response

    return res.status(201).json({
      success: true,
      message: "Task is Created ! ",
    });
  } catch (error) {
    return next(error);
  }
};
const updateTask = async () => {
  try {
  } catch (error) {}
};
const deleteTask = async () => {
  try {
  } catch (error) {}
};

const getTaskById = async () => {
  try {
  } catch (error) {}
};

export { getAllTasks, getTaskById, addTask, deleteTask, updateTask };
