const express = require('express');
const {
  logger,
  validateUserId,
  validateUser,
  validatePost,
} = require('./middleware/middleware');

const usersRouter = require('./users/users-router')

const server = express();

server.use(express.json()) 

server.use(logger); 

server.use('/api/users', usersRouter); 

server.use('/:id', validateUserId)

// this can be the catch-all
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
