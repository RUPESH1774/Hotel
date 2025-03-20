const mongoose = require('mongoose');

const rBookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    dateTime: { type: Date, required: true },
    advancePaymentConfirmed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('RBooking', rBookingSchema);
