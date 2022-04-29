// Dependencies
import { Router } from 'express';
import UserController from './userControllers.js';

// Express Router
const userRouter = Router();

// Route to retrieve user info
userRouter.route('/login').post(UserController.Login);

// Route to create new user
userRouter.route('/signup').post(UserController.Signup);

export default userRouter;