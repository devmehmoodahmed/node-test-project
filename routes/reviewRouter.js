// import controllers review
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()

// use routers
router.post('/addReview', reviewController.addReview)
router.get('/getAllReviews', reviewController.getAllReviews)


module.exports = router