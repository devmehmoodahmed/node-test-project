const userController = require('../controllers/userController')
const router = require('express').Router()

router.post('/signUp', userController.signUp)
router.post('/login', userController.login)
router.get('/fetchAllUsers', userController.fetchAllUsers)
router.get('/:id', userController.showUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router