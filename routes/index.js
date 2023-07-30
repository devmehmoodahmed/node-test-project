const express = require('express');
const productRoutes = require('./productRouter.js');
const reviewRoutes = require('./reviewRouter.js');
const userRoutes = require('./userRouter.js');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
