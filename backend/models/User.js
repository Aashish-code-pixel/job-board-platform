const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['applicant', 'employer'] }
});

module.exports = mongoose.model('User', UserSchema);
