import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.VITE_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

  const userSchema = new mongoose.Schema({
    email: String,
    mobile: String,
    location: String
});

const User = mongoose.model('User', userSchema);

app.post('/registeration', async (req, res) => {
    try {
        const { email, mobile, location } = req.body;

        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ email, mobile, location });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.VITE_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
