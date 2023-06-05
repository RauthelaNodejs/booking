const {verifyToken} = require('../utils/comman');
const { model } = require('mongoose');
async function authToken(req,res,next) {
    let obj = {
        token : req.headers.accesstoken
    }
    let vrifyData = await verifyToken(obj);
    console.log(vrifyData,"pppp");
     if(vrifyData){
req.user = vrifyData
     }
     else{
        return res
        .status(200)
        .json({ message: "please login first"});
     }
next ()
     }



     module.exports = {
        authToken
     }