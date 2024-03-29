const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    haunted: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema)