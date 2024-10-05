const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
         match: /.+\@.+\..+/
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});

const model = mongoose.model('usersignup', userschema);

module.exports = model;