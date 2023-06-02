const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    mongoose.set({debug : true})
    mongoose.connection.once('open', function () {
        console.log('Database connected Successfully');
    }).on('error', function (err) {
        console.log('Error', err);
    })
}


module.exports = {
    dbConnection
}
