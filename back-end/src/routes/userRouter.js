const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.getUser);

module.exports = router;