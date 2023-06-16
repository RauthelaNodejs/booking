var mongoose  =  require('mongoose');
var Schema  =  mongoose.Schema;

// our schema 

function dynamicSchema(prefix){
    var addressSchema = new Schema({
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
    

    });
    return mongoose.model(    "user"+prefix, addressSchema);
}

//no we export dynamicSchema function
module.exports = dynamicSchema;
