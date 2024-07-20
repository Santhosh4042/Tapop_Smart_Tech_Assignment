const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    profilePhoto: String,
    coverPhoto: String,
});

module.exports = mongoose.model('User', UserSchema);