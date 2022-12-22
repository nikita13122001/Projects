const UserModel = require('../models/user-schema').UserModel;
module.exports = {
    async add(userObject){
        const doc = await UserModel.create(userObject);
        return doc;
    },
    async find(userObject){
        const doc = await UserModel.findOne({'email':userObject.email, 'password':userObject.password}).exec();
        return doc;
    }
}