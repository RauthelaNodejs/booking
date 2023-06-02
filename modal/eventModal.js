const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    theterId:
        { type: mongoose.Schema.Types.ObjectId, ref: 'theater' },

    startDate: {
            type: Date,
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
let eventModel = mongoose.model('event', eventSchema)
module.exports = {
    eventModel
}
