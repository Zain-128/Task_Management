const ErrorHandler = async (error, req, res) => {
  return res.status(error.status || 500).json({
    message: error.message || "Internal Server Error ! ",
    success: false,
    data: null,
  });
};

export default ErrorHandler;
