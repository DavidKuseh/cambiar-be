import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        index: true,
        unique: true
    },

    email: {
        type: String,
        required: [true, 'Please enter your email'],
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('User', userSchema);