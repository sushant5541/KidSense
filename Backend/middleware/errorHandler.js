/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error('❌ Server Error:', err.message);

  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  res.status(err.status || 500).json({
    success: false,
    error:
      process.env.NODE_ENV === 'production'
        ? 'An unexpected error occurred. Please try again later.'
        : err.message,
  });
};

export default errorHandler;
