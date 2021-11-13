const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    img:String,
    email:{
        type:String,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    locality:String,
    password: {
        type:String,
        required:true
    }
  });

  module.exports=mongoose.model('restaurant', kittySchema)