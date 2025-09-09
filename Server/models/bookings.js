const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({

    firstname : {
        type: String ,
        ref: "firstname", 
        required: true
    },

    lastname : {
        type: String ,
        ref: "lastname", 
        required: true
    },

    siteid : {
        type: Number ,
        required: true
    },

    checkInDate : {
        type: Date,
        required: true
    },

    checkOutDate : {
        type: Date,
        required: true
    },

    totalPrice : {
        type: Number , 
        required: true
    },
    guests : {
        type: Number , 
        required: true
    },
    paymentMethod : {
        type: String , 
        required: true
    },
    status : {
        type: String , 
        enum: ["Pending","confirmed","cancelled"],
        default:"pending",
    },
    paymentMethod : {
        type: String , 
        required: true,
        default:"Pay in Person",
    },
    isPaid : {type: Boolean, default: false}
    

} , {
    timestamps : true,



})

const bookingModel = mongoose.model('Booking' , bookingSchema)
module.exports = bookingModel

