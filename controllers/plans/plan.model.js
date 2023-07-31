'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    plan_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
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

// export model user with PlanSchema
module.exports = mongoose.model("Plan", PlanSchema);