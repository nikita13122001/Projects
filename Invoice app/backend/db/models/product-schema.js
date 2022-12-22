const { SchemaTypes } = require('mongoose');
const connection = require('../connection');

const Schema = connection.Schema;

const productSchema = new Schema({
    'name':{type: SchemaTypes.String},
    'price':{type:SchemaTypes.Number},
    'qty':{type:SchemaTypes.Number},
    'url':{type:SchemaTypes.String},
    'desc':{type:SchemaTypes.String}
    

});
const ProductModel = connection.model('products',productSchema);

  module.exports = ProductModel;
   