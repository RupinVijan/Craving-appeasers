const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
var fetchuser=require("../middleware/fetchuser");
var fetchuser1=require("../middleware/fetchuser1");
const restitem= require('../models/restitem')
const user= require('../models/user')

router.get('/read/:id',fetchuser,async(req,res)=>{
    try {
        const Kitten = user;
        const userid= req.fluffy
        const notesdata = await Kitten.find({"locality": userid})
        res.status(200).send(notesdata);

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

module.exports=router;