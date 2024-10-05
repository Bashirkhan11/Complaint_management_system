const modle = require('../model/model');
const mongoose = require('mongoose');
const usermodel = require('../model/usercreatecompmodel');
const teachernamemodel = require('../model/Adminmodle');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret  = "abCdefGhijKlmNopQrsTuVwXyZ123456";



//user signup routs
async function handlecreatepost(req, res){
    if(req.body.password !== req.body.repassword){

        return res.status(400).json('Password Are Note Matched');
    }
    else{
        try {
            const secpassword = req.body.password;
            const salt = await bcrypt.genSalt(10)
            const hashpassword = await bcrypt.hash(secpassword, salt)
            const {email} = req.body;
            const find = await modle.findOne({email});
            if(find){
                return res.status(404).json({message: 'Email Alredy Exist'});
            }else{
                await modle.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hashpassword,
                    gender: req.body.gender
                })
                return  res.status(201).json({message:'status: Data Successfuly Add'});
            }
        } catch (error) {
            console.log(error);
            return  res.status(500).json({message: `Error ${error}`});
        }
    }
}

//user login routs 

async function handleloginpost(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({success: true, message: 'Email and password are required!' });
    }

    try {
        const user = await modle.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(404).json({success: true, message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({success: true, message: 'Invalid email or password' });
        }

        // Create token if login is successful
        const data = {
            user: {
                id: user._id,
            },
        };
        const token = jwt.sign(data, secret);

        // Respond with success
        return res.status(200).json({ success: true, message: 'Login successfully', token: token });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ success: false, message: 'An error occurred on the server side' });
    }
}




//user complant routs

//user get all complants (routs)---

async function handlegetcomp(req, res){
    const userId = req.userId;
    try {
        const get = await usermodel.find({userId});
        if(!get) {
            return res.status(404).json({sucess: true}, {Message: 'No Complaints .....!'});
        }
        else{
            return  res.status(200).json({message:'Successfully Fetch Data', get: get});
    
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

//user get rout for getting names of teacher from teacher signup collections
async function getteachernames(req, res){
    try {
        const teachernames = await teachernamemodel.find({Designation: 'Teacher'});
        if(!teachernames){
            return res.status(404).json({message: 'No data found.....!'});
        }
        else{
            return res.status(200).json({success: true, message: 'Data Successfully Fetch....!', teachernames: teachernames});
        }
    } catch (error) {
        if(error){
            return res.status(500).json({success: false, message: 'Some Error in Server....!'});
        }
    }
}


//user get complants where teacher did feedback  (routs)---
async function teacherfeedbackedcompget(req, res){
    const userId = req.userId;
    try {
        const get = await usermodel.find({userId});
        if(!get) {
            return res.status(404).json({sucess: true}, {success: true, message: 'No Complaints .....!'});
        }
        else{
            const filtercomplant = get.filter(get => get.teachersattus !== 'pending');
            if(filtercomplant){
                return  res.status(200).json({success: true, message:'Successfully Fetch Data', get: filtercomplant});
            }
            else{
                return res.status(404).json({success: true, message: 'No Handled Complants by Teacher Yet .....!'});
            }
    
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

//user get complant which or not handle yet----
async function teachernothandlecompget(req, res){
    const userId = req.userId;
    try {
        const get = await usermodel.find({userId});
        if(!get) {
            return res.status(404).json({sucess: true}, {success: true, message: 'No Complaints .....!'});
        }
        else{
            const filtercomplant = get.filter(get => get.teachersattus === 'pending');
            if(filtercomplant){
                return  res.status(200).json({success: true, message:'Successfully Fetch Data', get: filtercomplant});
            }
            else{
                return res.status(404).json({success: true, message: 'No Handled Complants by Teacher Yet .....!'});
            }
    
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}


async function createcomppost(req, res){
    const {department, complaint, option, message} = req.body;
    if (!department || !complaint || !option || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        await usermodel.create({
            userId: req.userId, // Use the userId from the token
            department,
            complaint,
            option,
            message
        })
        console.log('successfully add');
        return res.status(201).json({ success: true, message: 'Data Successfully Added!' });
    } catch (error) {
        console.log(error);
        return  res.status(500).json({message: `Error ${error}`});
    }
}

//user delete complaints

async function handledeletecomp(req, res){
      const id = req.params.id;
      try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
            const remove = await usermodel.findByIdAndDelete(id);
            if(!remove){
                return res.status(404).json({success: false, message: 'Complant Deletion Field!'});
            }
            else{
                return res.status(200).json({success: true, message: 'Complaint Successfully Deleted....!'});
            }
        }
     catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'There is Some Error in Server...!'})
      }
    }
}




module.exports = {
    handlegetcomp,
    handlecreatepost,
    handleloginpost,
    createcomppost ,
    teacherfeedbackedcompget,
    teachernothandlecompget,
    handledeletecomp,
    getteachernames

}