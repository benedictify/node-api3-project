function logger(req, res, next) {
  // request method, url, timestamp
  console.log(`${req.method} request to "${req.url}" at ${new Date().toISOString()}`);
  
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
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
