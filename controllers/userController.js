const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const SECRETKEY = "NOTESAPI";
const signup = async(req,res)=>{
    //existing user check
    const{firstname,lastname,username,phone,email,password} = req.body;
    try {
        const existinguser = await User.findOne({username:username});
        if(existinguser){
            return res.status(400).json({message:"User Already Exist"});
        }
        //hashed password
        // const str = password.toString();
        const hashedpassword = await bcrypt.hash(password,10);
        //user creation
        const result = await User.create({
            firstname: firstname,
            lastname:lastname,
            username:username,
            phone:phone,
            email:email,
            password:hashedpassword

        })
         //token generate
         const token = jwt.sign({username:result.username,id:result._id},SECRETKEY);
         res.cookie('access_token',token);
         res.status(201).json({user:result,token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"}); 
        
    }
}  

const signin = async(req,res)=>{

    const{username,password} = req.body;
    try {
        const existinguser = await User.findOne({username:username});
        if(!existinguser){
            return res.status(404).json({message:"User not Found"});
        }
        //decrypting hashed password in database and matching
        const matchPassword = await bcrypt.compare(password,existinguser.password);
        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }
        const token = jwt.sign({username:existinguser.username,id:existinguser._id},SECRETKEY);
        res.cookie('access_token',token);
        res.status(201).json({user:existinguser,token:token});
        // res.redirect("/book");
        

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }

}
module.exports = {signup,signin};