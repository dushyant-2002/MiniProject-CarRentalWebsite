const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Car = require("./models/Car");
const authentication = require("./router/authentication");
const noteRouter = require('./router/notes');
const auth = require("./middlewares/auth");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
//setting static files

// app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
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
app.use("/users",authentication);
// app.use("/notes",noteRouter);

app.get("/book",async(req,res)=>{
    let cars = await Car.find({});
    res.render("search.ejs",{cars});
})
app.post("/book",async(req,res)=>{
    // let form = req.body;
    console.log(req.body);
    res.send("hi");
})
app.get("/book/")
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
app.get("/getcars",async(req,res)=>{
    // let{location} = req.params;
    let cars =  await Car.find();
    res.send(cars)
})
seedDB();
//server
const PORT = 8080;
app.listen(PORT , (err)=>{
    if(err) throw err;
    console.log(`Server Connected at http://localhost:${PORT}`);
})


