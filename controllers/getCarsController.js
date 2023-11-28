const Car = require('../models/Car');

async function getCarsByLocation(req, res) {
    try {
        let { location } = req.params;
        let cars = await Car.find({ location: location });
        res.send(cars);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = getCarsByLocation;
