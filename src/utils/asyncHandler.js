// As the purpose of UTILS is to write functions which are used multiple times and reduce repetitiveness

// This util helps to simplify the handling of asynchronous operations within Express.js.

// We don't have to write "async-await" and "try-catch" multiple times.

// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => () => {}  {The brackets are removes here}

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
/* 
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: "false",
      message: error.message,
    });
  }
};
*/
export { asyncHandler };
