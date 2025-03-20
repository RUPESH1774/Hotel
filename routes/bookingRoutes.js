const express = require('express');
const router = express.Router();
const Booking = require('../Models/Booking');

// POST route to create a booking
router.post('/customer', async (req, res) => {
    try {
        const {
            Name,
            Email,
            Number,
            City,
            State,
            Checkin,
            Checkout,
            Rooms,
            AC,
            PC,
            PP
        } = req.body;

        // Validation checks
        if (!Name || !Email || !Number || !City || !State || !Checkin || !Checkout || !Rooms) {
            return res.status(400).json({ error: 'Please fill in all required fields.' });
        }

        // Determine which verification was provided
        let Verification = '';
        let VerificationType = '';

        if (AC) {
            Verification = AC;
            VerificationType = 'Aadhar Card';
        } else if (PC) {
            Verification = PC;
            VerificationType = 'PAN Card';
        } else if (PP) {
            Verification = PP;
            VerificationType = 'Passport';
        } else {
            return res.status(400).json({ error: 'Verification document required.' });
        }

        const newBooking = new Booking({
            Name,
            Email,
            Number,
            City,
            State,
            Checkin,
            Checkout,
            Rooms,
            Verification,
            VerificationType
        });

        await newBooking.save();

        res.status(201).json({
            message: 'Booking successful!',
            booking: newBooking
        });

    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
