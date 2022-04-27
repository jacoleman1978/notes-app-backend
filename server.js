// Dependencies
const express = require('express');
const cors = require('cors');
const userRouter = require('./controllers/userRoutes.js');

// Application
const app = express();

// Middleware/Config
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', userRouter);

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.");
});

module.exports = app;