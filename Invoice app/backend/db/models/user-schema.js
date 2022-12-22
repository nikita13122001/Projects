const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const joi = require('joi');
const {USERS} = require('../../utils/config/app-constants').SCHEMAS;
const Schema = connection.Schema;

const userSchema = new Schema({
    'email':{type: SchemaTypes.String, required: [true, 'Please enter a email'], unique:true},
    'password':{type:SchemaTypes.String, required: [true, 'Please enter a password']}
    

});
const UserModel = connection.model(USERS,userSchema); // Schema --> collection 
const validateUser = (user) => {
    const schema = joi.object({
      email: joi.string().email().min(5).max(500).required(),
      password: joi.string().min(8).max(1024).required(),
    })
    return schema.validate(user)
  }
  module.exports = {
    UserModel,
    validateUser,
  }