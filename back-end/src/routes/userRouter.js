const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.getUser);
router.get('/sellers', userController.getAllSellers);
router.get('/users', userController.getUsers);
router.post('/register', userController.addUser);
router.delete('/:email', userController.deleteUserById);

module.exports = router;