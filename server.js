const express = require('express');
const {dbConnection} =require('./dbConfig');
const {userRoute} = require('./routes/userRoute');

const app = express();

dbConnection(); // here we connect database 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//here we use route
app.use('/user',userRoute)

const port = 3000


app.listen(port, ()=>{
    console.log(`server is up ${port}`)
})

9258195050