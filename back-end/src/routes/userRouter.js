const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.getUser);
router.get('/sellers', userController.getAllSellers);

module.exports = router;