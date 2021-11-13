const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
const restuser= require('../models/user');
const custuser=require('../models/customer')
var fetchuser=require("../middleware/fetchuser");

const jwt_token="RupinVijan"

const mongoose=require('mongoose')
MongoDbURL='mongodb+srv://lms:rupin@cluster0.jbvdn.mongodb.net/foodie';
mongoose.connect(MongoDbURL);
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log("Database is Ready.... ")
});


router.post('/register/restaurant', async(req, res) => {

    try {
        const Kitten = restuser;
        let user=await Kitten.findOne({email:req.body.email});
        if(user){
            res.status(400).json({"error":"This Email Already exist."})
        }
            const fluffy = new Kitten({ name : req.body.name , email : req.body.email ,address:req.body.address, locality:req.body.locality , img:req.body.img , password : req.body.password});
            fluffy.save();
            console.log(fluffy)
            
            var token = jwt.sign({id : fluffy.id}, jwt_token);
            console.log(token)
            res.status(200).json({token})
    } catch (error) {
        console.log(error);
        res.status(401).json({"error":"try again..."})
    }
    // console.log(req.body)


})

router.post('/register/customer', async(req, res) => {

    try {
        const Kitten = custuser
        let user=await Kitten.findOne({email:req.body.email});
        if(user){
            res.status(400).json({"error":"This Email Already exist."})
        }
            const fluffy = new Kitten({ name : req.body.name , email : req.body.email , password : req.body.password});
            fluffy.save();
            console.log(fluffy)
            
            var token = jwt.sign({id : fluffy.id}, jwt_token);
            console.log(token)
            res.status(200).json({token})
    } catch (error) {
        console.log(error);
        res.status(401).json({"error":"try again..."})
    }
    // console.log(req.body)


})



router.post('/login/restaurant',async(req,res)=>{
    const Kitten = restuser
    const user=await Kitten.findOne({"email":req.body.email})
    try {
        if(!user){
            res.status(400).send({"error":"user with this email doesn't exist"})
        }
        else{
            if(user.password===req.body.password){
                var token = jwt.sign({id : user.id}, jwt_token);
                res.status(200).json({token})
        }
    else{
        res.status(401).send({"error":"Incorrect Password"})
    }}
        
    } catch (error) {
        res.status(500).send({"error":"Internal server error"})
        console.log(error)
    }


})


router.post('/login/customer',async(req,res)=>{
    const Kitten = custuser
    const user=await Kitten.findOne({"email":req.body.email})
    try {
        if(!user){
            res.status(400).send({"error":"user with this email doesn't exist"})
        }
        else{
            if(user.password===req.body.password){
                var token = jwt.sign({id : user.id}, jwt_token);
                res.status(200).json({token})
        }
    else{
        res.status(401).send({"error":"Incorrect Password"})
    }}
        
    } catch (error) {
        res.status(500).send({"error":"Internal server error"})
        console.log(error)
    }


})


router.get('/getdata/:id',fetchuser,async(req,res)=>{

    try {
        const Kitten = custuser
        const userid= req.fluffy.id
        const user = await Kitten.findById(userid)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})



module.exports=router;