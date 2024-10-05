const express = require('express');
const {handlegetcomp, 
    handlecreatepost, 
    handleloginpost, 
    createcomppost, 
    teacherfeedbackedcompget, 
    teachernothandlecompget,
    handledeletecomp,
    getteachernames
 } = require('../controller/usercontroler');
const Router = express.Router();
const authenticateToken = require('../madilwear/createcompmadilware');



// Importing controllers
Router.post('/users', handlecreatepost);
Router.post('/login', handleloginpost);
Router.get('/usergetcomp', authenticateToken, handlegetcomp);
Router.get('/usergetteachername', getteachernames);
Router.post('/createcomp', authenticateToken, createcomppost);
Router.get('/handlecomp', authenticateToken, teacherfeedbackedcompget);
Router.get('/nothandlecomp', authenticateToken, teachernothandlecompget);
Router.delete('/deletecomp/:id',  handledeletecomp);


module.exports = Router;