const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
var fetchuser=require("../middleware/fetchuser");
var fetchuser1=require("../middleware/fetchuser1");
const restitem= require('../models/restitem')


router.get('/read/:id',fetchuser1,async(req,res)=>{
    try {
        const Kitten = restitem;
        const userid= req.fluffy.id
        const notesdata = await Kitten.find({"restid": userid})
        res.status(200).send(notesdata);

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

router.post('/create',fetchuser1,async(req,res)=>{
    try {
        const Kitten = restitem;
        const userid= req.fluffy.id;
        console.log(req.body.item)
        const fluffy = new Kitten({ item:req.body.item,price:req.body.price ,restid : userid});
        fluffy.save();
        console.log(fluffy)
        res.status(200).send("post added");

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})


module.exports=router;