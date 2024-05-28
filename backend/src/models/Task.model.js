import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is Required ! "] },
    description: {
      type: String,
      required: [true, "Description is Required ! "],
    },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const model = mongoose.model("Task", TaskSchema);

export default model;
