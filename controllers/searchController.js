const Car = require('../models/Car');

async function book(req, res) {
    try {
        let cars = await Car.find({});
        let access_token = req.cookies.access_token;
        let isAuthenticated = false;

        if (access_token) {
            isAuthenticated = true;
            res.render('search.ejs', { cars, isAuthenticated });
        }

        res.render('search.ejs', { cars, isAuthenticated });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = book;
