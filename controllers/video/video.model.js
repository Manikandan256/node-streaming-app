'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    fileUrl: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

// export model user with VideoSchema
module.exports = mongoose.model("Video", VideoSchema);