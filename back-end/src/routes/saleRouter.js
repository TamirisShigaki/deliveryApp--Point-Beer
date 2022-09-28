const { Router } = require('express');
const saleController = require('../controllers/saleController');

const router = Router();

router.post('/', saleController.addSale);
router.get('/', saleController.getSalesProducts);

module.exports = router;
