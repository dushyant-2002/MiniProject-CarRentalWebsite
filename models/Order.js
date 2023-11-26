const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Types.ObjectId,
        ref: 'Car' 
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        trim: true,
    },
    pickupDate: {
        type: String,
        required: true,
        trim: true,
    },
    pickupTime: {
        type: String,
        required: true,
        trim: true
    },
    dropDate: {
        type: String,
        required: true,
        trim: true,
    },
    dropTime: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    totalTime: {
        type: Number,
        min: 0,
        required: true
    }
});

let Order = mongoose.model('Order', orderSchema);
module.exports = Order;
