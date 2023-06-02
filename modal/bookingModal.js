const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    bookingNumber: {
        type: String
    },
    amount: {
        type: Number,
    },
    eventId:
        { type: mongoose.Schema.Types.ObjectId, ref: 'event' },
    userId:
        { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    seatId: { 
            type: Number, 
            min: 1,
            max:100 , 
            requred: true 
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
let bookingModel = mongoose.model('ticket', ticketSchema)
module.exports = {
    bookingModel
}



