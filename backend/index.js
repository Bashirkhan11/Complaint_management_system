const express = require('express');
const connectionmongo = require('./conection/mongocon');
const {parser, corss, appp} = require('./madilwear/madilwear');
const Router = require('./routs/routs');
const ARouter = require('./routs/Adminrouts');
const TRouter = require('./routs/teacherrouts');

const app = express();
const port = 5000;


//connectin to database
connectionmongo('mongodb://127.0.0.1:27017/complant-System');

    // middleware
    app.use(parser);
    app.use(corss);
    app.use(appp);

    //user routs
app.use('/', Router); 

//admin routs
app.use('/', ARouter); 

//teachers routs
app.use('/', TRouter);


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})





// app.post('/user', async (req, res)=>{

//     if(req.body.password !== req.body.repassword){

//         return res.status(404).json('Password Are Note Matched');
//     }
//     else{
//             const post = await model.create({
//                 firstname: req.body.fname,
//                 lastname: req.body.lname,
//                 email: req.body.email,
//                 password: req.body.password,
//                 repassword: req.body.repassword,
//                 gender: req.body.gender,
//             })
                    
//             if(!post) {
//                 return res.status(404).json('Message: Find Error || Enter Your Cradiential!');
//             }
//             else{
//                 return  res.status(201).json('status: Data Successfuly Add');
//             }

//     }
// })