const express = require('express');
const userRoute = express.Router();
const userController = require('../controller/userController')
const {authToken} = require('../middleware/authnticate')


userRoute.post("/signUp",userController.signUp);
userRoute.post("/login",userController.login);
userRoute.get("/getUser",[authToken],userController.getUser);
userRoute.post("/addRoom",userController.addRoom);
userRoute.put("/editRoom",userController.editRoom);








module.exports = {
    userRoute
}