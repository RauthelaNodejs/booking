const bookingModal = require('../modal/bookingModal');
const eventModel = require('../modal/eventModal');


const createBooking = async (req, res) => {
    try {
        let {amount,eventId,userId,seatId} = req.body;

        const bookingNumber = Math.random().toString(36).substring(2,7);
        let seatBookAlredy = bookingModal.bookingModel.findOne({seatId :seatId })
        console.log(seatBookAlredy);
        if(seatBookAlredy){
            return res
            .status(400)
            .json({ message: "Seat booked already"});
   
        }
        let createBooking = bookingModal.bookingModel({bookingNumber,amount,eventId,userId,seatId});
        let result = await createBooking.save();
        console.log(result);

        return res
          .status(200)
          .json({ message: "Booking create sucessfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}


const cancelBooking = async (req, res) => {
    try {
        let {bookingId,eventId} = req.body;
        let eventStart = eventModel.eventModel.findOne({_id : eventId,startDate:{$gte:new Date(Date.now() + 86400)}})
let cancelBooking = bookingModal.bookingModel.findByIdAndUpdate({_id : bookingId,eventId:eventStart._id},{$set : {isCancel : 1}});
if (cancelBooking) {
    return res.status(200).json({
        message: "Booking cancel sucessfully",
        data: cancelBooking,
      });

}
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong",
            error: error,
          });
      
    }
    
}


module.exports = {
    createBooking,
    cancelBooking
}