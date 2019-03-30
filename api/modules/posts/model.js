const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MODEL_NAME = 'posts';

const _schema = {
    
    author:{
        type:String
    },
    authorEmail:{
        type:String
    },
    title:{
        type:String
    },
    article:{
        type:String
    },
    date:{
        type:String
    },
    imageUrl: {
        type: String
    }
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports = Model;