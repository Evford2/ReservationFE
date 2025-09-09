const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({

    name : {
        type: String , 
        required: true
    },

    siteid : {
        type: Number ,
        required: true
    },

    maxcount : {
        type: Number ,
        required: true
    },

    price : {
        type: Number,
        required: true
    },

    imageurls : [],

    currentbookings : [],

    description : {
        type: String,
        required: true
    },

    sitetype : {
        type: String , 
        required: true
    },

} , {
    timestamps : true,



})

const siteModel = mongoose.model('sites' , siteSchema)
module.exports = siteModel

