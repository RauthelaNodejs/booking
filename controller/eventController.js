const eventModel = require('../modal/eventModal');


const createEvent = async (req, res) => {
    try {
        let {name,theterId,startDate} = req.body;
        
        let createEvent = eventModel.eventModel({name,theterId,startDate});
        let result = await createEvent.save();
        console.log(result);

        return res
          .status(200)
          .json({ message: "Event create sucessfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}


module.exports = {
    createEvent
}