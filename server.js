const express = require('express');
const {dbConnection} =require('./dbConfig');
const {userRoute} = require('./routes/userRoute');
const {theaterRoute} = require('./routes/theaterRoute');
const {eventRoute} = require('./routes/eventRoute');
const {bookingRoute} = require('./routes/bookingRoute');
const app = express();

dbConnection(); // here we connect database 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//here we use route
app.use('/user',userRoute)
app.use('/theater',theaterRoute);
app.use('/event',eventRoute);
app.use('/booking',bookingRoute)

const port = 3000


app.listen(port, ()=>{
    console.log(`server is up ${port}`)
})