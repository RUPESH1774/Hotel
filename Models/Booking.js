const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Number: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Checkin: {
        type: Date,
        required: true
    },
    Checkout: {
        type: Date,
        required: true
    },
    Rooms: {
        type: String,
        required: true
    },
    AC: {
        type: String,
        default: ''
    },
    PC: {
        type: String,
        default: ''
    },
    PP: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
