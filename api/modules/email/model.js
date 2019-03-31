const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MODEL_NAME = 'email';

const _schema = {
    
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    mensage:{
        type:String
    },
    createAt:{
        type: Date,
        default: new Date()
    },
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports = Model;