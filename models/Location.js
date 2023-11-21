const mongoose = require('mongoose');

let locationSchema = [{
    name:{
        type:String,
        required:true,
        trim : true
    },
    pincode:{
        type:Number
    },
    carsid :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Car'
        }
    ]
}]