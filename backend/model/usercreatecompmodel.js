const mongoose = require('mongoose');


const usercreatecompschema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
          required: true },
    department:{
        type: String,
        required: true
    },
    complaint:{
        type: String,
        required: true
    },
    option:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true
    },
    teachersattus:{
        type: String,
        default:'pending'
    },
    teachersattus1:{
        type: String,
        default:'pending'
    },
    adminsattus:{
        type: String,
        default:'pending'
    }
});

const model = mongoose.model('createcomp', usercreatecompschema);

module.exports = model;