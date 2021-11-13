const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    price : {
        type:String,
        required:true
    },
    restid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant'
    }
  });

  module.exports=mongoose.model('restaurant-items', kittySchema)