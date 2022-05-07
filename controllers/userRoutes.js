// Dependencies
import { Router } from 'express';
import UserController from './userControllers.js';

// Express Router
const userRouter = Router();
console.log("hitting user router")
// Route to retrieve user info
userRouter.route('/login').post(UserController.Login);

// Route to create new user
userRouter.route('/signup').post(UserController.Signup);

// Route to verify unique username and email
userRouter.route('/signup/verify').post(UserController.VerifySignup);

// Route for verifying session
userRouter.route('/session').get(UserController.CheckSession);

// Route for logging out
userRouter.route('/logout').get(UserController.Logout);

export default userRouter;