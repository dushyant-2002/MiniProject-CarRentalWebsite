const mongoose = require('mongoose');
const User = require('../models/User');

async function orders(req, res) {
    const userId = res.locals.userId;
    let access_token = req.cookies.access_token;
    let isAuthenticated = false;

    if (access_token) {
        isAuthenticated = true;
    }

    console.log('/orders userid', userId);

    try {
        let user = await User.findById(new mongoose.Types.ObjectId(userId)).populate('order');

        if (user) {
            let orders = user.order.reverse();
            res.render('orders', { orders, isAuthenticated });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = orders;
