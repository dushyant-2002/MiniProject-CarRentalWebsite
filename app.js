const express = require('express');
const app = express();
//requiring routes
const authentication = require("./router/authentication");
const render = require("./router/render");
const buttonEvents = require("./router/buttonEvents");

//requiring cookie-parser
const cookieParser = require('cookie-parser');

const path = require('path');
//requiring mongoose and seed..js
const mongoose = require('mongoose');
const seedDB = require('./seed');

//using parsing middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
let first;
//delete cookies at every restart
app.use(async(req, res, next) => {
    if (!first) {
      // Clear all cookies
      console.log("cookies cleared");
      await res.clearCookie('access_token');
      first = true;
    }
  
    // Continue to the next middleware or route handler
    next();
  });
//setting static files


app.use((req,res,next)=>{ 
    console.log("HTTP Method - " + req.method + ", URL - " + req.url);
    next();
})
//setting view engine

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

//database connection
mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/carrental')
.then(()=>{
    console.log('DB CONNECTED')
})
.catch((err)=>{
    console.log("error in DB",err)
})

//routers
app.use("/",authentication);
app.use("/",render);
app.use("/",buttonEvents);

seedDB();
//server
const PORT = 8080;
app.listen(PORT , (err)=>{
    if(err) throw err;
    console.log(`Server Connected at http://localhost:${PORT}`);
})


