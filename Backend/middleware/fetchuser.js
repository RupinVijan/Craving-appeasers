var jwt = require('jsonwebtoken');

const jwt_token="RupinVijan"

const fetchuser=(req , res , next)=>{
    const token=req.params.id
    if(!token){
        res.status(400).send({"error":"cannot find this user"})
    }
    try {
        req.fluffy=token;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({"error":"Invalid user"})
    }
}

module.exports = fetchuser;