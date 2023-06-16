const userModel = require('../modal/userModal');
const {createHash,validatePass,createToken} = require('../utils/comman');
const {authToken} = require('../middleware/authnticate');
const dynamicModal = require('../modal/dynamicModal');
const roomModal = require('../modal/roomModal');




const signUp = async (req, res) => {
    try {
        let {email,name,phone} = req.body;
        const address =JSON.parse( req.body.address);
            
        let password = await createHash(req.body.password)
        console.log(password);
        
        let signUp = userModel.userModel({ name,email,address,phone,password });
        let result = await signUp.save();
        console.log(result);

        return res
          .status(200)
          .json({ message: "signUp sucessfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}




const login = async (req, res) => {
try {
        let {email,password} = req.body;
        let userData = await userModel.userModel.findOne({email:email});
        if(userData){
            let validatePassword = await validatePass({password :password,hash :userData.password});
            if(validatePassword){
                let token  = await createToken(userData);
                await userModel.userModel.findOneAndUpdate({_id:userData._id },{$set : {accessToken : token}})
                console.log(token);

                return res
                .status(200)
                .json({ message: "Login sucessfully",accessToken : token, data: userData });
      

            }else{
               return res
            .status(200)
            .json({ message: "use found"});

            }

        }else{
           return res
            .status(200)
            .json({ message: "user not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}




const getUser = async (req, res) => {
    try {
       // console.log(req);
            let {email} = req.user;
            let userData = await userModel.userModel.findOne({email :email});
            if(userData){
    
                    return res
                    .status(200)
                    .json({ message: "User fetched  sucessfully", data: userData });
          
    
                }else{
                   return res
                .status(200)
                .json({ message: "user found"});
    
                }
    
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "something went wrong",
                error: error,
              });
          
        }
        
    }


const dynamicUserCollection = async (params) => {
    var date = new Date();
var current_hour = date.getSeconds();
console.log(current_hour);

        try {
            let password = await createHash(params.password)
            params.password = password
            console.log(params);
            var userAdress = require('../modal/dynamicModal')(current_hour);
const data = await userAdress(params);
data.save();
           
    return data
             
        } catch (error) {
            console.log(error);
            return error;
          
        }
        
    }


    const addRoom = async (req, res) => {
        try {
                let room = JSON.parse( req.body.room);
               
        let data = roomModal.roomModal({room });
        let result = await data.save();
        console.log(result);

        return res
          .status(200)
          .json({ message: "Room saved sucessfully", data: result });
                
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    message: "something went wrong",
                    error: error,
                  });
              
            }
            
        }
        
        const editRoom = async (req, res) => {
            //.update({"parameters":{"$elemMatch": {"pid": pid}}},{"$set": {"parameters.$.name":req.body.name, "parameters.$.description": req.body.description,"parameters.$.oName": req.body.oName,"parameters.$.type": req.body.type} }
            try {
                    let {roomId, userId, userName} = req.body;
                   
             let data = await roomModal.roomModal.findOne( {
                "room": { 
                    "$elemMatch": {
                        "roomId": roomId,
                        "users": {
                            "$elemMatch": {
                                "userId": userId,
                              
                            }
                        }
                    }
                },
            })
            data.room[0].users.map((item ) =>{
                if (item.userId == userId) {
                    item.userName  = userName;

                    
                }
            })
            data.save();
         
          
    
            return res
              .status(200)
              .json({ message: "Room saved sucessfully", data: data });
                    
                } catch (error) {
                    console.log(error);
                    return res.status(400).json({
                        message: "something went wrong",
                        error: error,
                      });
                  
                }
                
            }
            


    
module.exports = {
    signUp,
    login,
    getUser,
    dynamicUserCollection,
    addRoom,
    editRoom
}




    

    

//hr@abhiwan.com