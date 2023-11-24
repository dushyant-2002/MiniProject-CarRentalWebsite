const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Car = require("./models/Car");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const authentication = require("./router/authentication");
// const noteRouter = require('./router/notes');
const auth = require("./middlewares/auth");

//setting static files

// app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{ 
    console.log("HTTP Method - " + req.method + ", URL - " + req.url);
    next();
})
//setting templates

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
// app.use("/notes",noteRouter);
app.get("/login",async(req,res)=>{
    res.render("user/login");
})
app.get("/signup",async(req,res)=>{
    res.render("user/signup");
})
app.get("/book",async(req,res)=>{
    let cars = await Car.find({});
    res.render("search.ejs",{cars});
})
app.post("/book",async(req,res)=>{
    // let form = req.body;
    console.log(req.body);
    res.send("hi");
})
app.get("/book/:id",async(req,res)=>{
    let {id} = req.params;
    
})

app.get("/search",async(req,res)=>{
    let{location} = req.query;
    console.log(location);
    
    let cars = await Car.find();
    if(location){
    cars = await Car.find({location:location});
    }
    res.render('book',{cars});
})

// for axios 
app.get("/getcars/:location",async(req,res)=>{
    let{location} = req.params;
    let cars =  await Car.find({location:location});
    res.send(cars)
})
app.get("/show",async(req,res)=>{
    let{id,location,pickupDate,pickupTime,dropDate,dropTime} = req.query;
    let cars = await Car.findById(id);
    console.log(id);
    console.log(cars);
    // res.send("req recieved");
    res.render("show.ejs",{id,location,pickupDate,pickupTime,dropDate,dropTime,cars});
})
seedDB();
//server
const PORT = 8080;
app.listen(PORT , (err)=>{
    if(err) throw err;
    console.log(`Server Connected at http://localhost:${PORT}`);
})


