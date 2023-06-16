const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
  
    room : [
        {
        roomId : {
            type : String
        },
        users : [
            {
                userId : {
                    type : String
                },
                userName : {
                    type : String
                }
            }
        ],
    }
    ],
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
let roomModal = mongoose.model('room', roomSchema)
module.exports = {
    roomModal
}






