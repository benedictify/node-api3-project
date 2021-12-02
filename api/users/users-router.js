const express = require('express');

const Users = require('./users-model')
const Posts = require('../posts/posts-model')

// The middleware functions also need to be required
const {
  // middleware funcs from middleware file here

} = require('../middleware/middleware')

const router = express.Router();

/* individual middleware function(s?), argument(s) inside use() */
router.use((req, res, next) => { // this becomes a middleware function because it's in use()...?
  // "order matters" - probably the middleware needs to be used after it is declared
  
  // call next() at the end
}) 

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

module.exports = router;
