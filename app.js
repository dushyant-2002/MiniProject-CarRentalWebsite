const express = require('express');
const app = express();
const authentication = require("./router/authentication");
// const noteRouter = require('./router/notes');
const auth = require("./middlewares/auth");
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Car = require("./models/Car");
const Order = require("./models/Order");
const User = require("./models/User");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
let first;
app.use(async(req, res, next) => {
    //delete cookies at every restart
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
app.get("/",(req,res)=>{
    let access_token = req.cookies.access_token;
    let isAuthenticated = false
    if(access_token){
        isAuthenticated = true;
    }
    res.render("home.ejs",{isAuthenticated});
})
app.get("/login",async(req,res)=>{
    res.render("user/login");
})
app.get("/signup",async(req,res)=>{
    res.render("user/signup");
})
app.get("/logout",async(req,res)=>{
    await res.clearCookie('access_token');
    res.redirect("/book");
})
app.get("/book",async(req,res)=>{
    let cars = await Car.find({});
    // console.log(res.locals.userId);
    console.log(req.cookies);
    let access_token = req.cookies.access_token;
    let isAuthenticated = false
    if(access_token){
        isAuthenticated = true;
        res.render("search.ejs",{cars,isAuthenticated})
    }
    res.render("search.ejs",{cars,isAuthenticated});
})
app.post("/book",async(req,res)=>{
    // let form = req.body;
    console.log(req.body);
    res.send("hi"); 
})
app.get("/search",auth,async(req,res)=>{
    let{location} = req.query;
    console.log(location);
    
    let cars = await Car.find();
    if(location){
    cars = await Car.find({location:location});
    // console.log(cars);
    }
    let access_token = req.cookies.access_token;
    let isAuthenticated = false
    if(access_token){
        isAuthenticated = true;
        // res.render("book.ejs",{cars,isAuthenticated})
    }
    res.render("book.ejs",{cars,isAuthenticated});
})

// for axios 
app.get("/getcars/:location",async(req,res)=>{
    let{location} = req.params;
    let cars =  await Car.find({location:location});
    res.send(cars)
})
app.get("/show",auth,async(req,res)=>{
    let{id,location,pickupDate,pickupTime,dropDate,dropTime} = req.query;
    let cars = await Car.findById(id);
    // console.log(id);
    // console.log(cars);
    let access_token = req.cookies.access_token;
    let isAuthenticated = false
    if(access_token){
        isAuthenticated = true;
        // res.render("book.ejs",{cars,isAuthenticated})
    }
    res.render("show.ejs",{isAuthenticated,id,location,pickupDate,pickupTime,dropDate,dropTime,cars});
})

app.post("/booknow", auth,async (req, res) => {
    try {
        const userId = res.locals.userId;
        
        let { carId, name, img, pickupDate, pickupTime, dropDate, dropTime, price, totalTime } = req.body;
        const newOrder = new Order({
            carId: new mongoose.Types.ObjectId(carId),
            name: name,
            img: img,
            pickupDate: pickupDate,
            pickupTime: pickupTime,
            dropDate: dropDate,
            dropTime: dropTime,
            price: price,
            totalTime: totalTime
        });
        let user = await User.findById(new mongoose.Types.ObjectId(userId));
        user.order.push(newOrder);
        let car = await Car.findByIdAndUpdate(newOrder.carId,{isBooked:true});
        // console.log(user);
        // Save the newOrder to the database
        await car.save();
        await newOrder.save();
        //saving order is inside user
        await user.save();
        console.log("Order saved successfully.");
        
        res.redirect("/orders");
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal Server Error');
    }
});
app.get("/orders", auth, async (req, res) => {
    const userId = res.locals.userId;
    let access_token = req.cookies.access_token;
    let isAuthenticated = false
    if(access_token){
        isAuthenticated = true;
        // res.render("book.ejs",{cars,isAuthenticated})
    }
    console.log("/orders userid", userId);

    try {
        let user = await User.findById(new mongoose.Types.ObjectId(userId)).populate('order');
        if (user) {
            let orders = user.order; // Access the 'order' field of the user
            console.log(orders);
            orders = orders.reverse();
            res.render("orders", { orders,isAuthenticated});
        } else {
            // Handle the case where the user is not found
            res.status(404).send("User not found");
        }
    } catch (error) {
        // Handle any other errors
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


// seedDB();
//server
const PORT = 8080;
app.listen(PORT , (err)=>{
    if(err) throw err;
    console.log(`Server Connected at http://localhost:${PORT}`);
})


