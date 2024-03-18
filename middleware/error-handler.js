const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(err.status).json({ msg: err.message });
  // return res.status(500).json({ msg: "Something went wrong, Try again later" });
};

module.exports = errorHandlerMiddleware;
