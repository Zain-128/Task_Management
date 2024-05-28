import TaskModel from "../models/Task.model.js";

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find({});

    return res
      .status(200)
      .json({ success: true, message: "Task Retreived !", data: tasks });
  } catch (error) {
    return next(error);
  }
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
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the Object and Update it
    const task = await TaskModel.findByIdAndUpdate(id, req.body);

    if (!task) {
      return next({
        status: 404,
        message: "No Task Found !",
      });
    }
    // Return the Response

    return res.status(200).json({
      success: true,
      message: "Task Updated Successfully ! ",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the Object and Update it
    const task = await TaskModel.findByIdAndDelete(id);

    if (!task) {
      return next({
        status: 404,
        message: "No Task Found !",
      });
    }

    // Return the Response

    return res.status(200).json({
      success: true,
      message: "Task Deleted Successfully ! ",
    });
  } catch (error) {
    return next(error);
  }
};

export { getAllTasks, addTask, deleteTask, updateTask };
