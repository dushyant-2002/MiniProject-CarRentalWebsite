const Car = require('../models/Car');

async function show(req, res) {
    try {
        let { id, location, pickupDate, pickupTime, dropDate, dropTime } = req.query;
        let cars = await Car.findById(id);
        let access_token = req.cookies.access_token;
        let isAuthenticated = false;

        if (access_token) {
            isAuthenticated = true;
        }

        res.render('show.ejs', { isAuthenticated, id, location, pickupDate, pickupTime, dropDate, dropTime, cars });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = show;
