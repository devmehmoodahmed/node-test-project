const userController = require('../controllers/userController');
const router = require('express').Router();
const authConfig = require('../config/authConfig.js');

router.post('/signUp', userController.signUp);
router.post('/login', userController.login);
router.get('/fetchAllUsers', authConfig, userController.fetchAllUsers);
router.get('/:id', userController.showUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
