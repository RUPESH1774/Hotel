const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Number: {
        type: Number
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Checkin: {
        type: Date
    },
    Checkout: {
        type: Date
    },
    AC: {  
        type: String
    },
    PC: {  
        type: String
    },
    PP: {  
        type: String
    }
});
module.exports = mongoose.model('users', userSchema); 
