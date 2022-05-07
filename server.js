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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // handle OPTIONS method
    if ('OPTIONS' == req.method) {
        return res.sendStatus(200);
    } else {
        next();
    }
});
app.use(cookieSession({
    name: 'session',
    sameSite: 'strict',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors({
    origin: `https://notesapp-milestone3.netlify.app/`,
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