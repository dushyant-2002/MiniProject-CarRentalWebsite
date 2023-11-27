const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    speed:{
        type:Number,
        required:true,
        trim:true
    },
    img:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type : String,
        required:true,
        trim:true
    },
    transmission:{
        type:String,
        required:true,
        trim:true

    },
    fuel:{
        type:String,
        required:true,
        trim:true
    },
    seatingCapacity:{
        type:Number,
        required:true,
    },
    model:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        requried:true
    },
    rating:{
        type:Number,
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    features:[
        {
            type:String
        }
    ],
    isBooked:{
        type:Boolean,
    }
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;