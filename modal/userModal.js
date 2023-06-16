const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        houseNumber: {
            type: String
        },
       
    }
,
    phone: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
    isDel: {
        type: Boolean,
        default: false
    },

})
let userModel = mongoose.model('user', userSchema)
module.exports = {
    userModel
}






