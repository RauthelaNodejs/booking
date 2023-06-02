const express = require('express');
const eventRoute = express.Router();
const eventController = require('../controller/eventController')


eventRoute.post("/createEvent",eventController.createEvent);
// eventRoute.get("/getEvents",eventController.getEvents);
// eventRoute.delete("/removeEvent",eventController.getEvents);







module.exports = {
    eventRoute
}