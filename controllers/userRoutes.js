// Dependencies
const express = require('express');
const UserController = require('./userControllers.js');

// Express Router
const userRouter = express.Router();

// Route to retrieve user info
userRouter.route('/login').get(UserController.GetUser);

// Route to create new user
userRouter.route('/signup').post(UserController.CreateUser);

module.exports = userRouter;