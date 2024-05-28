import express from "express";
import TaskRouter from "./routes/Task.routes.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";

const app = express();

// Mini Routers
app.use("/api/v1/", TaskRouter);

// Error Middleware
app.use(ErrorHandler);

export default app;
