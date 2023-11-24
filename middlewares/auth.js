const jwt = require("jsonwebtoken");
const SECRETKEY = "NOTESAPI";

const auth = (req,res,next)=>{

    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECRETKEY);
            req.userId = user.id;
            console.log(req.userId);
            next();
        }
        else{
            console.log("no token")
            res.status(401).json({message:"Unauthorized User"});
        }
    } catch (error) {
        console.log(error);
         
        
    }
}
module.exports = auth;