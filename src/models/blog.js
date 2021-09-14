import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title'],
        trim: true,
        maxlength: [50, 'A post title must not exceed 50 characters'],
        index: true
    },

    text: {
        type: String,
        trim: true,
        required: true,
        index: true
    },

    slug: {
        type: String,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },

    changedAt: {
        type: Date,
        default: Date.now(),
        select: false
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A blog must belong to a user']
    },

    userId: {
        type: mongoose.Schema.ObjectId,
        reg: 'User'
    }
})

module.exports = mongoose.model('Blog', blogSchema);
