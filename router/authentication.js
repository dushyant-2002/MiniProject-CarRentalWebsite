const express = require('express');
const User = require('../models/User');
const { signup, signin } = require('../controllers/userController');
const router = express.Router();


router.post('/signup',signup);

router.post('/signin',signin);
// router.get('/signup',(req,res)=>{
//     res.render('user/signup');
// })

// router.post('/signup',async(req,res)=>{
//     let {firstname,lastname,username,password} = req.body;
//     await User.create({firstname,lastname,username,password});
//     res.redirect('/login');
// })
// router.get('/signin',async(req,res)=>{
//     let {Username,Password } = req.body;
//     let user = await User.findOne({username:Username});
//     if(user){
//         if(Password == user.password){
//             console.log("user authenticated");
//         }
//     }
// })
module.exports = router;