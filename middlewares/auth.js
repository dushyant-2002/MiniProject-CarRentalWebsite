const jwt = require("jsonwebtoken");
const SECRETKEY = "NOTESAPI";

const auth = (req,res,next)=>{

    try {
        // console.log(req.headers.authorization);
        console.log(req.cookies.access_token);
        let token = req.cookies.access_token;
        if(token){
            // token = token.split(" ")[1];
            let user = jwt.verify(token,SECRETKEY);
            req.userId = user.id;
            console.log(req.userId);
            next();
        }
        else{
            res.status(401).json({message:"Unauthorized User"});
        }
    } catch (error) {
        console.log(error);
         
        
    }
}
module.exports = auth;