const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/', productController.getProducts);

module.exports = router;
