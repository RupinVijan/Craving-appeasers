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
        type:String
    },
    custid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
    }
  });

  module.exports=mongoose.model('cart-items', kittySchema)