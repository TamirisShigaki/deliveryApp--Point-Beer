const { Router } = require('express');
const saleController = require('../controllers/saleController');

const router = Router();

router.post('/', saleController.addSale);
router.get('/', saleController.getSalesProducts);
router.get('/:id', saleController.getSaleById);

module.exports = router;
