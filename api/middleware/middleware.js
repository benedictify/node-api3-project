const User = require('../users/users-model')

function logger(req, res, next) {
  // request method, url, timestamp
  console.log(`${req.method} request to "${req.url}" at ${new Date().toISOString()}`);
  next();
}

function validateUserId(req, res, next) {
  const user = User.getById(req.params.id)
  if (user) {
    req.user = user;
    next();
  } else {
    next({ status: 404, message: "user not found" })
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
