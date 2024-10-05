const modelAdmin = require('../model/Adminmodle');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "AbCdEfGhIjKlMnOpQrStUvWxYz123456";
const usercommodel = require('../model/usercreatecompmodel');
// async function handleget(req, res){
//     const get = await modle.find({});
//     if(!get) {
//         return res.status(404).json('Message: Find Error')
//     }
//     else{
//         return  res.status(200).json(get);

//     }
// }

// create teacher and admin post route
async function handlecreatepost(req, res){
    const {firstname, email, password, repassword, Designation} = req.body;

    if(!firstname || !email || !password || !repassword || !Designation){
        console.log('fill all the field');
        return res.status(400).json({success: true, message:'All field are requre'});
    }

    if(password !== repassword){

        return res.status(400).json({success: true, message:'Password Are Note Matched'});
    }
    else{
        try {
            const user = await modelAdmin.findOne({email});
            if(!user){
                const name = await modelAdmin.findOne({firstname});
                if(!name){
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(password, salt);
                    const data = await modelAdmin.create({
                        firstname: firstname,
                        email: email,
                        password: hashedPassword,
                        Designation: Designation
                    });
                    console.log(data);
                    return  res.status(201).json({success: true, message:' Data Successfuly Add'});
                } 
                else{
                    return res.status(404).json({success: true, message:'This Name Is Already Exist Please Enter Another Valid Name!'})
                }
            }
            else{
                return res.status(400).json({success: true, message: 'Email is Already Exist'});
            }
        } catch (error) {
            console.log(error);
            return  res.status(500).json({success: true, message: `Error ${error}`});
        }
    }
}



// teacher and admin login post rout
async function handleloginpost(req, res){
    const email = req.body.email;
    const password = req.body.password;
    // console.log (`${email}  ${password}`)
    if(!email || !password){
        return res.status(404).json({success: false, message:'email and password is require!'});
    }
    try {
        const get = await modelAdmin.findOne({email});
        if(!get){
            return res.status(404).json({success: false, message:'email not found'});
        }
        else{
            const comparepass = await bcrypt.compare(password, get.password);
            if(!comparepass){
                return res.status(404).json({success: false, message:'Invalid email or password'});
            }
            const data = {
                name:  get.firstname
            }
            const token = jwt.sign(data, secret);
            console.log(token);
            return  res.status(200).json({success: true, message: 'Login successfully', token: token, get: get});
        }
    } catch (error) {
        res.status(500).json({success: false, message: 'Login successfully', token: token});
    }
}


// Admin get all complaint reouts

async function handlegetallcomp(req, res){
    try {
        const get = await usercommodel.find({});
        if(!get){
            return res.status(404).json({success: false, message: 'No Complaint Found....!'})
        }
        else{
            return res.status(200).json({success: true, message: 'All Complaint Successfully Fetch', get: get});
        }
    } catch (error) {
        if(error){
            res.status(500).json({success: true, message: 'Some Error Is In Your Server....!'});
        }
    }
}


async function handledelete(req, res){
    const id = req.params.id;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
        const deletecomp = await usercommodel.findByIdAndDelete(id);
        if(!deletecomp){
            console.log(id);
            return res.status(404).json({success: false, message: 'No Complaint Found....!'});
        }
        else{
            return res.status(200).json({success: true, message: 'Complain Successfully Deleted.....!'});
        }
    }catch(error){
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'Some Error in Server.....!'});
        }
    }
}

async function gethandledcompbyteacher(req, res){
    try{
        const get = await usercommodel.find({});
        if(!get){
            return res.status(404).json({success: false, message: 'No Complaint Found....!'});
        }
        else{
            const handledcomp = get.filter(c => c.teachersattus !== 'pending');
            return res.status(200).json({success: true, message: 'Complaints Successfully Fetched.....!', handelcomp: handledcomp});
        }
    }catch(error){
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'Some Error in Server...!'});
        }
    }
}


async function handleunsuccesscompget(req, res){
    try{
        const get = await usercommodel.find({});
        if(!get){
            return res.status(404).json({success: false, message: 'No Complaints Found....!'});
        }
        else{
            const unsuccesscomp = get.filter(c => c.teachersattus === 'pending');
            return res.status(200).json({success: true, message: 'Complaints Successfully Fetched....!', handledata:unsuccesscomp})
        }
    }catch(error){
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'Some Error in Server....!'});
        }
    }
}



async function Apatchcomofselfordoemessage(req, res){
    const id = req.params.id;
    const {textarea} = req.body;
    try {
        const comp = await usercommodel.findByIdAndUpdate(
            id,
            { adminsattus: textarea }
        );
        if(!comp){
            return res.status(404).json({success: false, message: 'No data Found....!'});
        }
        else{

            return res.status(200).json({success: true, message: 'Data successfully fetch....!'});
        }
    } catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'some error in server....!'})
        }
    }
}




 
module.exports = {
    handlegetallcomp,
    handlecreatepost,
    handleloginpost,
    handledelete ,
    gethandledcompbyteacher,
    handleunsuccesscompget,
    Apatchcomofselfordoemessage

}