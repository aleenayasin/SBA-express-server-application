// middleware2.js

const middleware2 = (req, res, next) => {
  // Random logic example: Log the request method and URL
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
};

module.exports = middleware2;
