// Dependencies
import express, { json } from 'express';
import cors from 'cors';
import userRouter from './controllers/userRoutes.js';
import noteRouter from './controllers/noteRoutes.js';

// Application
const app = express();

// Middleware/Config
app.use(cors());
app.use(json());

// Routes
app.use('/auth', userRouter);
app.use('/notes', noteRouter);

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.");
});

export default app;