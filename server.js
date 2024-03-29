// Dependencies
import express, { json } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import userRouter from './controllers/userRoutes.js';
import noteRouter from './controllers/noteRoutes.js';
import { config } from 'dotenv';

// Application
const app = express();

// Middleware/Config
config();

// Set PORT from .env or 4343 if not assigned
const PORT = process.env.PORT || 4343;
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://notesapp-milestone3.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // handle OPTIONS method
    if ('OPTIONS' == req.method) {
        return res.sendStatus(200);
    } else {
        next();
    }
});
app.set('trust proxy', 1);
app.use(cookieSession({
    name: 'session',
    sameSite: 'none',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: true
}))
app.use(cors({
    origin: process.env.FRONTEND_APP_URL,
    credentials: true
}));
app.use(json());

// Routes
app.use('/auth', userRouter);
app.use('/notes', noteRouter);

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.");
});

export default app;