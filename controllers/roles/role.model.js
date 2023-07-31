'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    role_name: {
        type: String,
        required: true
    },    
    created_on: {
        type: Date,
        default: Date.now()
    }
});

// export model user with RoleSchema
module.exports = mongoose.model("Role", RoleSchema);