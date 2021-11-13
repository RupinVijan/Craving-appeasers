const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
var fetchuser=require("../middleware/fetchuser");
var fetchuser1=require("../middleware/fetchuser1");
const restitem= require('../models/restitem');
const router = require('./custrest');

router.get('/read/cartitem/:id',fetchuser,async(req,res)=>{
    try {
        const userid= req.fluffy
        const notesdata = await Kitten.findByIdAndDelete(userid)
        res.status(200).send("deleted this item from cart");

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})
module.exports=router