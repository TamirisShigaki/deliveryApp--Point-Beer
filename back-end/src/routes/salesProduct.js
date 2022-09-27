const { Router } = require('express');
const saleProductController = require('../controllers/saleProductController');

const router = Router();

router.get('/:id', saleProductController.getById);

module.exports = router;
