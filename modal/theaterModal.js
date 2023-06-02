const mongoose = require('mongoose');
const theaterSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number,
    },
    quantity: {
        type: Number,
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
let theaterModel = mongoose.model('theater', theaterSchema)
module.exports = {
    theaterModel
}
