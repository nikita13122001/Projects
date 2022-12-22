const ProductModel = require('../models/product-schema');
module.exports = {
    async add(productObject){
        const doc = await ProductModel.create(productObject);
        return doc;
    },
    async find(){
        const docs = await ProductModel.find({}).exec();
        return docs;
    }
}