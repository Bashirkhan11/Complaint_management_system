const compmodel = require('../model/usercreatecompmodel');

// teacher get routs for to get those complaint where his name is mentioned
async function getcomplaintofself(req, res){
    const name = req.name;
    try {
        const comp = await compmodel.find({option: name, teachersattus1: 'pending'});
        if(!comp){
            return res.status(404).json({success: false, message: 'No data Found....!'});
        }
        else{
            // const get = comp.filter(item => item.option === nmae);
            return res.status(200).json({success: true, message: 'Data successfully fetch....!', get: comp});
        }
    } catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'some error in server....!'})
        }
    }
}



async function getcomplaintofhandlebyself(req, res){
    const name = req.name;
    try {
        const comp = await compmodel.find({option: name,  teachersattus1: 'pending'});
        if(!comp){
            return res.status(404).json({success: false, message: 'No data Found....!'});
        }
        else{
            const get = comp.filter(item => item.teachersattus !== 'pending');
            return res.status(200).json({success: true, message: 'Data successfully fetch....!', get: get});
        }
    } catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'some error in server....!'})
        }
    }
}

async function getmanagecomplaintofself(req, res){
    const name = req.name;
    try {
        const comp = await compmodel.find({option: name, teachersattus1: 'pending'});
        if(!comp){
            return res.status(404).json({success: false, message: 'No data Found....!'});
        }
        else{
            // const get = comp.filter(item => item.option === nmae);
            return res.status(200).json({success: true, message: 'Data successfully fetch....!', get: comp});
        }
    } catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'some error in server....!'})
        }
    }
}

async function patchteacher(req, res){
    const id = req.params.id;
    try {
        const comp = await compmodel.findOneAndUpdate(
            { _id: id }, // Find by ID
            { $set: { teachersattus1: 'deleted' } }, // Set to 'deleted'
         // { new: true } 
         // Return the updated document if we want to return updated version of data then we will use new : true
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


async function tgetcomofselforemessage(req, res){
    const name = req.name;
    try {
        const comp = await compmodel.find({option: name, teachersattus1: 'pending', teachersattus: 'pending'});
        if(!comp){
            return res.status(404).json({success: false, message: 'No data Found....!'});
        }
        else{
            // const get = comp.filter(item => item.option === nmae);
            return res.status(200).json({success: true, message: 'Data successfully fetch....!', get: comp});
        }
    } catch (error) {
        if(error){
            console.log(error);
            return res.status(500).json({success: false, message: 'some error in server....!'})
        }
    }
}


async function tpatchcomofselfordoemessage(req, res){
    const id = req.params.id;
    const {textarea} = req.body;
    try {
        const comp = await compmodel.findByIdAndUpdate(
            id,
            { teachersattus: textarea }, // Ensure you are updating the correct field
            // { new: true } // Return the updated document
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



module.exports ={
    getcomplaintofself,
    getcomplaintofhandlebyself,
    getmanagecomplaintofself,
    patchteacher,
    tgetcomofselforemessage,
    tpatchcomofselfordoemessage
     
}