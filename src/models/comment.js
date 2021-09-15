import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: 'Blog',
        required: [true, 'Comment must belong to a post']
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Comment must belong to a user']
    },

    text: {
        type: String,
        trim: true,
        required: [true, 'Comment cannot be empty'],
        index: true
    },

    postedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Comment', commentSchema);