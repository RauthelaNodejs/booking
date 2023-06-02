const express = require('express');
const theaterRoute = express.Router();
const theaterController = require('../controller/theaterController')


theaterRoute.post("/addTheater",theaterController.addTheater);
// theaterRoute.post("/updateTheater",theaterController.updateTheater);
// theaterRoute.post("/removeTheater",theaterController.removeTheater);





module.exports = {
    theaterRoute
}