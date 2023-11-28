const Car = require('../models/Car');

async function search(req, res) {
    try {
        let { location } = req.query;
        console.log(location);

        let cars = await Car.find();

        if (location) {
            cars = await Car.find({ location: location });
        }

        let access_token = req.cookies.access_token;
        let isAuthenticated = false;

        if (access_token) {
            isAuthenticated = true;
        }

        res.render('book.ejs', { cars, isAuthenticated });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = search;
