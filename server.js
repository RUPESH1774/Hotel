const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected');
}).catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
});

// Import Models
const Booking = require('./Models/Booking');
const RBooking = require('./Models/RBooking');

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Hotel & Restaurant Booking API!');
});

// Hotel Booking Route
app.post('/Booking', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while booking a hotel room' });
    }
});

// Restaurant Table Booking Route
app.post('/RBooking', async (req, res) => {
    try {
        const newRBooking = new RBooking({
            name: req.body.Name,
            phoneNumber: req.body.Number,
            numberOfPeople: req.body.PNumber,
            dateTime: req.body.Date,
            advancePaymentConfirmed: req.body.check === 'on' ? true : false
        });

        const savedRBooking = await newRBooking.save();
        res.status(201).json(savedRBooking);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error while saving restaurant booking' });
    }
});

// Start Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
