import express from "express";
import TaskRouter from "./routes/Task.routes.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Mini Routers

app.use("/api/v1/task", TaskRouter);

// Error Middleware
app.use(ErrorHandler);

export default app;
