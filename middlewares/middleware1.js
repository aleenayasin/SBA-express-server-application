// middleware1.js

const middleware1 = (req, res, next) => {
  // Random logic example: Check if the request contains a specific header
  if (req.headers.authorization) {
    console.log('Authorization header found');
  } else {
    console.log('No Authorization header found');
  }
  next();
};

module.exports = middleware1;
