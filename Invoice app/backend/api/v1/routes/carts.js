const express = require('express');
const cartRoutes = express.Router();
const {ADD_TO_CART, VIEW_CART} = require('../../../utils/config/app-constants').ROUTES.CART;
const cartController = require('../controllers/carts');

cartRoutes.post(ADD_TO_CART, cartController.addToCart);
cartRoutes.get(VIEW_CART, cartController.viewCart);
module.exports = cartRoutes;