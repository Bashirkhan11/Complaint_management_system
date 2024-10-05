const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    Designation:{
        type: String,
        required: true
    }
});

const modelAdmin = mongoose.model('Admin&Teachersignup', userschema);

module.exports = modelAdmin;