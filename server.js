import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://DevCloud:mongodb23233101@cluster0.lfk9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));

// Define the schema for the registration form
const registrationSchema = new mongoose.Schema({
    email: String,
    mobile: String,
    location: String,
});

// Create a model based on the schema
const Registration = mongoose.model('Registration', registrationSchema);

// API endpoint to handle registration data submission


// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
