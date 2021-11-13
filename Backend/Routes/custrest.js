const express = require('express')
const router =express.Router()
var fetchuser=require("../middleware/fetchuser");
var fetchuser1=require("../middleware/fetchuser1");
const user= require('../models/user')
const cartitem= require('../models/cartitem')

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
router.get('/reads/cartitem',fetchuser1,async(req,res)=>{
    try {
        const Kitten = cartitem;
        const userid= req.fluffy.id
        const notesdata = await Kitten.find({"custid": userid})
        res.status(200).send(notesdata);

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

router.post('/cartlist',fetchuser1,async(req,res)=>{
    try {
        const Kitten = cartitem;
        const userid= req.fluffy.id;
        const fluffy = new Kitten({ item:req.body.item,price:req.body.price ,restid : req.body.restid,custid:userid});
        fluffy.save();
        console.log(fluffy)
        res.status(200).send(notesdata);

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

module.exports=router;