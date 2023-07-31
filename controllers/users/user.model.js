'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    status: {
        type: Boolean,
        default: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.index({ 'username': 1, 'email': 1, 'phone': 1 }, { unique: true });
// export model user with UserSchema
module.exports = mongoose.model("User", UserSchema);