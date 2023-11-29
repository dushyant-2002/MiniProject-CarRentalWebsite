const express = require('express');
const User = require('../models/User');
const auth = require("../middlewares/auth");
const mongoose = require('mongoose');
const { signup, signin,getloginForm,getSignupform,logout } = require('../controllers/userController');
const router = express.Router();


router.post('/signup',signup);

router.post('/signin',signin);

router.get("/login",getloginForm);
router.get("/signup",getSignupform);
router.get("/logout",logout);


module.exports = router;