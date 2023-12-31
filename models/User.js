const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true

    },
    order:[{
        type:mongoose.Types.ObjectId,
        ref:'Order'
    }]
    

})
let User = mongoose.model('User',userSchema);
module.exports = User;