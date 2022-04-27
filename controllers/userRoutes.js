// Dependencies
import express from 'express';
import UserController from './userControllers.js';

// Express Router
const userRouter = express.Router();

// Route to retrieve user info
userRouter.route('/').get(UserController.GetUser);

// Route to create new user
userRouter.route('/new').post(UserController.CreateUser);

export default userRouter;