const express = require('express');
const {
    // handleget,
     handlecreatepost, 
     handleloginpost,
     handlegetallcomp,
     handledelete,
     gethandledcompbyteacher,
     handleunsuccesscompget,
     Apatchcomofselfordoemessage
     } = require('../controller/Admincontroller');
    //  const adminauthorizationtoken = require('../madilwear/adminmadilware');



const Router = express.Router();


// Importing controllers
// Router.get('/user', handleget);
Router.post('/Acreatepost', handlecreatepost);
Router.post('/Adminlogin',  handleloginpost);
Router.get('/Adminallcomp',  handlegetallcomp);
Router.delete('/Admindeletecomp/:id',  handledelete);
Router.get('/Ahandlecompbyteacher',  gethandledcompbyteacher);
Router.get('/Aunsuccesscomp',  handleunsuccesscompget);
Router.patch('/updatadminstatus/:id',  Apatchcomofselfordoemessage);


module.exports = Router;