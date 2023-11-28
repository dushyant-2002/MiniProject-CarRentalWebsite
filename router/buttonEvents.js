const express = require('express');
const auth = require('../middlewares/auth');
const getCarsByLocation = require('../controllers/getCarsController');
const bookNow = require('../controllers/bookNowController');
const router = express.Router();

router.get('/getcars/:location', getCarsByLocation);
router.post('/booknow', auth, bookNow);

module.exports = router;
