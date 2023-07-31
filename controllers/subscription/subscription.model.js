'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    plan_id: {
        type: Schema.Types.ObjectId,
        ref: 'Plan'
    },
    validity_on: {
        type: Date
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

// export model user with SubscriptionSchema
module.exports = mongoose.model("Subscription", SubscriptionSchema);