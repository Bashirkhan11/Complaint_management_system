const jwt = require('jsonwebtoken');
const secret = "AbCdEfGhIjKlMnOpQrStUvWxYz123456";

// middleware function to validate jwt token

function adminauthenticateToken (){
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token){
        return res.status(401).json({success: false, message:'Your are unauthorized'});
    }

    jwt.verify(token, secret, (err, user)=>{
        if(err) return res.status(403).json({success: false, message: 'Your token is not valid....!'});

        req.user = user.id;
    })
}

module.exports = adminauthenticateToken;