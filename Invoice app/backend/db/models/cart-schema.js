const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const UserModel = require('../models/user-schema').UserModel;
const ProductModel = require('../models/product-schema');

const Schema = connection.Schema;

const cartSchema = new Schema({
    'userid':{type: SchemaTypes.ObjectId, ref:'users'},
    'productid':{type:SchemaTypes.ObjectId, ref:'products'},
    'qty':{type:SchemaTypes.Number}
    

});
const CartModel = connection.model('carts',cartSchema);

  module.exports = CartModel;
   