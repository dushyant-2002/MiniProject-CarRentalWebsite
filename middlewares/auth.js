const jwt = require("jsonwebtoken");
const SECRETKEY = "NOTESAPI";

const auth = (req,res,next)=>{

    try {
        // console.log(req.headers.authorization);
        console.log("token :",req.cookies.access_token);
        let token = req.cookies.access_token;
        if(token){
            // token = token.split(" ")[1];
            let user = jwt.verify(token,SECRETKEY);
            req.userId = user.id;
            // Store userId in res.locals
            res.locals.userId = user.id;
            console.log(    "current user ID :",req.userId);
            next();
        }
        else{
            res.redirect("/login");
            // res.status(401).json({message:"Unauthorized User"});
        }
    } catch (error) {
        console.log(error);
         
        
    }
}
module.exports = auth;