const { Router } = require('express');
const registerController = require('../controllers/registerController');

const router = Router();

router.post('/', registerController.register);

module.exports = router;