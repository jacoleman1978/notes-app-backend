// Dependencies
import app from './server.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

async function main() {
    dotenv.config();
  
    // Set PORT from .env or 4343 if not assigned
    const PORT = process.env.PORT || 4343;

    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("Successfully connected to MongoDB")
        })

        // Add a port listener to the app
        app.listen(PORT, () => {
            console.log(`Nomming on port: ${PORT}`)
        })

    } catch(error) {
        console.error(error);
    }
}

// Run the main function and catch any errors that were generated
main().catch(err => console.log(err));