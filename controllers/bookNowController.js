const mongoose = require('mongoose');
const User = require('../models/User');
const Car = require('../models/Car');
const Order = require('../models/Order');

async function bookNow(req, res) {
    try {
        const userId = res.locals.userId;

        let { carId, name, img, pickupDate, pickupTime, dropDate, dropTime, price, totalTime } = req.body;
        const newOrder = new Order({
            carId: new mongoose.Types.ObjectId(carId),
            name: name,
            img: img,
            pickupDate: pickupDate,
            pickupTime: pickupTime,
            dropDate: dropDate,
            dropTime: dropTime,
            price: price,
            totalTime: totalTime
        });

        let user = await User.findById(new mongoose.Types.ObjectId(userId));
        user.order.push(newOrder);

        let car = await Car.findByIdAndUpdate(newOrder.carId, { isBooked: true });
        
        await car.save();
        await newOrder.save();
        await user.save();
        
        console.log('Order saved successfully.');
        res.redirect('/orders');
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = bookNow;
