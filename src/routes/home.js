const express = require('express');
const router = express.Router();
const { productsController, usersController } = require('../controller')
router.get('/api/users',usersController.list)
router.get('/api/users/:id',usersController.detail)

router.get('/api/products',productsController.list)
router.get('/api/products/:id',productsController.detail)
module.exports = router;