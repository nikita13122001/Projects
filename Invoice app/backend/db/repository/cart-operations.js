const CartModel = require('../models/cart-schema');
const mongoose = require('mongoose');
const UserModel = require('../models/cart-schema');
const ProductModel = require('../models/product-schema');
module.exports = {
    async add(cartObject){
        const doc = await CartModel.create(cartObject);
        return doc;
    },
    async find(uid){
        console.log('UID is ',uid);
        const docs = await CartModel.find({'userid': mongoose.Types.ObjectId(uid)}).populate('userid').populate('productid').exec();
        //const docs = CartModel.find({}, undefined, { populate: {path: 'users',match:{_id:uid}, options: {strictPopulate: false}}, option: {strictPopulate: false}, }).exec()
        return docs;
    }
}