// Dependencies
const app = require('./server.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

main = () => {
    dotenv.config();
  
    // Set PORT from .env or 4343 if not assigned
    const PORT = process.env.PORT || 4343;

    // Connect to MongoDB
    mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log(`Connected to MongoDB: ${process.env.DB_NAME}`))
        .catch(console.error)

    // Add a port listener to the app
    app.listen(PORT, () => {
        console.log(`Connected through port: ${PORT}`)
    })
}

// Run the main function and catch any errors that were generated
main();