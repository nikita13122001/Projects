const express = require('express');
const productRoutes = express.Router();
const {ADD_PRODUCT, VIEW_PRODUCT} = require('../../../utils/config/app-constants').ROUTES.PRODUCT;
const productController = require('../controllers/products');

productRoutes.post(ADD_PRODUCT, productController.add);
productRoutes.post(VIEW_PRODUCT, productController.viewProducts);
module.exports = productRoutes;