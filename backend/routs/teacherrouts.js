const express = require('express');
const authenticateToken = require('../madilwear/teachermiddleware');
const {getcomplaintofself,
    getcomplaintofhandlebyself,
    getmanagecomplaintofself,
    patchteacher,
    tgetcomofselforemessage,
    tpatchcomofselfordoemessage
} = require('../controller/teachercontroller');



const Router = express.Router();



Router.get('/tgetcomofself', authenticateToken, getcomplaintofself);
Router.get('/tgetcomofselfforemessage', authenticateToken, tgetcomofselforemessage);
Router.get('/tgetcomhindleofself', authenticateToken, getcomplaintofhandlebyself);
Router.get('/tgetmanagecomofself', authenticateToken, getmanagecomplaintofself);
Router.patch('/tupdatedata/:id', patchteacher);
Router.patch('/updateteacherstatus/:id', tpatchcomofselfordoemessage);



module.exports = Router;