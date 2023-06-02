const express = require('express');
const bookingRoute = express.Router();
const bookingController = require('../controller/bookingController')


bookingRoute.post("/createBooking",bookingController.createBooking);
 bookingRoute.post("/cancelBooking",bookingController.cancelBooking);
// bookingRoute.get("/getBooking",bookingController.getBooking);





module.exports = {
    bookingRoute
}