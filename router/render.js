const express = require('express');
const auth = require('../middlewares/auth');
const homeController = require('../controllers/homeController');
const searchController = require('../controllers/searchController');
const bookController = require('../controllers/bookController');
const showController = require('../controllers/showController');
const ordersController = require('../controllers/ordersController');

const router = express.Router();

router.get('/', homeController);
router.get('/book', searchController);
router.get('/search', auth, bookController);
router.get('/show', auth, showController);
router.get('/orders', auth, ordersController);

module.exports = router;
