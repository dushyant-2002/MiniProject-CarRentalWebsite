const express = require('express');
const User = require('../models/User');
const auth = require("../middlewares/auth");
const mongoose = require('mongoose');
const { signup, signin } = require('../controllers/userController');
const router = express.Router();


router.post('/signup',signup);

router.post('/signin',signin);

router.get("/login",async(req,res)=>{
    res.render("user/login");
})
router.get("/signup",async(req,res)=>{
    res.render("user/signup");
})
router.get("/logout",async(req,res)=>{
    await res.clearCookie('access_token');
    res.redirect("/book");
})


module.exports = router;