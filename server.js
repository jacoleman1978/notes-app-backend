// Dependencies
import express from 'express'
import cors from 'cors'
import userRouter from './controllers/userRoutes'

// Application
const app = express()

// Middleware/Config
app.use(cors())
app.use(express.json())

// Routes
app.use('/login', userRouter)

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.")
})

export default app