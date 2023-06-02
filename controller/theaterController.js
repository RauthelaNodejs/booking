const theaterModel = require('../modal/theaterModal');


const addTheater = async (req, res) => {
    try {
        let {email,name,address,phone,quantity} = req.body;
        
        let addTheater = theaterModel.theaterModel({ name,email,address,phone,quantity });
        let result = await addTheater.save();
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
    console.log(req);

    try {
        let {email,name,address,phone} = req.body;
        let signUp = new userModel({ name,email,address,phone });
        let result = await signUp.save();
        console.log(result);
        return res
          .status(200)
          .json({ message: "signUp sucessfully", data: result });
    } catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}



module.exports = {
    addTheater,
    login
}


